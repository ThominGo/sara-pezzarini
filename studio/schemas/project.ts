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
    defineField({ name: 'order', title: 'Ordre dans la liste', type: 'number' }),
    defineField({ name: 'cover', title: 'Image de couverture', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'intro', title: 'Besoin de départ (texte du haut)', type: 'text', rows: 4 }),
    defineField({ name: 'contextTitle', title: 'Titre du contexte', type: 'string' }),
    defineField({ name: 'contextText', title: 'Texte du contexte', type: 'text', rows: 6 }),
    defineField({
      name: 'steps', title: 'La démarche (4 étapes)', type: 'array', validation: (r) => r.max(4),
      of: [defineArrayMember({ type: 'object', fields: [
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'text', title: 'Texte', type: 'text', rows: 3 }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
      ] })],
    }),
    defineField({
      name: 'blocks', title: 'Blocs image et texte', type: 'array',
      of: [defineArrayMember({ type: 'object', fields: [
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'text', title: 'Texte', type: 'text', rows: 5 }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
      ] })],
    }),
    defineField({ name: 'resultTitle', title: 'Résultat : titre', type: 'string' }),
    defineField({ name: 'resultText', title: 'Résultat : texte', type: 'text', rows: 5 }),
    defineField({ name: 'gallery', title: "Photos de l'outil", type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
  ],
  preview: { select: { title: 'title', media: 'cover' } },
});
