// Interactions du site : sliders, parallaxe des photos, FAQ, formulaire de contact.
// Le style des états (hover, ouvert, inactif) est dans styles/global.css.

// mouvement réduit : réglage du système, ou « mode calme » du panneau Accessibilité
let reduce = matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.classList.contains('a11y-calm');
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
  // Safari (iOS) laisse dépasser une image transformée des coins arrondis : clip-path force le découpage
  // (un masque créait un calque qui passait au-dessus des étiquettes de date dans Safari)
  const r = getComputedStyle(parent).borderTopLeftRadius || getComputedStyle(im).borderTopLeftRadius;
  parent.style.clipPath = `inset(0 round ${r && r !== '0px' ? r : getComputedStyle(im).borderTopLeftRadius})`;
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
  // hauteur d'écran figée : sur mobile la barre d'adresse qui se replie change innerHeight
  // pendant le défilement, ce qui faisait sauter les images
  let vh = document.documentElement.clientHeight;
  let vw = innerWidth;
  const update = () => {
    ticking = false;
    visible.forEach((im) => {
      const r = im.parentElement!.getBoundingClientRect();
      // -1 quand le cadre entre par le bas, +1 quand il sort par le haut
      const p = Math.max(-1, Math.min(1, (vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2)));
      im.style.setProperty('--py', `${(p * 11).toFixed(2)}%`);
    });
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', onScroll, { passive: true, signal: page.signal });
  addEventListener('resize', () => {
    if (innerWidth !== vw) { vw = innerWidth; vh = document.documentElement.clientHeight; onScroll(); }
  }, { signal: page.signal });
  setTimeout(update, 50);
}

/* ---------------- FAQ ---------------- */
function faq() {
  // tout est fermé au départ ; une seule réponse ouverte à la fois
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-faq]'));
  const set = (item: HTMLElement, open: boolean, instant = false) => {
    const a = item.querySelector<HTMLElement>('.faq-a');
    const was = item.hasAttribute('data-open');
    item.toggleAttribute('data-open', open);
    item.querySelector('.faq-q')?.setAttribute('aria-expanded', String(open));
    if (!a || (was === open && !instant)) return;
    clearTimeout((a as any)._t);
    if (instant) { a.style.height = open ? 'auto' : '0px'; return; }
    // part de la hauteur actuelle en px, puis va vers la hauteur du contenu (ou 0)
    a.style.height = a.getBoundingClientRect().height + 'px';
    void a.offsetHeight;
    a.style.height = open ? a.scrollHeight + 'px' : '0px';
    // une fois ouvert, hauteur libre (le texte peut changer de taille avec la fenêtre)
    if (open) (a as any)._t = setTimeout(() => { if (item.hasAttribute('data-open')) a.style.height = 'auto'; }, 480);
  };
  items.forEach((item) => {
    set(item, false, true);
    item.querySelector<HTMLButtonElement>('.faq-q')?.addEventListener('click', () => {
      const open = !item.hasAttribute('data-open');
      items.forEach((other) => other !== item && set(other, false));
      set(item, open);
    }, { signal: page.signal });
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

  // anti-spam : case piège invisible (botcheck) + envoi refusé moins de 3 s après l'affichage
  // (un robot remplit et envoie instantanément) ; on affiche « merci » sans rien envoyer
  const shownAt = Date.now();
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const fd = new FormData(form);
    if (fd.get('botcheck') || Date.now() - shownAt < 3000) { form.reset(); show(true); return; }
    const data: Record<string, string> = {};
    fd.forEach((v, k) => { if (k !== 'botcheck' && k !== 'consentement') data[k] = String(v); });
    // champs réservés aux organisations
    if (data.profil !== 'organisation') { delete data.organisation; delete data.fonction; }
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
    '.lien, a[data-name="Cta"]:not([class*="bg-"]) p, a[data-name="Bouton"]:not(:has([data-name="Cta"])) p[class*="Bricolage"], a[data-name="Bouton"] [data-name="Cta"] p, .faq-q p, .credit > span:last-child',
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
  const words = label ? Array.from(label.children) as HTMLElement[] : [];
  // page en cours repérée dans le menu
  const here = location.pathname.replace(/\/+$/, '') || '/';
  panel.querySelectorAll<HTMLAnchorElement>('.menu-link').forEach((a) => {
    const p = new URL(a.href).pathname.replace(/\/+$/, '') || '/';
    if (p === here || (p !== '/' && here.startsWith(p + '/'))) a.setAttribute('aria-current', 'page');
  });
  // largeur du libellé animée entre « Menu » et « Fermer »
  const fit = (open: boolean) => {
    if (!label || words.length < 2) return;
    label.style.width = words[open ? 1 : 0].scrollWidth + 'px';
  };
  const set = (open: boolean) => {
    panel.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.classList.toggle('is-open', open);
    panel.setAttribute('aria-hidden', String(!open));
    fit(open);
  };
  fit(false);
  addEventListener('a11y-change', () => fit(panel.classList.contains('is-open')), { signal: page.signal });
  btn.addEventListener('click', () => set(!panel.classList.contains('is-open')), { signal: page.signal });
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false), { signal: page.signal }));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); }, { signal: page.signal });
}

// Initialisation de chaque page : au premier chargement puis après chaque changement de page
/* ---------------- Panneau Accessibilité ---------------- */
const SIZES = [1, 1.15, 1.3];
function prefs(): Record<string, any> {
  try { return JSON.parse(localStorage.getItem('a11y') || '{}'); } catch { return {}; }
}
// taille du texte : chaque texte de la page est agrandi à partir de sa taille d'origine (maquette en px)
function textSize() {
  const f = SIZES[prefs().size || 0] ?? 1;
  const els = Array.from(document.querySelectorAll<HTMLElement>('#page :is(p, a, span, label, li, button, input, select, textarea)'));
  const orig = els.map((el) => {
    if (!el.dataset.fs) el.dataset.fs = String(parseFloat(getComputedStyle(el).fontSize));
    return parseFloat(el.dataset.fs);
  });
  els.forEach((el, i) => {
    if (f === 1) { el.style.removeProperty('font-size'); delete el.dataset.f; return; }
    // les grands titres (déjà lisibles) grossissent moins que le texte courant
    const g = orig[i] >= 32 ? 1 + (f - 1) * 0.35 : f;
    el.style.fontSize = `${(orig[i] * g).toFixed(2)}px`; el.dataset.f = String(g);
  });
  dispatchEvent(new Event('a11y-change'));
}
function a11yPanel() {
  const root = document.querySelector<HTMLElement>('[data-a11y]');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1'; // persistant entre les pages : on n'attache les écouteurs qu'une fois
  const btn = root.querySelector<HTMLButtonElement>('[data-a11y-toggle]')!;
  const panel = root.querySelector<HTMLElement>('[data-a11y-panel]')!;
  const save = (p: Record<string, any>) => { try { localStorage.setItem('a11y', JSON.stringify(p)); } catch {} };
  const sync = () => {
    const p = (window as any).__a11y?.() ?? prefs();
    root.querySelectorAll<HTMLElement>('[data-a11y-key]').forEach((b) => b.setAttribute('aria-checked', String(!!p[b.dataset.a11yKey!])));
    root.querySelectorAll<HTMLElement>('[data-a11y-size]').forEach((b) => b.setAttribute('aria-pressed', String(String(p.size || 0) === b.dataset.a11ySize)));
    textSize();
  };
  const open = (o: boolean) => {
    panel.hidden = !o;
    btn.setAttribute('aria-expanded', String(o));
    if (o) panel.querySelector<HTMLElement>('[aria-pressed="true"], button')?.focus();
  };
  btn.addEventListener('click', () => open(panel.hidden));
  root.querySelector('[data-a11y-close]')!.addEventListener('click', () => { open(false); btn.focus(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) { open(false); btn.focus(); } });
  document.addEventListener('click', (e) => { if (!panel.hidden && !root.contains(e.target as Node)) open(false); });
  root.querySelectorAll<HTMLElement>('[data-a11y-key]').forEach((b) => b.addEventListener('click', () => {
    const p = prefs(); const k = b.dataset.a11yKey!; p[k] = !p[k]; save(p); sync();
    if (k === 'calm') location.reload(); // les animations et la parallaxe se réinitialisent proprement
  }));
  root.querySelectorAll<HTMLElement>('[data-a11y-size]').forEach((b) => b.addEventListener('click', () => {
    const p = prefs(); p.size = Number(b.dataset.a11ySize); save(p); sync();
  }));
  root.querySelector('[data-a11y-reset]')!.addEventListener('click', () => {
    const calm = prefs().calm; save({}); sync(); if (calm) location.reload();
  });
  sync();
}

function init() {
  reduce = matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.classList.contains('a11y-calm');
  page.abort();
  page = new AbortController();
  mobileMenu();
  a11yPanel();
  textSize();
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
