"""Génère web/public/illustrations/motif-*.svg et projet-*.svg : illustrations des projets, dans le style des
illustrations du site (formes à dégradé radial, bords légèrement irréguliers). 100 % vectoriel : l'irrégularité des
bords est écrite dans les tracés (pas de filtre, donc rien de pixellisé à aucune taille), les séparations entre formes
sont des vides découpés par masque (pas de contour). Fond transparent : le dégradé du projet est posé par ProjectVisual."""
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
    def __init__(self, seed):
        self.rnd = random.Random(seed); self.shapes = []

    def add(self, contours, pal, cut=True):
        """contours : un contour (liste de points) ou une liste de contours (le deuxième est un trou)."""
        if contours and isinstance(contours[0], tuple): contours = [contours]
        d = "".join(smooth_path(rough(c, self.rnd)) for c in contours)
        self.shapes.append((d, pal, cut))

    def save(self, name):
        defs, body, shapes = [], [], self.shapes
        for i, (d, pal, cut) in enumerate(shapes):
            stops = "".join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in zip(("0", "0.45", "0.8", "1"), PAL[pal].split(",")))
            defs.append(f'<path id="s{i}" d="{d}"/>')
            defs.append(f'<radialGradient id="g{i}" cx="0.3" cy="0.15" r="1.1">{stops}</radialGradient>')
            later = [j for j in range(i + 1, len(shapes)) if shapes[j][2]]
            if later:
                cuts = "".join(f'<use href="#s{j}" fill="#000" stroke="#000" stroke-width="{GAP}" stroke-linejoin="round"/>' for j in later)
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

@motif
def fiches(a):  # répertoire d'outils : fichier à onglets
    a.add(R(120, 110, 200, 250, 14), "ombre"); a.add(P([(150, 92), (205, 92), (215, 112), (150, 112)], 5), "ombre", False)
    a.add(R(160, 140, 200, 250, 14), "peche"); a.add(P([(250, 122), (310, 122), (320, 142), (250, 142)], 5), "peche", False)
    a.add(R(200, 170, 200, 250, 14), "creme")
    a.add(R(232, 222, 136, 16, 8), "rose", False); a.add(R(232, 258, 108, 16, 8), "sable", False); a.add(R(232, 294, 124, 16, 8), "sable", False)
    a.add(C(250, 356, 20), "rose", False); a.add(R(284, 348, 72, 16, 8), "peche", False)

@motif
def ecran(a):  # présentation devant une équipe
    a.add(R(110, 130, 250, 160, 14), "creme")
    a.add(R(138, 160, 120, 16, 8), "rose", False); a.add(R(138, 192, 160, 16, 8), "sable", False); a.add(R(138, 224, 90, 16, 8), "peche", False)
    a.add(P([(228, 290), (242, 290), (262, 372), (248, 372)], 3), "ombre", False); a.add(P([(236, 290), (250, 290), (210, 372), (196, 372)], 3), "ombre", False)
    a.add(R(176, 368, 126, 18, 9), "ombre")
    a.add(P([(318, 96), (412, 96), (412, 178), (360, 178), (334, 204), (334, 178), (318, 178)], [22, 22, 22, 4, 4, 4, 22]), "peche", False)
    for x in (332, 356, 380): a.add(C(x, 137, 7), "rose", False)

@motif
def piece(a):  # chambre en isométrie
    a.add(P([(229, 330), (359, 255), (229, 180), (99, 255)], 4), "sable")
    a.add(P([(99, 255), (229, 180), (229, 90), (99, 165)], 4), "creme"); a.add(P([(229, 180), (359, 255), (359, 165), (229, 90)], 4), "peche")
    a.add(P([(190, 250), (236, 224), (286, 253), (240, 280)], 4), "rose", False)
    a.add(P([(150, 232), (178, 216), (206, 232), (178, 248)], 3), "ombre", False); a.add(P([(150, 232), (178, 248), (178, 270), (150, 254)], 3), "ombre", False)
    a.add(P([(178, 248), (206, 232), (206, 254), (178, 270)], 3), "peche", False); a.add(R(262, 118, 52, 50, 6), "sable", False)

@motif
def marmite(a):
    a.add(P([(120, 215), (340, 215), (340, 290), (275, 358), (185, 358), (120, 290)], [6, 6, 48, 36, 36, 48]), "peche")
    a.add(R(108, 188, 244, 34, 14), "creme"); a.add(C(230, 176, 14), "ombre")
    a.add(R(76, 238, 46, 18, 9), "ombre"); a.add(R(338, 238, 46, 18, 9), "ombre")
    for dx in (-52, 0, 52): a.add(ribbon(230 + dx, 150, 74, 12, 22), "creme")

@motif
def marches(a):  # quête : marches et étoile ; capacités mises en avant
    a.add(R(92, 320, 86, 70, 10), "ombre"); a.add(R(160, 270, 86, 120, 10), "rose"); a.add(R(228, 220, 86, 170, 10), "peche"); a.add(R(296, 170, 86, 220, 10), "sable")
    a.add(star(339, 118, 52, 22, 6), "creme")

@motif
def fenetre(a):  # site de ressources
    a.add(R(100, 120, 260, 220, 16), "creme"); a.add(R(100, 120, 260, 40, 16), "ombre", False)
    for x in (126, 148, 170): a.add(C(x, 140, 7), "creme", False)
    a.add(R(124, 184, 98, 62, 10), "rose", False); a.add(R(238, 184, 98, 62, 10), "sable", False)
    a.add(R(124, 262, 98, 54, 10), "peche", False); a.add(R(238, 262, 98, 54, 10), "rose", False)
    a.add(P([(300, 280), (300, 372), (322, 350), (340, 388), (356, 380), (338, 344), (368, 340)], 3), "ombre", False)

@motif
def loupe(a):  # relever, observer
    a.add([C(205, 195, 86), C(205, 195, 52)], "peche")
    a.add(bar(268, 258, 350, 340, 34), "ombre")
    a.add(C(183, 172, 14), "creme", False)
    a.add(R(150, 330, 70, 16, 8), "sable", False); a.add(R(150, 360, 110, 16, 8), "rose", False)

@motif
def groupe(a):  # tester avec le public
    for (cx, cy, pal) in ((150, 200, "ombre"), (310, 200, "sable")):
        for c in person(cx, cy, 0.85): a.add(c, pal)
    for c in person(230, 218, 1.1): a.add(c, "creme")
    a.add(R(150, 346, 160, 14, 7), "peche", False)

@motif
def jeu(a):  # cartes et dé
    a.add(rot(R(110, 120, 150, 210, 16), 185, 225, -12), "rose")
    a.add(rot(R(205, 110, 150, 210, 16), 280, 215, 9), "creme")
    a.add(star(282, 200, 34, 15, 4), "peche", False)
    a.add(rot(R(250, 280, 96, 96, 18), 298, 328, 14), "sable")
    for dx, dy in ((-20, -20), (20, 20), (0, 0), (20, -20), (-20, 20)): a.add(C(298 + dx, 328 + dy, 8), "ombre", False)

@motif
def mallette(a):  # insertion professionnelle
    a.add([R(180, 110, 100, 90, 22), R(204, 132, 52, 66, 10)], "ombre")
    a.add(R(100, 170, 260, 180, 24), "peche")
    a.add(R(100, 240, 260, 22, 0), "ombre", False); a.add(R(212, 228, 36, 46, 8), "creme", False)

@motif
def checklist(a):  # évaluer
    a.add(R(130, 100, 200, 270, 20), "creme"); a.add(R(185, 80, 90, 40, 14), "ombre", False)
    for i, y in enumerate((165, 225, 285)):
        a.add(C(172, y, 14), "rose" if i < 2 else "peche", False); a.add(R(204, y - 8, 96, 16, 8), "sable" if i % 2 else "peche", False)

@motif
def poignee(a):  # valider ensemble : deux cercles et une coche
    a.add(C(180, 230, 92), "peche"); a.add(C(284, 230, 92), "rose")
    a.add(bar(214, 238, 242, 268, 24), "creme", False); a.add(bar(242, 268, 306, 196, 24), "creme", False)

@motif
def diapos(a):  # construire le diaporama
    a.add(rot(R(120, 120, 220, 150, 14), 230, 195, -9), "ombre")
    a.add(rot(R(140, 160, 220, 150, 14), 250, 235, 5), "peche")
    a.add(R(110, 200, 240, 160, 14), "creme")
    a.add(P([(130, 340), (190, 262), (232, 310), (262, 276), (330, 340)], 4), "rose", False); a.add(C(300, 238, 16), "sable", False)

@motif
def bulles(a):  # dialogue, échange
    a.add(P([(100, 110), (280, 110), (280, 230), (200, 230), (160, 270), (160, 230), (100, 230)], [26, 26, 26, 4, 4, 4, 26]), "peche")
    a.add(P([(180, 200), (360, 200), (360, 320), (320, 320), (320, 360), (280, 320), (180, 320)], [26, 26, 26, 4, 4, 4, 26]), "creme")
    for x in (140, 190, 240): a.add(C(x, 170, 9), "rose", False)

@motif
def oeil(a):  # ressentir pour comprendre
    top = [(100 + 260 * t / 24, 230 - 92 * (1 - ((t / 24 - 0.5) * 2) ** 2) ** 0.8) for t in range(25)]
    bot = [(100 + 260 * t / 24, 230 + 92 * (1 - ((t / 24 - 0.5) * 2) ** 2) ** 0.8) for t in range(24, -1, -1)]
    a.add(top + bot[1:-1], "creme"); a.add(C(230, 230, 56), "rose", False); a.add(C(230, 230, 24), "ombre", False); a.add(C(214, 212, 9), "creme", False)

@motif
def deplacer(a):  # déplacer sur le plan
    a.add(R(100, 140, 260, 210, 16), "sable")
    a.add(R(130, 180, 110, 70, 14), "rose", False); a.add(R(130, 270, 70, 54, 12), "ombre", False)
    a.add(P([(250, 258), (300, 258), (300, 232), (352, 278), (300, 324), (300, 298), (250, 298)], 6), "creme", False)

@motif
def maison(a):
    a.add(R(296, 120, 36, 70, 4), "ombre")
    a.add(R(130, 205, 200, 160, 12), "peche"); a.add(P([(100, 218), (230, 106), (360, 218)], 10), "ombre")
    a.add(R(204, 280, 52, 85, 10), "creme", False); a.add(R(150, 240, 42, 42, 8), "creme", False); a.add(R(268, 240, 42, 42, 8), "creme", False)

@motif
def duo(a):  # accompagnement individuel
    for c in person(160, 220, 1.0): a.add(c, "peche")
    for c in person(300, 240, 0.9): a.add(c, "creme")
    a.add(P([(206, 100), (300, 100), (300, 154), (260, 154), (246, 174), (246, 154), (206, 154)], [16, 16, 16, 3, 3, 3, 16]), "rose")

@motif
def carte(a):  # choisir un univers
    a.add(P([(100, 160), (190, 180), (190, 350), (100, 330)], 8), "sable")
    a.add(P([(190, 180), (270, 160), (270, 330), (190, 350)], 8), "peche")
    a.add(P([(270, 160), (360, 180), (360, 350), (270, 330)], 8), "rose")
    a.add(C(262, 130, 34), "ombre"); a.add(P([(236, 150), (288, 150), (262, 200)], 6), "ombre"); a.add(C(262, 130, 13), "creme", False)

@motif
def parchemin(a):  # créer des quêtes
    a.add(R(150, 120, 170, 250, 12), "creme"); a.add(R(128, 98, 214, 40, 20), "peche"); a.add(R(128, 352, 214, 40, 20), "peche")
    a.add(R(176, 186, 118, 14, 7), "rose", False); a.add(R(176, 224, 90, 14, 7), "sable", False); a.add(R(176, 262, 110, 14, 7), "peche", False)
    a.add(star(300, 320, 22, 10, 3), "ombre", False)

@motif
def pile(a):  # recenser l'existant
    a.add(rot(R(100, 150, 250, 56, 12), 225, 178, -3), "rose"); a.add(R(120, 224, 250, 56, 12), "creme"); a.add(rot(R(96, 298, 250, 56, 12), 221, 326, 2), "peche")
    for x in (150, 176): a.add(R(x, 238, 12, 28, 4), "sable", False)

@motif
def eclair(a):  # accès rapide
    a.add(C(230, 230, 140), "ombre")
    a.add(P([(256, 100), (172, 244), (226, 244), (204, 362), (300, 206), (244, 206)], 8), "creme", False)

@motif
def ebauche(a):  # première ébauche
    a.add(R(100, 130, 230, 190, 16), "creme"); a.add(R(100, 130, 230, 36, 16), "peche", False)
    a.add(R(124, 186, 82, 50, 8), "sable", False); a.add(R(222, 186, 84, 14, 7), "rose", False); a.add(R(222, 214, 60, 14, 7), "rose", False); a.add(R(124, 254, 182, 14, 7), "peche", False)
    a.add(rot(R(270, 270, 120, 30, 6), 330, 285, -45), "ombre"); a.add(rot(P([(386, 262), (410, 244), (400, 288)], 3), 330, 285, -45), "sable")

for i, (name, fn) in enumerate(MOTIFS.items()):
    art = Art(100 + i); fn(art); art.save(f"motif-{name}")

# illustrations d'en-tête de chaque projet (mêmes dessins)
for proj, m in {"repertoire": "fiches", "sensibilisation": "ecran", "plan3d": "piece", "cuisine": "marmite", "quete": "marches", "ressources": "fenetre"}.items():
    art = Art(100 + list(MOTIFS).index(m)); MOTIFS[m](art); art.save(f"projet-{proj}")
print("ok", len(MOTIFS))
