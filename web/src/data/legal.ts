// Textes par défaut des pages légales (maquette Figma, Maquette - v2). Modifiables dans le Studio.
export type Rubrique = { titre: string; texte: string; encadre?: string; lien?: string };
export type Legal = { titre: string; date: string; rubriques: Rubrique[] };

export const mentions: Legal = {
  "titre": "Mentions légales",
  "date": "Dernière mise à jour : 28 octobre 2026",
  "rubriques": [
    {
      "titre": "Éditeur du site",
      "texte": "Sara Pezzarini, ergothérapeute D.E., entreprise individuelle.\nAdresse : à venir.\nSIRET : à venir.\nN° RPPS : à venir.\nE-mail : sara.pezzarini@gmail.com\nTéléphone : 06 10 05 71 09"
    },
    {
      "titre": "Directrice de la publication",
      "texte": "La directrice de la publication est Sara Pezzarini."
    },
    {
      "titre": "Hébergement",
      "texte": "Nom de l’hébergeur : à venir.\nAdresse : à venir.\nContact : à venir."
    },
    {
      "titre": "Conception et réalisation",
      "texte": "Thomas Marilleau\nLien du site : à venir",
      "lien": "https://thomas-marilleau.com"
    },
    {
      "titre": "Propriété intellectuelle",
      "texte": "Les textes, outils et visuels de ce site sont protégés par le droit de la propriété intellectuelle. Toute reproduction est interdite sans autorisation préalable."
    },
    {
      "titre": "Crédits",
      "texte": "Photos : crédits à venir.\nPolice Luciole (réglage d’accessibilité) : © Laurent Bourcellier et Jonathan Perez, licence Creative Commons Attribution 4.0.\nPolice OpenDyslexic (réglage d’accessibilité) : © Abbie Gonzalez, licence SIL Open Font License 1.1."
    }
  ]
};

export const confidentialite: Legal = {
  "titre": "Politique de confidentialité",
  "date": "Dernière mise à jour : 28 octobre 2026",
  "rubriques": [
    {
      "titre": "Responsable du traitement",
      "texte": "Sara Pezzarini, ergothérapeute D.E., est responsable du traitement des données transmises via le formulaire de contact."
    },
    {
      "titre": "Données collectées",
      "texte": "Le formulaire de contact recueille les données suivantes : nom, organisation, fonction, e-mail, téléphone et message.",
      "encadre": "Merci de ne pas transmettre d'informations médicales via le formulaire. Nous les aborderons ensemble lors d'un échange."
    },
    {
      "titre": "Finalité",
      "texte": "Les données sont utilisées uniquement pour répondre à votre demande. Elles ne sont pas utilisées à des fins de prospection."
    },
    {
      "titre": "Base légale",
      "texte": "Le traitement de vos données repose sur votre consentement."
    },
    {
      "titre": "Durée de conservation",
      "texte": "Vos données sont conservées pendant 3 ans après le dernier contact."
    },
    {
      "titre": "Destinataires",
      "texte": "Sara Pezzarini est l’unique destinataire des données recueillies. Ces données ne font l’objet d’aucune revente."
    },
    {
      "titre": "Vos droits",
      "texte": "Vous disposez de droits d’accès, de rectification, de suppression et d’opposition concernant vos données. Pour les exercer, écrivez à sara.pezzarini@gmail.com.\n\nVous pouvez également adresser une réclamation à la Commission nationale de l’informatique et des libertés (CNIL)."
    },
    {
      "titre": "Cookies",
      "texte": "Les informations relatives aux cookies de mesure d’audience sont à adapter selon les outils effectivement utilisés sur ce site."
    }
  ]
};
