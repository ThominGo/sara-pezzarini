"""Génère web/public/illustrations/projet-*.svg : une illustration par projet, dans le style des illustrations du site
(formes à dégradé radial, calque soft light, léger déplacement qui irrègularise les bords). Fond transparent :
le dégradé de couleur du projet est appliqué par le composant ProjectVisual."""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "web/public/illustrations"

# Teintes crème et pêche : elles ressortent sur les dégradés saturés des projets
PAL = {
    "creme": "#FFFFFF,#FFF3E8,#FBD9C2,#F2B99B",
    "peche": "#FFE9DA,#FBC7A5,#F29A78,#E0766A",
    "sable": "#FFF6E4,#F9DDA8,#F0B766,#DE8F4A",
    "rose": "#FFE4EA,#F8B3C4,#EA7C9C,#C9467A",
    "ombre": "#F6C9B2,#E58F78,#C45A56,#8E2F48",
}

DEFS = """
<filter id="tex" x="0" y="0" width="459" height="459" filterUnits="userSpaceOnUse">
  <feTurbulence type="fractalNoise" baseFrequency="0.0136" numOctaves="2" seed="7" result="t"/>
  <feDisplacementMap in="SourceGraphic" in2="t" scale="6.8" xChannelSelector="R" yChannelSelector="G"/>
</filter>"""

class Svg:
    def __init__(self):
        self.defs, self.body, self.n = [DEFS], [], 0

    def grad(self, pal, cx=0.3, cy=0.15, r=1.1):
        i = self.n; self.n += 1
        offs = ["0", "0.45", "0.8", "1"]
        stops = "".join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in zip(offs, PAL[pal].split(",")))
        self.defs.append(f'<radialGradient id="g{i}" cx="{cx}" cy="{cy}" r="{r}">{stops}</radialGradient>')
        return f"url(#g{i})"

    def shape(self, el, pal, **kw):
        """el : fragment SVG sans fill (ex. <rect x=.. />). Trois calques : dégradé, lumière douce, contour clair."""
        fill = self.grad(pal, **kw)
        self.body.append(
            f'<g filter="url(#tex)">{el.replace("/>", f" fill=\"{fill}\" stroke=\"#fff\" stroke-opacity=\".55\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>")}'
            f'{el.replace("/>", " fill=\"#FF9A4D\" fill-opacity=\".25\" style=\"mix-blend-mode:soft-light\"/>")}</g>'
        )

    def save(self, name):
        svg = ('<svg width="459" height="459" viewBox="0 0 459 459" fill="none" xmlns="http://www.w3.org/2000/svg">'
               f'<defs>{"".join(self.defs)}</defs>{"".join(self.body)}</svg>\n')
        (OUT / f"{name}.svg").write_text(svg)

def rect(x, y, w, h, r=10): return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}"/>'
def poly(pts): return f'<polygon points="{" ".join(f"{x},{y}" for x, y in pts)}"/>'
def circ(cx, cy, r): return f'<circle cx="{cx}" cy="{cy}" r="{r}"/>'
def path(d): return f'<path d="{d}"/>'

OUT.mkdir(parents=True, exist_ok=True)

# 1. Répertoire d'outils : fichier à onglets (trois fiches), une coche et des lignes
s = Svg()
s.shape(rect(120, 110, 200, 250, 14), "ombre")
s.shape(poly([(150, 92), (205, 92), (215, 112), (150, 112)]), "ombre")
s.shape(rect(160, 140, 200, 250, 14), "peche")
s.shape(poly([(250, 122), (310, 122), (320, 142), (250, 142)]), "peche")
s.shape(rect(200, 170, 200, 250, 14), "creme")
s.shape(rect(232, 222, 136, 16, 8), "rose")
s.shape(rect(232, 258, 108, 16, 8), "sable")
s.shape(rect(232, 294, 124, 16, 8), "sable")
s.shape(circ(250, 356, 20), "rose")
s.shape(rect(284, 348, 72, 16, 8), "peche")
s.save("projet-repertoire")

# 2. Sensibilisation en entreprise : écran de présentation sur pied, bulle de parole
s = Svg()
s.shape(rect(110, 130, 250, 160, 14), "creme")
s.shape(rect(138, 160, 120, 16, 8), "rose")
s.shape(rect(138, 192, 160, 16, 8), "sable")
s.shape(rect(138, 224, 90, 16, 8), "peche")
s.shape(poly([(228, 290), (242, 290), (262, 372), (248, 372)]), "ombre")
s.shape(poly([(236, 290), (250, 290), (210, 372), (196, 372)]), "ombre")
s.shape(rect(176, 368, 126, 18, 9), "ombre")
s.shape(path("M318 96h72a22 22 0 0 1 22 22v38a22 22 0 0 1-22 22h-30l-26 26v-26h-16a22 22 0 0 1-22-22v-38a22 22 0 0 1 22-22z"), "peche")
s.shape(circ(332, 137, 7), "rose"); s.shape(circ(356, 137, 7), "rose"); s.shape(circ(380, 137, 7), "rose")
s.save("projet-sensibilisation")

# 3. Plan 3D de chambre : pièce en isométrie (sol, deux murs), lit et tapis
s = Svg()
s.shape(poly([(229, 330), (359, 255), (229, 180), (99, 255)]), "sable")
s.shape(poly([(99, 255), (229, 180), (229, 90), (99, 165)]), "creme")
s.shape(poly([(229, 180), (359, 255), (359, 165), (229, 90)]), "peche")
s.shape(poly([(190, 250), (236, 224), (286, 253), (240, 280)]), "rose")
s.shape(poly([(150, 232), (178, 216), (206, 232), (178, 248)]), "ombre")
s.shape(poly([(150, 232), (178, 248), (178, 270), (150, 254)]), "ombre")
s.shape(poly([(178, 248), (206, 232), (206, 254), (178, 270)]), "peche")
s.shape(rect(262, 118, 52, 50, 6), "sable")
s.save("projet-plan3d")

# 4. Ateliers cuisine : marmite, couvercle, anses et volutes de vapeur
s = Svg()
s.shape(path("M120 215h220v70a70 70 0 0 1-70 70h-80a70 70 0 0 1-70-70z"), "peche")
s.shape(rect(108, 188, 244, 34, 14), "creme")
s.shape(circ(230, 176, 14), "ombre")
s.shape(rect(76, 238, 46, 18, 9), "ombre")
s.shape(rect(338, 238, 46, 18, 9), "ombre")
for dx in (-52, 0, 52):
    s.shape(path(f"M{230+dx} 150c-16-18 16-30 0-52c-8-11-2-22 8-30c-4 20 20 28 8 54c-6 14-12 20-16 28z"), "creme")
s.save("projet-cuisine")

# 5. La Quête de l'Autonomie : marches qui montent et étoile au sommet
s = Svg()
s.shape(rect(92, 320, 86, 70, 10), "ombre")
s.shape(rect(160, 270, 86, 120, 10), "rose")
s.shape(rect(228, 220, 86, 170, 10), "peche")
s.shape(rect(296, 170, 86, 220, 10), "sable")
s.shape(poly([(339, 70), (352, 106), (390, 108), (360, 130), (371, 166), (339, 145), (307, 166), (318, 130), (288, 108), (326, 106)]), "creme")
s.save("projet-quete")

# 6. Site de ressources : fenêtre de navigateur, grille de tuiles, curseur
s = Svg()
s.shape(rect(100, 120, 260, 220, 16), "creme")
s.shape(rect(100, 120, 260, 40, 16), "ombre")
s.shape(circ(126, 140, 7), "creme"); s.shape(circ(148, 140, 7), "creme"); s.shape(circ(170, 140, 7), "creme")
s.shape(rect(124, 184, 98, 62, 10), "rose")
s.shape(rect(238, 184, 98, 62, 10), "sable")
s.shape(rect(124, 262, 98, 54, 10), "peche")
s.shape(rect(238, 262, 98, 54, 10), "rose")
s.shape(poly([(300, 280), (300, 372), (322, 350), (340, 388), (356, 380), (338, 344), (368, 340)]), "ombre")
s.save("projet-ressources")
print("ok")
