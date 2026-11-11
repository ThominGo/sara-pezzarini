import { defineArrayMember, defineField, defineType } from 'sanity';

// Champs calqués sur la page détail projet de la maquette (Figma 414:6985)
export default defineType({
  name: 'project',
  title: 'Projet',
  type: 'document',
  orderings: [{ title: 'Ordre', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Adresse de la page', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'cardTitle', title: 'Titre court (vignette de la page Projets)', type: 'string', description: 'Une ligne ou deux, environ 35 caractères. Si vide, le titre complet est utilisé.', validation: (r) => r.max(60) }),
    defineField({ name: 'order', title: 'Ordre dans la liste', type: 'number' }),
    defineField({
      name: 'public', title: 'Public concerné', type: 'array', of: [{ type: 'string' }],
      options: { list: ['Structures médico-sociales', 'Entreprises et collectivités', 'Écoles et lieux culturels', 'Personnes et familles'], layout: 'grid' },
      description: "Pas encore affiché sur le site (en attente d'un emplacement dans la maquette).",
    }),
    defineField({ name: 'with', title: 'Avec qui', type: 'string', description: "Affiché dans la fiche sous le haut de page. Ne nommez une personne ou une structure qu'avec son accord." }),
    defineField({ name: 'duration', title: 'Durée', type: 'string', description: 'Ex. « 6 mois de préparation ». Laissez vide si inconnue : la case disparaît.' }),
    defineField({ name: 'cover', title: 'Image de couverture', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'intro', title: 'Besoin de départ (texte du haut)', type: 'text', rows: 4 }),
    defineField({ name: 'contextTitle', title: 'Titre du contexte', type: 'string' }),
    defineField({ name: 'contextText', title: 'Texte du contexte', type: 'text', rows: 6 }),
    defineField({
      name: 'steps', title: 'La démarche (3 ou 4 étapes)', type: 'array', validation: (r) => r.max(4),
      of: [defineArrayMember({ type: 'object', name: 'step', fields: [
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'text', title: 'Texte', type: 'text', rows: 3 }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
      ] })],
    }),
    defineField({
      name: 'blocks', title: 'Blocs image et texte (0, 1 ou 2)', type: 'array', validation: (r) => r.max(2),
      of: [defineArrayMember({ type: 'object', name: 'block', fields: [
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'text', title: 'Texte', type: 'text', rows: 5 }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
      ] })],
    }),
    defineField({ name: 'resultTitle', title: 'Résultat : titre', type: 'string' }),
    defineField({ name: 'resultText', title: 'Résultat : texte', type: 'text', rows: 5 }),
    defineField({
      name: 'citation', title: 'Citation (retour anonymisé)', type: 'object',
      description: "Affichée sous le résultat si elle est remplie. Laissez vide sinon : la section disparaît.",
      fields: [
        defineField({ name: 'texte', title: 'Citation', type: 'text', rows: 3 }),
        defineField({ name: 'auteur', title: 'Qui parle (ex. « Une participante »)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'galleryTitle', title: 'Titre du diaporama', type: 'string', initialValue: 'Captures et photos',
    }),
    defineField({
      name: 'gallery', title: 'Captures et photos', type: 'array',
      description: 'Affichées dans le diaporama en bas de page si au moins une image est ajoutée.',
      of: [defineArrayMember({ type: 'object', name: 'shot', fields: [
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'title', title: 'Légende', type: 'string' }),
        defineField({ name: 'text', title: 'Précision', type: 'string' }),
      ], preview: { select: { title: 'title', media: 'image' } } })],
    }),
    defineField({
      name: 'todo', title: 'À compléter (note interne, jamais affichée)', type: 'text', rows: 5,
      description: 'Ce qu’il reste à demander ou à valider avant de publier.',
    }),
  ],
  preview: { select: { title: 'title', media: 'cover' } },
});
