// Pages légales : titre, date et rubriques (titre + texte, encadré facultatif).
import { defineField, defineType, defineArrayMember } from 'sanity';

const rubrique = defineArrayMember({
  type: 'object',
  name: 'rubrique',
  fields: [
    defineField({ name: 'titre', title: 'Titre', type: 'string' }),
    defineField({ name: 'texte', title: 'Texte', type: 'text', rows: 5, description: 'Un retour à la ligne = une nouvelle ligne.' }),
    defineField({ name: 'encadre', title: 'Encadré (facultatif)', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'titre', subtitle: 'texte' } },
});

export const pageMentions = defineType({
  name: 'pageMentions',
  title: "Mentions légales",
  type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Titre', type: 'string', initialValue: "Mentions légales" }),
    defineField({ name: 'date', title: 'Date de mise à jour', type: 'string', initialValue: "Dernière mise à jour : 28 octobre 2026" }),
    defineField({
      name: 'rubriques', title: 'Rubriques', type: 'array', of: [rubrique],
      initialValue: [
        {"titre": "Éditeur du site", "texte": "Sara Pezzarini, ergothérapeute D.E., entreprise individuelle.\nAdresse : à venir.\nSIRET : à venir.\nN° RPPS : à venir.\nE-mail : sara.pezzarini@gmail.com\nTéléphone : 06 10 05 71 09"},
        {"titre": "Directrice de la publication", "texte": "La directrice de la publication est Sara Pezzarini."},
        {"titre": "Hébergement", "texte": "Nom de l’hébergeur : à venir.\nAdresse : à venir.\nContact : à venir."},
        {"titre": "Conception et réalisation", "texte": "Thomas Marilleau\nLien du site : à venir"},
        {"titre": "Propriété intellectuelle", "texte": "Les textes, outils et visuels de ce site sont protégés par le droit de la propriété intellectuelle. Toute reproduction est interdite sans autorisation préalable."},
        {"titre": "Crédits photos", "texte": "Les crédits photos sont à venir."}
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Mentions légales" }) },
});

export const pageConfidentialite = defineType({
  name: 'pageConfidentialite',
  title: "Politique de confidentialité",
  type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Titre', type: 'string', initialValue: "Politique de confidentialité" }),
    defineField({ name: 'date', title: 'Date de mise à jour', type: 'string', initialValue: "Dernière mise à jour : 28 octobre 2026" }),
    defineField({
      name: 'rubriques', title: 'Rubriques', type: 'array', of: [rubrique],
      initialValue: [
        {"titre": "Responsable du traitement", "texte": "Sara Pezzarini, ergothérapeute D.E., est responsable du traitement des données transmises via le formulaire de contact."},
        {"titre": "Données collectées", "texte": "Le formulaire de contact recueille les données suivantes : nom, organisation, fonction, e-mail, téléphone et message.", "encadre": "Merci de ne pas transmettre d'informations médicales via le formulaire. Nous les aborderons ensemble lors d'un échange."},
        {"titre": "Finalité", "texte": "Les données sont utilisées uniquement pour répondre à votre demande. Elles ne sont pas utilisées à des fins de prospection."},
        {"titre": "Base légale", "texte": "Le traitement de vos données repose sur votre consentement."},
        {"titre": "Durée de conservation", "texte": "Vos données sont conservées pendant 3 ans après le dernier contact."},
        {"titre": "Destinataires", "texte": "Sara Pezzarini est l’unique destinataire des données recueillies. Ces données ne font l’objet d’aucune revente."},
        {"titre": "Vos droits", "texte": "Vous disposez de droits d’accès, de rectification, de suppression et d’opposition concernant vos données. Pour les exercer, écrivez à sara.pezzarini@gmail.com.\n\nVous pouvez également adresser une réclamation à la Commission nationale de l’informatique et des libertés (CNIL)."},
        {"titre": "Cookies", "texte": "Les informations relatives aux cookies de mesure d’audience sont à adapter selon les outils effectivement utilisés sur ce site."}
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Politique de confidentialité" }) },
});

export const page404 = defineType({
  name: 'page404',
  title: 'Page 404',
  type: 'document',
  fields: [
    defineField({ name: 'titre_1', title: 'Titre, ligne 1', type: 'string', initialValue: 'Erreur 404' }),
    defineField({ name: 'titre_2', title: 'Titre, ligne 2', type: 'string', initialValue: 'Page introuvable' }),
    defineField({ name: 'bouton', title: 'Bouton', type: 'string', initialValue: "Retour à l'accueil" }),
  ],
  preview: { prepare: () => ({ title: 'Page 404' }) },
});

export const legalTypes = [pageMentions, pageConfidentialite, page404];
