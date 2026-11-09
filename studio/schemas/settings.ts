import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Réglages du site',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'E-mail', type: 'string' }),
    defineField({ name: 'phone', title: 'Téléphone', type: 'string' }),
    defineField({ name: 'calendly', title: 'Lien de prise de rendez-vous (Calendly)', type: 'url' }),
    defineField({ name: 'doctolib', title: 'Lien Doctolib', type: 'url' }),
    defineField({
      name: 'formKey', title: 'Clé du formulaire de contact (Web3Forms)', type: 'string',
      description: "Clé gratuite à créer sur web3forms.com avec l'adresse qui doit recevoir les messages. Sans clé, le formulaire ouvre la messagerie du visiteur.",
    }),
    defineField({ name: 'zone', title: "Zone d'intervention", type: 'string', initialValue: 'Autour de Mézy-sur-Seine, Yvelines, Val-d’Oise, Eure' }),
    defineField({
      name: 'socials', title: 'Réseaux', type: 'array',
      of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Nom', type: 'string' }),
        defineField({ name: 'url', title: 'Lien', type: 'url' }),
      ] }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Réglages du site' }) },
});
