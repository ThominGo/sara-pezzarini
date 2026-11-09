"""Formes en niveaux de gris des dégradés, en haute définition.

Les sources (petites images exportées de Figma) sont agrandies puis floutées ici,
avec un léger tramage pour éviter les marches de couleur. Le site n'a plus besoin
de flouter en CSS (meilleure qualité, animation plus fluide).
Sources : scripts/gradients-src/*.png  ->  web/public/gradients/*.png
"""
from pathlib import Path
import numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter

ROOT = Path(__file__).resolve().parent.parent
SRC, OUT = ROOT / "scripts/gradients-src", ROOT / "web/public/gradients"
W = 640                 # largeur de sortie
BLUR_CSS, REF_W = 24, 1496  # l'ancien flou CSS (24 px) sur un bloc de ~1496 px
rng = np.random.default_rng(7)


def finish(a: np.ndarray, name: str):
    a = a + rng.uniform(-0.5, 0.5, a.shape)  # tramage
    Image.fromarray(np.clip(np.round(a), 0, 255).astype(np.uint8), "L").save(OUT / name, optimize=True)


for f in sorted(SRC.glob("shape-*.png")):
    im = Image.open(f).convert("F")
    h = round(W * im.height / im.width)
    big = im.resize((W, h), Image.BICUBIC)
    sigma = BLUR_CSS * W / REF_W
    finish(gaussian_filter(np.array(big, dtype=float), sigma, mode="nearest"), f.name)

# Zone d'intervention : lumière centrée sur Mézy-sur-Seine, bords plus sombres, formes organiques
w, h = W, round(W * 887 / 979)
y, x = np.mgrid[0:h, 0:w] / np.array([h, w])[:, None, None]
cx, cy = 0.51, 0.51
d = np.hypot((x - cx) * 1.1, (y - cy))
a = 185 - 165 * d ** 1.35
for bx, by, r, s in [(0.18, 0.22, 0.22, -45), (0.85, 0.78, 0.25, -55), (0.82, 0.18, 0.2, 25), (0.2, 0.85, 0.22, 20), (0.6, 0.3, 0.18, 18)]:
    a += s * np.exp(-((x - bx) ** 2 + (y - by) ** 2) / (2 * r * r))
finish(np.clip(gaussian_filter(a, 6, mode="nearest"), 55, 205), "shape-zone.png")
print("ok")
