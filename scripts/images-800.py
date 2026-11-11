"""Variantes 800 px des photos (web/public/images/*.webp -> *-800.webp) pour les petits écrans.
À relancer après l'ajout d'une photo : python3 scripts/images-800.py"""
from pathlib import Path
from PIL import Image
D = Path(__file__).resolve().parent.parent / 'web/public/images'
for f in sorted(D.glob('*.webp')):
    if f.stem.endswith('-800'):
        continue
    out = f.with_name(f.stem + '-800.webp')
    im = Image.open(f)
    if im.width <= 800:
        im.save(out, 'WEBP', quality=82, method=6)
        continue
    h = round(im.height * 800 / im.width)
    im.resize((800, h), Image.LANCZOS).save(out, 'WEBP', quality=82, method=6)
    print(out.name, f.stat().st_size // 1024, '->', out.stat().st_size // 1024, 'Ko')
