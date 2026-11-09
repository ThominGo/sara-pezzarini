# Site de Sara Pezzarini

Astro + Sanity. Intégration au pixel près de la page Figma « Maquette - v3 » (largeur 1512 px).

## Démarrer
```
cd web && npm install && npm run dev        # site sur http://localhost:4321
cd studio && npm install && npm run dev     # Studio sur http://localhost:3333
```
Sanity : projet `h4rgggeo`, dataset `production` (voir `web/.env.example`).
Le site est statique : il lit Sanity au moment du build. Si Sanity est injoignable, il garde les contenus de la maquette.

Première mise en route du Studio :
```
cd studio
npx sanity login
npx sanity schemas deploy
npx sanity deploy        # Studio en ligne pour Sara
npm run typegen          # après chaque changement de schéma ou de requête
```

## Structure
- `web/src/figma/` : pages et composants, classes copiées du code généré par Figma (Tailwind). Aucune micro-interaction.
- `web/src/figma/components/` : Nav, Footer, PushContact partagés.
- `web/public/gradients/` : formes en niveaux de gris des dégradés (provisoires, à remplacer par l'export 128 px de la page Figma « Export dégradés web », mêmes noms de fichiers).
- `web/public/assets/placeholder.svg` : emplacement des photos (à remplacer après le shooting).
- `web/public/assets/icon-placeholder.svg` : emplacement des icônes (à fournir).
- `studio/` : Studio Sanity (réglages du site, projets).

## À faire
- Brancher les textes des pages sur Sanity (déjà fait : projets, e-mail, téléphone, lien Calendly).
- Version mobile (après validation des tests mobile dans Figma).
