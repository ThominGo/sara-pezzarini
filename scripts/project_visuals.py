"""Génère web/public/illustrations/motif-*.svg et projet-*.svg : illustrations des projets, dans le style des
illustrations du site (formes à dégradé radial). 100 % vectoriel, sans filtre ni texture. Règle : jamais une couleur
posée sur une autre. Un détail (trait, point, fenêtre, coche) est un TROU (a.hole) : du transparent, soustrait de ce qu'il
traverse. Quand deux objets se chevauchent, le second découpe un petit vide dans le premier (pas de contour).
Fond transparent : le dégradé du projet est posé par ProjectVisual."""
import math, random
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "web/public/illustrations"
GAP = 7  # largeur du vide entre deux formes qui se superposent

PAL = {
    "creme": "#FFFFFF,#FFF3E8,#FBD9C2,#F2B99B",
    "peche": "#FFE9DA,#FBC7A5,#F29A78,#E0766A",
    "sable": "#FFF6E4,#F9DDA8,#F0B766,#DE8F4A",
    "rose": "#FFE4EA,#F8B3C4,#EA7C9C,#C9467A",
    "ombre": "#F6C9B2,#E58F78,#C45A56,#8E2F48",
}

# ---------- géométrie : tout est converti en contours de points, puis lissé en courbes ----------
def _d(a, b): return math.hypot(b[0] - a[0], b[1] - a[1])

def rounded_poly(pts, r=0):
    n, out = len(pts), []
    for i in range(n):
        p0, p1, p2 = pts[i - 1], pts[i], pts[(i + 1) % n]
        ri = r[i] if isinstance(r, (list, tuple)) else r
        d = min(ri, 0.5 * _d(p0, p1), 0.5 * _d(p2, p1))
        if d <= 0.01:
            out.append(p1); continue
        v1 = ((p0[0] - p1[0]) / _d(p0, p1), (p0[1] - p1[1]) / _d(p0, p1))
        v2 = ((p2[0] - p1[0]) / _d(p2, p1), (p2[1] - p1[1]) / _d(p2, p1))
        a = (p1[0] + v1[0] * d, p1[1] + v1[1] * d); b = (p1[0] + v2[0] * d, p1[1] + v2[1] * d)
        for k in range(9):
            t = k / 8
            out.append(((1 - t) ** 2 * a[0] + 2 * t * (1 - t) * p1[0] + t * t * b[0],
                        (1 - t) ** 2 * a[1] + 2 * t * (1 - t) * p1[1] + t * t * b[1]))
    return out

def R(x, y, w, h, r=10): return rounded_poly([(x, y), (x + w, y), (x + w, y + h), (x, y + h)], r)
def P(pts, r=4): return rounded_poly(pts, r)
def C(cx, cy, r, n=56): return [(cx + r * math.cos(2 * math.pi * i / n), cy + r * math.sin(2 * math.pi * i / n)) for i in range(n)]
def E(cx, cy, rx, ry, n=56): return [(cx + rx * math.cos(2 * math.pi * i / n), cy + ry * math.sin(2 * math.pi * i / n)) for i in range(n)]

def rot(pts, cx, cy, deg):
    a = math.radians(deg); c, s = math.cos(a), math.sin(a)
    return [(cx + (x - cx) * c - (y - cy) * s, cy + (x - cx) * s + (y - cy) * c) for x, y in pts]

def bar(x1, y1, x2, y2, w, r=None):
    L = _d((x1, y1), (x2, y2)); a = math.degrees(math.atan2(y2 - y1, x2 - x1))
    return rot(R(x1, y1 - w / 2, L, w, r if r is not None else w / 2), x1, y1, a)

def ribbon(cx, y0, y1, amp, w):
    left, right = [], []
    for k in range(25):
        t = k / 24; x = cx + amp * math.sin(2 * math.pi * t * 1.2); y = y0 + (y1 - y0) * t
        hw = w * math.sin(math.pi * t) ** 0.6 / 2
        left.append((x - hw, y)); right.append((x + hw, y))
    return left + right[::-1]

def star(cx, cy, R1, R2, r=5):
    pts = [(cx + (R1 if i % 2 == 0 else R2) * math.sin(math.pi * i / 5), cy - (R1 if i % 2 == 0 else R2) * math.cos(math.pi * i / 5)) for i in range(10)]
    return rounded_poly(pts, r)

def person(cx, cy, s=1.0):
    return [C(cx, cy - 34 * s, 24 * s), R(cx - 40 * s, cy + 2 * s, 80 * s, 86 * s, 36 * s)]

def resample(pts, step=4):
    n = len(pts); seg = [_d(pts[i], pts[(i + 1) % n]) for i in range(n)]; per = sum(seg)
    m = max(8, int(per / step)); out = []; i = 0; acc = 0.0
    for k in range(m):
        target = per * k / m
        while acc + seg[i] < target - 1e-9:
            acc += seg[i]; i += 1
        t = (target - acc) / seg[i] if seg[i] else 0
        a, b = pts[i], pts[(i + 1) % n]
        out.append((a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t))
    return out, per

def rough(pts, rnd, amp=2.1):
    pts, per = resample(pts)
    n = len(pts); amp *= min(1.0, per / 320)
    k1 = max(1, round(per / 80)); k2 = max(1, round(per / 37)); p1, p2 = rnd.uniform(0, 6.28), rnd.uniform(0, 6.28)
    out = []
    for i in range(n):
        a, b = pts[i - 1], pts[(i + 1) % n]
        nx, ny = (b[1] - a[1]), -(b[0] - a[0]); L = math.hypot(nx, ny) or 1
        t = i / n
        off = amp * (0.62 * math.sin(2 * math.pi * k1 * t + p1) + 0.38 * math.sin(2 * math.pi * k2 * t + p2))
        out.append((pts[i][0] + nx / L * off, pts[i][1] + ny / L * off))
    return out

def poly_path(pts):
    f = lambda v: f"{v:.1f}".rstrip("0").rstrip(".")
    return "M" + "L".join(f"{f(x)} {f(y)}" for x, y in pts) + "Z"

def hand(pts, rnd):
    """Tracé à la plume : petits segments droits, sommets décalés au hasard, quelques crans. Vraie géométrie, pas un filtre."""
    base, per = resample(pts, 3)
    n = len(base)
    # sommets espacés de 13 à 30 px, selon la taille de la forme
    lo = 13 if per > 260 else 9
    keep, acc, last = [0], 0.0, 0
    step = rnd.uniform(lo, lo + 17)
    for i in range(1, n):
        acc += _d(base[i - 1], base[i])
        if acc >= step and (n - i) > 3:
            keep.append(i); acc = 0.0; step = rnd.uniform(lo, lo + 17)
    if len(keep) < 6:
        keep = list(range(0, n, max(1, n // 6)))
    amp = min(2.6, 0.6 + per / 160)
    out = []
    for j, i in enumerate(keep):
        a, b = base[i - 1], base[(i + 1) % n]
        nx, ny = (b[1] - a[1]), -(b[0] - a[0]); L = math.hypot(nx, ny) or 1
        off = rnd.uniform(-amp, amp)
        if rnd.random() < 0.13: off += rnd.choice((-1, 1)) * rnd.uniform(2.2, 4.0)  # petit cran
        out.append((base[i][0] + nx / L * off + rnd.uniform(-0.8, 0.8), base[i][1] + ny / L * off + rnd.uniform(-0.8, 0.8)))
    return out

def smooth_path(pts):
    n = len(pts); f = lambda v: f"{v:.1f}".rstrip("0").rstrip(".")
    d = f"M{f(pts[0][0])} {f(pts[0][1])}"
    for i in range(n):
        p0, p1, p2, p3 = pts[i - 1], pts[i], pts[(i + 1) % n], pts[(i + 2) % n]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += f"C{f(c1[0])} {f(c1[1])} {f(c2[0])} {f(c2[1])} {f(p2[0])} {f(p2[1])}"
    return d + "Z"

# ---------- assemblage ----------
class Art:
    def __init__(self, seed=0):
        self.items = []
        self.rnd = random.Random(seed)

    def _d(self, contours):
        if contours and isinstance(contours[0], tuple): contours = [contours]
        return "".join(poly_path(hand(c, self.rnd)) for c in contours)

    def add(self, contours, pal):
        """Forme pleine. Elle découpe un vide autour d'elle dans les formes déjà dessinées qu'elle recouvre."""
        self.items.append(("shape", self._d(contours), pal))

    def hole(self, contours):
        """Trou : transparent, soustrait de toutes les formes déjà dessinées."""
        self.items.append(("hole", self._d(contours), None))

    def save(self, name):
        defs, body, items = [], [], self.items
        for i, (kind, d, pal) in enumerate(items):
            defs.append(f'<path id="s{i}" d="{d}"/>')
        for i, (kind, d, pal) in enumerate(items):
            if kind != "shape": continue
            stops = "".join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in zip(("0", "0.45", "0.8", "1"), PAL[pal].split(",")))
            defs.append(f'<radialGradient id="g{i}" cx="0.3" cy="0.15" r="1.1">{stops}</radialGradient>')
            cuts = "".join(
                f'<use href="#s{j}" fill="#000" stroke="#000" stroke-width="{GAP}" stroke-linejoin="miter"/>' if items[j][0] == "shape"
                else f'<use href="#s{j}" fill="#000"/>' for j in range(i + 1, len(items)))
            if cuts:
                defs.append(f'<mask id="m{i}" maskUnits="userSpaceOnUse" x="0" y="0" width="459" height="459"><rect width="459" height="459" fill="#fff"/>{cuts}</mask>')
                body.append(f'<use href="#s{i}" fill="url(#g{i})" fill-rule="evenodd" mask="url(#m{i})"/>')
            else:
                body.append(f'<use href="#s{i}" fill="url(#g{i})" fill-rule="evenodd"/>')
        svg = ('<svg width="459" height="459" viewBox="0 0 459 459" fill="none" xmlns="http://www.w3.org/2000/svg">'
               f'<defs>{"".join(defs)}</defs>{"".join(body)}</svg>\n')
        (OUT / f"{name}.svg").write_text(svg)

OUT.mkdir(parents=True, exist_ok=True)
MOTIFS = {}
def motif(fn):
    MOTIFS[fn.__name__] = fn; return fn

def card_tab(x, y, w, h, tx, tw, r=14):  # fiche avec onglet, d'un seul tenant
    pts = [(x + tx, y - 22), (x + tx + tw, y - 22), (x + tx + tw + 14, y), (x + w, y), (x + w, y + h), (x, y + h), (x, y), (x + tx - 14, y)]
    if tx == 0: pts = [(x, y - 22), (x + tw, y - 22), (x + tw + 14, y), (x + w, y), (x + w, y + h), (x, y + h)]
    return P(pts, [5, 5, 5, r, r, r, r, 5][: len(pts)] if tx else [5, 5, 5, r, r, r])

# --- isométrie ---
S_ = 56
def iso(x, y, z=0): return (230 + (x - y) * 0.866 * S_, 205 + (x + y) * 0.5 * S_ - z * S_)
def quad(*pts): return [iso(*p) for p in pts]
def box(a, x0, y0, z0, dx, dy, dz, top, left, right, r=2):
    x1, y1, z1 = x0 + dx, y0 + dy, z0 + dz
    a.add(P(quad((x0, y1, z0), (x1, y1, z0), (x1, y1, z1), (x0, y1, z1)), r), left)
    a.add(P(quad((x1, y0, z0), (x1, y1, z0), (x1, y1, z1), (x1, y0, z1)), r), right)
    a.add(P(quad((x0, y0, z1), (x1, y0, z1), (x1, y1, z1), (x0, y1, z1)), r), top)

@motif
def fiches(a):  # répertoire d'outils : fichier à onglets
    a.add(card_tab(120, 130, 200, 240, 0, 70), "ombre")
    a.add(card_tab(160, 160, 200, 240, 90, 70), "peche")
    a.add(R(200, 190, 200, 240, 14), "creme")
    for y, w in ((236, 136), (272, 108), (308, 124)): a.hole(R(232, y, w, 16, 8))
    a.hole(C(250, 372, 18)); a.hole(R(282, 364, 72, 16, 8))

@motif
def ecran(a):  # présentation devant une équipe
    a.add(P([(228, 290), (242, 290), (262, 372), (248, 372)], 3), "ombre"); a.add(P([(236, 290), (250, 290), (210, 372), (196, 372)], 3), "ombre")
    a.add(R(176, 368, 126, 18, 9), "ombre")
    a.add(R(100, 130, 250, 160, 14), "creme")
    for y, w in ((162, 120), (194, 160), (226, 90)): a.hole(R(130, y, w, 16, 8))
    a.add(P([(318, 90), (412, 90), (412, 172), (360, 172), (334, 198), (334, 172), (318, 172)], [22, 22, 22, 4, 4, 4, 22]), "peche")
    for x in (338, 362, 386): a.hole(C(x, 131, 7))

@motif
def piece(a):  # chambre en isométrie
    a.add(P(quad((0, 0, 0), (3, 0, 0), (3, 3, 0), (0, 3, 0)), 3), "sable")
    a.add(P(quad((0, 0, 0), (0, 3, 0), (0, 3, 2), (0, 0, 2)), 3), "creme")
    a.add(P(quad((0, 0, 0), (3, 0, 0), (3, 0, 2), (0, 0, 2)), 3), "peche")
    a.hole(P(quad((1.55, 0, 0.9), (2.55, 0, 0.9), (2.55, 0, 1.7), (1.55, 0, 1.7)), 3))
    a.hole(P(quad((1.5, 1.5, 0), (2.7, 1.5, 0), (2.7, 2.7, 0), (1.5, 2.7, 0)), 3))
    a.add(P(quad((1.66, 1.66, 0), (2.54, 1.66, 0), (2.54, 2.54, 0), (1.66, 2.54, 0)), 3), "rose")
    box(a, 0.2, 0.2, 0, 1.7, 1.1, 0.4, "peche", "ombre", "ombre")
    box(a, 0.35, 0.3, 0.4, 0.55, 0.5, 0.14, "creme", "creme", "creme", 3)
    box(a, 1.1, 0.3, 0.4, 0.55, 0.5, 0.14, "creme", "creme", "creme", 3)
    box(a, 2.2, 0.15, 0, 0.5, 0.55, 0.55, "sable", "peche", "peche")

@motif
def plan(a):  # plan vu du dessus
    a.add([R(95, 100, 270, 230, 12), R(121, 126, 218, 178, 4)], "peche")
    a.hole(R(176, 296, 78, 40, 0)); a.hole(R(330, 168, 40, 64, 0))
    a.add(R(142, 150, 88, 122, 14), "creme")
    a.hole(R(152, 160, 32, 26, 8)); a.hole(R(188, 160, 32, 26, 8))
    a.add(R(296, 148, 34, 116, 6), "sable"); a.add(R(240, 252, 84, 36, 10), "rose")
    a.add(R(95, 360, 270, 24, 8), "ombre")
    for i, x in enumerate(range(112, 352, 30)): a.hole(R(x, 360, 5, 10 if i % 2 == 0 else 15, 2))

@motif
def deplacer(a):  # déplacer un meuble sur le plan
    a.add(R(86, 170, 112, 124, 26), "peche")
    a.add(R(70, 234, 36, 86, 16), "ombre"); a.add(R(178, 234, 36, 86, 16), "ombre")
    a.add(R(96, 262, 100, 52, 16), "creme")
    a.add(R(92, 320, 14, 28, 5), "ombre"); a.add(R(178, 320, 14, 28, 5), "ombre")
    a.add(P([(226, 258), (262, 258), (262, 238), (302, 274), (262, 310), (262, 290), (226, 290)], 6), "sable")
    a.add([R(318, 228, 100, 100, 16), R(332, 242, 72, 72, 8)], "rose")

@motif
def lit(a):  # changer dans la vraie chambre
    a.add(R(100, 130, 260, 170, 26), "peche")
    a.hole(star(230, 190, 26, 11, 3))
    a.add(R(80, 252, 300, 64, 20), "creme")
    a.add(R(80, 276, 300, 52, 18), "rose")
    a.add(R(120, 214, 86, 44, 20), "sable"); a.add(R(214, 214, 86, 44, 20), "sable")
    a.add(R(96, 322, 22, 44, 6), "ombre"); a.add(R(342, 322, 22, 44, 6), "ombre")

@motif
def marmite(a):
    a.add(P([(120, 215), (340, 215), (340, 290), (275, 358), (185, 358), (120, 290)], [6, 6, 48, 36, 36, 48]), "peche")
    a.add(R(76, 238, 46, 18, 9), "ombre"); a.add(R(338, 238, 46, 18, 9), "ombre")
    a.add(R(108, 188, 244, 34, 14), "creme"); a.add(C(230, 176, 14), "ombre")
    for dx in (-52, 0, 52): a.add(ribbon(230 + dx, 150, 74, 12, 22), "creme")

@motif
def marches(a):  # quête : marches et étoile ; capacités mises en avant
    a.add(R(92, 320, 86, 70, 10), "ombre"); a.add(R(160, 270, 86, 120, 10), "rose"); a.add(R(228, 220, 86, 170, 10), "peche"); a.add(R(296, 170, 86, 220, 10), "sable")
    a.add(star(339, 118, 52, 22, 6), "creme")

@motif
def fenetre(a):  # site de ressources
    a.add(R(100, 120, 260, 220, 16), "creme")
    for x, y, w, h in ((124, 184, 98, 62), (238, 184, 98, 62), (124, 262, 98, 54), (238, 262, 98, 54)): a.hole(R(x, y, w, h, 10))
    a.add(P([(100, 160), (100, 136), (116, 120), (344, 120), (360, 136), (360, 160)], [0, 16, 16, 16, 16, 0]), "ombre")
    for x in (126, 148, 170): a.hole(C(x, 140, 7))
    a.add(P([(300, 280), (300, 372), (322, 350), (340, 388), (356, 380), (338, 344), (368, 340)], 3), "ombre")

@motif
def loupe(a):  # relever, observer
    a.add(bar(268, 258, 350, 340, 34), "ombre")
    a.add([C(205, 195, 88), C(205, 195, 54)], "peche")
    a.add(R(130, 350, 70, 16, 8), "sable"); a.add(R(130, 380, 120, 16, 8), "rose")

@motif
def groupe(a):  # tester avec le public
    for (cx, cy, pal) in ((150, 200, "ombre"), (310, 200, "sable")):
        for c in person(cx, cy, 0.85): a.add(c, pal)
    for c in person(230, 218, 1.1): a.add(c, "creme")
    a.add(R(150, 352, 160, 14, 7), "peche")

@motif
def jeu(a):  # cartes et dé
    a.add(rot(R(110, 120, 150, 210, 16), 185, 225, -12), "rose")
    a.add(rot(R(205, 110, 150, 210, 16), 280, 215, 9), "creme")
    a.hole(rot(star(282, 200, 34, 15, 4), 280, 215, 9))
    a.add(rot(R(250, 280, 96, 96, 18), 298, 328, 14), "sable")
    for dx, dy in ((-20, -20), (20, 20), (0, 0), (20, -20), (-20, 20)): a.hole(C(298 + dx, 328 + dy, 8))

@motif
def mallette(a):  # insertion professionnelle
    a.add([R(180, 110, 100, 90, 22), R(204, 132, 52, 66, 10)], "ombre")
    a.add(R(100, 170, 260, 180, 24), "peche")
    a.hole(R(100, 244, 260, 12, 0)); a.hole(R(212, 228, 36, 44, 8))

@motif
def checklist(a):  # évaluer
    a.add(R(130, 100, 200, 270, 20), "creme"); a.add(R(185, 80, 90, 40, 14), "ombre")
    for y in (165, 225, 285): a.hole(C(172, y, 14)); a.hole(R(204, y - 8, 96, 16, 8))

@motif
def poignee(a):  # valider ensemble : deux cercles et une coche
    a.add(C(180, 230, 92), "peche"); a.add(C(284, 230, 92), "rose")
    a.hole(bar(214, 238, 242, 268, 24)); a.hole(bar(242, 268, 306, 196, 24))

@motif
def diapos(a):  # construire le diaporama
    a.add(rot(R(120, 120, 220, 150, 14), 230, 195, -9), "ombre")
    a.add(rot(R(140, 160, 220, 150, 14), 250, 235, 5), "peche")
    a.add(R(110, 200, 240, 160, 14), "creme")
    a.hole(P([(132, 338), (190, 262), (232, 310), (262, 276), (328, 338)], 4)); a.hole(C(300, 238, 16))

@motif
def bulles(a):  # dialogue, échange
    a.add(P([(100, 110), (280, 110), (280, 230), (200, 230), (160, 270), (160, 230), (100, 230)], [26, 26, 26, 4, 4, 4, 26]), "peche")
    for x in (140, 190, 240): a.hole(C(x, 170, 9))
    a.add(P([(180, 200), (360, 200), (360, 320), (320, 320), (320, 360), (280, 320), (180, 320)], [26, 26, 26, 4, 4, 4, 26]), "creme")
    a.hole(R(210, 238, 110, 14, 7)); a.hole(R(210, 266, 70, 14, 7))

@motif
def oeil(a):  # ressentir pour comprendre
    top = [(100 + 260 * t / 24, 230 - 92 * (1 - ((t / 24 - 0.5) * 2) ** 2) ** 0.8) for t in range(25)]
    bot = [(100 + 260 * t / 24, 230 + 92 * (1 - ((t / 24 - 0.5) * 2) ** 2) ** 0.8) for t in range(24, -1, -1)]
    a.add(top + bot[1:-1], "creme"); a.hole(C(230, 230, 58))
    a.add(C(230, 230, 36), "rose"); a.hole(C(216, 216, 9))

@motif
def maison(a):
    a.add(R(296, 120, 36, 70, 4), "ombre")
    a.add(R(130, 205, 200, 160, 12), "peche")
    a.hole(R(204, 280, 52, 85, 10)); a.hole(R(150, 240, 42, 42, 8)); a.hole(R(268, 240, 42, 42, 8))
    a.add(P([(100, 218), (230, 106), (360, 218)], 10), "ombre")

@motif
def duo(a):  # accompagnement individuel
    for c in person(160, 230, 1.0): a.add(c, "peche")
    for c in person(300, 250, 0.9): a.add(c, "creme")
    a.add(P([(190, 90), (300, 90), (300, 150), (262, 150), (246, 172), (246, 150), (190, 150)], [18, 18, 18, 3, 3, 3, 18]), "rose")
    for x in (222, 245, 268): a.hole(C(x, 120, 7))

@motif
def carte(a):  # choisir un univers
    a.add(P([(100, 170), (190, 190), (190, 360), (100, 340)], 8), "sable")
    a.add(P([(190, 190), (270, 170), (270, 340), (190, 360)], 8), "peche")
    a.add(P([(270, 170), (360, 190), (360, 360), (270, 340)], 8), "rose")
    a.add(C(262, 135, 36), "ombre"); a.add(P([(236, 158), (288, 158), (262, 208)], 6), "ombre"); a.hole(C(262, 135, 14))

@motif
def parchemin(a):  # créer des quêtes
    a.add(R(150, 120, 170, 250, 12), "creme")
    for y, w in ((186, 118), (224, 90), (262, 110)): a.hole(R(176, y, w, 14, 7))
    a.hole(star(290, 324, 22, 10, 3))
    a.add(R(128, 98, 214, 40, 20), "peche"); a.add(R(128, 352, 214, 40, 20), "peche")

@motif
def pile(a):  # recenser l'existant
    a.add(rot(R(100, 150, 250, 56, 12), 225, 178, -3), "rose"); a.add(R(120, 224, 250, 56, 12), "creme"); a.add(rot(R(96, 298, 250, 56, 12), 221, 326, 2), "peche")
    for x in (150, 176): a.hole(R(x, 238, 12, 28, 4))

@motif
def eclair(a):  # accès rapide
    a.add(C(230, 230, 140), "ombre")
    a.hole(P([(256, 100), (172, 244), (226, 244), (204, 362), (300, 206), (244, 206)], 8))

@motif
def ebauche(a):  # première ébauche
    a.add(R(100, 130, 230, 190, 16), "creme")
    a.hole(R(124, 186, 82, 50, 8)); a.hole(R(222, 186, 84, 14, 7)); a.hole(R(222, 214, 60, 14, 7)); a.hole(R(124, 254, 182, 14, 7))
    a.add(P([(100, 166), (100, 146), (116, 130), (314, 130), (330, 146), (330, 166)], [0, 16, 16, 16, 16, 0]), "peche")
    a.add(rot(R(270, 270, 120, 30, 6), 330, 285, -45), "ombre"); a.add(rot(P([(386, 262), (410, 244), (400, 288)], 3), 330, 285, -45), "sable")

for i, (name, fn) in enumerate(MOTIFS.items()):
    art = Art(); fn(art); art.save(f"motif-{name}")

# illustrations d'en-tête de chaque projet (mêmes dessins)
for proj, m in {"repertoire": "fiches", "sensibilisation": "ecran", "plan3d": "piece", "cuisine": "marmite", "quete": "marches", "ressources": "fenetre"}.items():
    art = Art(); MOTIFS[m](art); art.save(f"projet-{proj}")
print("ok", len(MOTIFS))
