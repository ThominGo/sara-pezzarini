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
npx sanity deploy        # Studio en ligne : https://sara-pezzarini.sanity.studio
npm run typegen          # après chaque changement de schéma ou de requête
```

## Structure
- `web/src/figma/` : pages et composants, classes copiées du code généré par Figma (Tailwind). Aucune micro-interaction.
- `web/src/figma/components/` : Nav, Footer, PushContact partagés.
- `web/public/gradients/` : formes en niveaux de gris des dégradés (provisoires, à remplacer par l'export 128 px de la page Figma « Export dégradés web », mêmes noms de fichiers).
- `web/public/assets/placeholder.svg` : emplacement des photos (à remplacer après le shooting).
- `web/public/assets/icon-placeholder.svg` : emplacement des icônes (à fournir).
- `studio/` : Studio Sanity (réglages du site, projets).

## Modifier les contenus
Tout se fait dans le Studio (https://sara-pezzarini.sanity.studio) :
- **Pages** : une fiche par page, préremplie avec les textes de la maquette, rangée par blocs (Haut de page, Cartes, etc.). Chaque champ texte ou image correspond à un élément de la maquette.
- **Projets** : liste et pages détail.
- **Réglages du site** : e-mail, téléphone, Calendly, Doctolib.
Après « Publish », le site se reconstruit (webhook Sanity vers le deploy hook Cloudflare).

Côté code, les textes de la maquette restent écrits en repli dans `web/src/figma/` : `t("page", "clé", "texte")` et `img("page", "clé", "image")`. Le schéma des pages est dans `studio/schemas/pages.ts`.

## Modifier en cliquant sur le site (Presentation)
Dans le Studio, l'onglet **Modifier le site** affiche la version « aperçu » du site : un clic sur un texte ou une image ouvre le champ correspondant.
- Version aperçu : worker Cloudflare `sara-pezzarini-preview` (rendu à la demande, lit les brouillons avec le secret `SANITY_API_READ_TOKEN`).
  - Build command : `npm run build:preview` · Deploy command : `npm run deploy:preview` · Path : `/web`
- Le site de production reste statique et ne contient aucun outil d'édition.

## À faire
- Version mobile (après validation des tests mobile dans Figma).
