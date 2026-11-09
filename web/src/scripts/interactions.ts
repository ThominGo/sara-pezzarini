// Interactions du site : sliders, parallaxe des photos, FAQ, formulaire de contact.
// Le style des états (hover, ouvert, inactif) est dans styles/global.css.

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
// Écouteurs posés sur window pour la page en cours : retirés quand on change de page (navigation sans rechargement)
let page = new AbortController();
const zoom = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--zoom')) || 1;

/** Rend un élément non-lien activable au clavier comme un bouton */
function asButton(el: HTMLElement, onClick: () => void) {
  el.setAttribute('role', 'button');
  el.tabIndex = 0;
  el.addEventListener('click', onClick);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); }
  });
}

/** Prépare le cadre d'une photo : il coupe l'image agrandie et porte des coins arrondis */
function frame(im: HTMLImageElement) {
  const parent = im.parentElement!;
  parent.style.overflow = 'hidden';
  const pr = getComputedStyle(parent).borderTopLeftRadius;
  const ir = getComputedStyle(im).borderTopLeftRadius;
  if (pr === '0px') parent.style.borderRadius = ir !== '0px' ? ir : '8px';
}
const isPhoto = (im: HTMLImageElement) => {
  const src = im.getAttribute('src') || '';
  return /\/images\/|cdn\.sanity\.io/.test(src) && !/\.svg(\?|$)/.test(src) && !im.hasAttribute('data-no-parallax');
};

/* ---------------- Sliders : flèches + glisser ---------------- */
function sliders() {
  document.querySelectorAll<HTMLElement>('[data-name="slider"]').forEach((slider) => {
    const ctas = slider.querySelectorAll<HTMLElement>('[data-name="Cta"]');
    if (ctas.length < 2) return;
    const [prev, next] = [ctas[0], ctas[1]];
    const header = prev.parentElement!.parentElement!;
    const track = header.nextElementSibling as HTMLElement | null;
    if (!track || track.children.length < 2) return;
    track.dataset.sliderTrack = '';
    prev.classList.remove('opacity-40');
    next.classList.remove('opacity-40');

    const items = Array.from(track.children) as HTMLElement[];
    let x = 0;
    // parallaxe horizontale : chaque photo glisse un peu moins vite que sa carte
    const photos = items.map((it) => Array.from(it.querySelectorAll('img')).find(isPhoto)).map((im) => {
      if (!im || reduce) return null;
      frame(im);
      im.dataset.hparallax = '';
      return im;
    });
    const shift = () => photos.forEach((im, i) => {
      if (!im) return;
      const it = items[i];
      const off = it.offsetLeft - items[0].offsetLeft - x + it.offsetWidth / 2 - header.offsetWidth / 2;
      const max = it.offsetWidth * 0.13;
      im.style.setProperty('--px', `${Math.max(-max, Math.min(max, -off * 0.11)).toFixed(1)}px`);
    });
    const step = () => items[1].offsetLeft - items[0].offsetLeft;
    const max = () => {
      const last = items[items.length - 1];
      return Math.max(0, last.offsetLeft + last.offsetWidth - items[0].offsetLeft - header.offsetWidth);
    };
    const render = () => {
      track.style.transform = `translate3d(${-x}px,0,0)`;
      shift();
      prev.setAttribute('aria-disabled', String(x <= 0));
      next.setAttribute('aria-disabled', String(x >= max() - 1));
    };
    const go = (to: number) => { x = Math.min(max(), Math.max(0, to)); render(); };
    const snap = (to: number) => {
      // on s'aligne sur une carte, sauf en fin de liste où l'on bute sur le bord
      const s = step();
      go(Math.min(max(), Math.round(to / s) * s));
    };
    asButton(prev, () => snap(x - step()));
    asButton(next, () => snap(x + step()));

    // Glisser (souris, doigt, stylet)
    let startX = 0, startPos = 0, moved = false, id: number | null = null;
    track.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      id = e.pointerId; startX = e.clientX; startPos = x; moved = false;
      track.setPointerCapture(id);
      track.classList.add('is-dragging');
    });
    track.addEventListener('pointermove', (e) => {
      if (id !== e.pointerId) return;
      const dx = (e.clientX - startX) / zoom();
      if (Math.abs(dx) > 4) moved = true;
      // un peu d'élasticité aux extrémités
      let to = startPos - dx;
      if (to < 0) to = to / 3;
      if (to > max()) to = max() + (to - max()) / 3;
      x = to;
      track.style.transform = `translate3d(${-x}px,0,0)`;
      shift();
    });
    const end = (e: PointerEvent) => {
      if (id !== e.pointerId) return;
      id = null;
      track.classList.remove('is-dragging');
      const dx = (e.clientX - startX) / zoom();
      // un glissé franc passe à la carte suivante / précédente
      if (Math.abs(dx) > 40) snap(dx < 0 ? Math.max(x, startPos + step() * 0.5) : Math.min(x, startPos - step() * 0.5));
      else snap(startPos);
    };
    track.addEventListener('pointerup', end);
    track.addEventListener('pointercancel', end);
    track.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
    track.addEventListener('dragstart', (e) => e.preventDefault());
    addEventListener('resize', () => go(x), { signal: page.signal });
    render();
  });
}

/* ---------------- Parallaxe des photos ---------------- */
function parallax() {
  if (reduce) {
    document.querySelectorAll<HTMLImageElement>('img').forEach((im) => isPhoto(im) && frame(im));
    return;
  }
  const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('img')).filter(
    (im) => isPhoto(im) && !im.closest('[data-slider-track]') && !im.closest('.size-\\[459px\\]'),
  );
  const visible = new Set<HTMLImageElement>();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => (en.isIntersecting ? visible.add(en.target as HTMLImageElement) : visible.delete(en.target as HTMLImageElement)));
  }, { rootMargin: '20% 0px' });

  imgs.forEach((im) => {
    frame(im);
    im.dataset.parallax = '';
    io.observe(im);
  });

  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = innerHeight;
    visible.forEach((im) => {
      const r = im.parentElement!.getBoundingClientRect();
      // -1 quand le cadre entre par le bas, +1 quand il sort par le haut
      const p = Math.max(-1, Math.min(1, (vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2)));
      im.style.setProperty('--py', `${(p * 11).toFixed(2)}%`);
    });
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', onScroll, { passive: true, signal: page.signal });
  addEventListener('resize', onScroll, { signal: page.signal });
  setTimeout(update, 50);
}

/* ---------------- FAQ ---------------- */
function faq() {
  document.querySelectorAll<HTMLElement>('[data-faq]').forEach((item) => {
    const q = item.querySelector<HTMLButtonElement>('.faq-q');
    q?.addEventListener('click', () => {
      const open = !item.hasAttribute('data-open');
      item.toggleAttribute('data-open', open);
      q.setAttribute('aria-expanded', String(open));
    });
  });
}

/* ---------------- Formulaire de contact ---------------- */
function contactForm() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form) return;
  const status = form.querySelector<HTMLElement>('[data-form-status]')!;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const show = (ok: boolean) => {
    status.textContent = (ok ? status.dataset.ok : status.dataset.ko) || '';
    status.hidden = false;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const fd = new FormData(form);
    if (fd.get('botcheck')) return;
    const data: Record<string, string> = {};
    fd.forEach((v, k) => { if (k !== 'botcheck' && k !== 'consentement') data[k] = String(v); });
    const profil = data.profil === 'organisation' ? 'Organisation' : 'Personne ou proche';
    const subject = `Nouveau message de ${data.nom || 'quelqu’un'} depuis le site`;
    const key = form.dataset.key;

    // Sans clé Web3Forms : on ouvre la messagerie du visiteur avec le message prérempli
    if (!key) {
      const body = [
        `Profil : ${profil}`, `Nom : ${data.nom}`, data.organisation && `Organisation : ${data.organisation}`,
        data.fonction && `Fonction : ${data.fonction}`, `E-mail : ${data.email}`, data.telephone && `Téléphone : ${data.telephone}`,
        data.besoin && `Besoin : ${data.besoin}`, '', data.message,
      ].filter((l) => typeof l === 'string').join('\n');
      location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    button.disabled = true;
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key, subject, from_name: 'Site Sara Pezzarini', replyto: data.email,
          Profil: profil, Nom: data.nom, Organisation: data.organisation, Fonction: data.fonction,
          'E-mail': data.email, Téléphone: data.telephone, Besoin: data.besoin, Message: data.message,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error(json.message || res.statusText);
      form.reset();
      show(true);
    } catch {
      show(false);
    } finally {
      button.disabled = false;
    }
  });
}

/* ---------------- Apparition des dégradés des heros ---------------- */
function heroes() {
  document.querySelectorAll<HTMLImageElement>('[data-hero] .gshape').forEach((im) => {
    // voile sombre au-dessus des couleurs, sous le grain (le grain est le ::after du conteneur)
    const veil = document.createElement('div');
    veil.className = 'hero-veil';
    im.parentElement!.appendChild(veil);
    const start = () => requestAnimationFrame(() => { im.classList.add('is-ready'); veil.classList.add('is-ready'); });
    const done = () => { im.classList.add('is-done'); veil.classList.add('is-done'); };
    // la forme finale est redessinée nette une fois l'animation finie
    veil.addEventListener('animationend', done, { once: true });
    if (im.complete && im.naturalWidth) start();
    else { im.addEventListener('load', start, { once: true }); im.addEventListener('error', done, { once: true }); }
  });
}

/* ---------------- Textes du hero : décalage d'apparition ---------------- */
function heroTexts() {
  document.querySelectorAll<HTMLElement>('[data-hero]').forEach((hero) => {
    const els = hero.querySelectorAll<HTMLElement>(':is(p, [data-name="Cta"], div[class*="bg-[var(--white"]:has(> p)):not([data-name="Cta"] p):not(div[class*="bg-[var(--white"] > p):not([aria-hidden] *)');
    els.forEach((el, i) => el.style.setProperty('--d', `${(0.9 + i * 0.12).toFixed(2)}s`));
  });
}

/* ---------------- Soulignement de gauche à droite ---------------- */
function underlines() {
  const targets = document.querySelectorAll<HTMLElement>(
    '.lien, a[data-name="Cta"]:not([class*="bg-"]) p, a[data-name="Bouton"] p[class*="Bricolage"], a[data-name="Bouton"] [data-name="Cta"] p, .faq-q p, .credit > span:last-child',
  );
  targets.forEach((el) => {
    if (el.classList.contains('underline')) return; // souligné en permanence dans la maquette
    const inner = el.querySelector(':scope > p') as HTMLElement | null;
    const box = inner ?? el;
    if (Array.from(box.childNodes).some((n) => n.nodeType === 1 && (n as Element).tagName !== 'BR')) return;
    if (box.querySelector(':scope > .u')) return;
    const span = document.createElement('span');
    span.className = 'u';
    while (box.firstChild) span.appendChild(box.firstChild);
    box.appendChild(span);
  });
}

/* ---------------- Lien vers la page actuelle : simple retour en haut, sans transition ---------------- */
function samePageLinks() {
  const norm = (p: string) => p.replace(/\/+$/, '') || '/';
  // phase de capture : passe avant le routeur d'Astro, qui ignore un clic déjà annulé
  addEventListener('click', (e) => {
    const a = (e.target as Element).closest?.('a[href]') as HTMLAnchorElement | null;
    if (!a || a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.hash || norm(url.pathname) !== norm(location.pathname)) return;
    e.preventDefault();
    scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }, true);
}

samePageLinks();

/* ---------------- Menu mobile ---------------- */
function mobileMenu() {
  const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu-panel]');
  if (!btn || !panel) return;
  const label = btn.querySelector<HTMLElement>('[data-menu-label]');
  const set = (open: boolean) => {
    panel.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.classList.toggle('is-open', open);
    if (label) label.textContent = open ? 'Fermer' : 'Menu';
  };
  btn.addEventListener('click', () => set(!panel.classList.contains('is-open')));
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); }, { signal: page.signal });
}

// Initialisation de chaque page : au premier chargement puis après chaque changement de page
function init() {
  page.abort();
  page = new AbortController();
  mobileMenu();
  heroTexts();
  underlines();
  heroes();
  sliders();
  parallax();
  faq();
  contactForm();
}
document.addEventListener('astro:page-load', init);
// sans le routeur (aperçu Sanity) l'événement n'existe pas : on initialise directement
if (!document.querySelector('meta[name="astro-view-transitions-enabled"]')) init();
