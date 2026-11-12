#!/usr/bin/env python3
"""Contenu des études de cas (source : « Mes projets.docx » de Sara, 11 nov. 2026).

Génère studio/seed/projects.ndjson, à importer dans Sanity :
    cd studio && npx sanity dataset import seed/projects.ndjson production --replace

Règles d'écriture : langage simple, pas de métaphores, pas de tiret cadratin.
Les champs « todo » sont internes (non affichés sur le site) : ce qu'il reste à compléter avec Sara.
Les projets 5 et 6 sont incomplets, le projet 4 est publié en brouillon (« drafts. »), donc non affiché sur le site.
"""
import json
import pathlib

PUB = {
    "struct": "Structures médico-sociales",
    "entre": "Entreprises et collectivités",
    "ecole": "Écoles et lieux culturels",
    "pers": "Personnes et familles",
}

PROJECTS = [
    {
        "slug": "repertoire-outils-autonomie-tsa",
        "cardTitle": "Répertoire d’outils d’autonomie TSA",
        "order": 1,
        "title": "Répertoire d’outils d’autonomie pour adultes ayant un TSA",
        "public": [PUB["struct"], PUB["pers"]],
        "with": "Une psychologue d’un centre expert TSA",
        "duration": "6 mois de préparation, puis 3 sessions pour 8 adultes chacune",
        "intro": "Un répertoire cliquable pour aider des adultes autistes à trouver des outils face aux difficultés du quotidien. Il a été conçu avec une psychologue d’un centre expert TSA.",
        "contextTitle": "Des adultes autistes qui manquent d’un support clair pour leur quotidien",
        "contextText": "Beaucoup d’adultes avec un TSA, diagnostiqués récemment ou depuis longtemps, n’ont pas de support clair et accessible. Ils veulent comprendre leurs difficultés au quotidien (attention, organisation, fatigue) et trouver des stratégies adaptées. Internet propose beaucoup de réponses, mais il est facile de s’y perdre et de se laisser distraire.",
        "steps": [
            ("Relever les difficultés", "Dans des séances de psychoéducation, nous avons repéré les difficultés citées au quotidien : sommeil, énergie, motivation, choix, organisation, gestion du temps, concentration, changement et relations avec les autres."),
            ("Concevoir le répertoire", "Avec la psychologue du centre expert, j’ai créé un répertoire classé par thèmes et cliquable. Chaque difficulté renvoie à des outils concrets : stratégies, applications, méthodes d’organisation."),
            ("Tester avec le public", "Les outils ont été testés avec les personnes accompagnées en SAMSAH, ou créés pour l’occasion."),
            ("Présenter en séance", "Le répertoire est présenté dans une séance de psychoéducation intitulée « Gérer mon fonctionnement au quotidien ». Il y a eu 3 sessions, avec 8 adultes à chaque fois."),
        ],
        "blocks": [
            ("Un jeu pour dire ses difficultés et trouver des solutions", "Pour que chacun soit acteur de la séance, nous avons créé un jeu. Chaque participant peut y dire ses difficultés, puis trouver des solutions grâce aux autres participants ou aux outils mis à disposition : le répertoire et des classeurs qui donnent des idées de réponses."),
            ("Une séance sur l’insertion professionnelle", "J’ai aussi participé à la construction d’une autre séance, avec une psychiatre, sur le thème de l’insertion professionnelle."),
        ],
        "resultTitle": "Un outil apprécié, utilisé en dehors des séances",
        "resultText": "Les participants ont apprécié l’outil. Plusieurs ont écrit par mail qu’ils s’en servent dans des situations concrètes, par exemple face à la fatigue. Le répertoire leur permet de trouver des outils ou des stratégies selon leur difficulté, sans se perdre dans les distractions d’internet. Certains se disent soulagés de l’avoir sur leur téléphone en cas de besoin.",
        "citation": None,
        "todo": "À compléter avec Sara : (1) citation anonymisée tirée des mails de retour, avec l’accord de la personne ; (2) captures d’écran du répertoire à montrer (PDF « Gérer mon fonctionnement au quotidien », 173 pages) ; (3) accord écrit du centre expert TSA et de la psychologue co-autrice avant de les nommer ; (4) détails de la séance insertion professionnelle ; (5) répertoire accessible au public ou réservé aux participants ?",
    },
    {
        "slug": "sensibilisation-tsa-milieu-professionnel",
        "cardTitle": "Sensibilisation TSA en entreprise",
        "order": 2,
        "title": "Sensibilisation au TSA en milieu professionnel",
        "public": [PUB["entre"], PUB["pers"]],
        "with": "La personne autiste concernée, associée à chaque étape. Conception menée en autonomie.",
        "duration": "1 à 2 semaines de préparation",
        "intro": "Une sensibilisation pour des équipes de travail, construite avec une personne autiste afin d’expliquer son fonctionnement et ses besoins.",
        "contextTitle": "Faire comprendre son fonctionnement à son équipe",
        "contextText": "Des personnes autistes suivies en SAMSAH, en formation ou en emploi avaient du mal à faire comprendre à leurs équipes leur fonctionnement, leurs besoins et leurs attentes. Cela pouvait créer des tensions et de l’incompréhension au travail. Plusieurs d’entre elles ont demandé une intervention de sensibilisation.",
        "steps": [
            ("Évaluer", "J’ai mené des bilans pour bien comprendre le fonctionnement de la personne, ses difficultés, et ce qu’elle souhaitait partager ou non."),
            ("Valider ensemble", "Une restitution a permis de vérifier avec la personne que j’avais bien compris. Elle a été associée à chaque étape, pour se reconnaître dans le contenu."),
            ("Construire le diaporama", "J’ai créé un diaporama sur ses difficultés précises : comprendre les intentions et les émotions des autres, anxiété, attention aux détails, attention. Il présente aussi ses capacités et ce qu’elle apporte à l’équipe."),
            ("Présenter à l’équipe", "Les collègues ont vécu des mises en situation, puis ont reçu des outils concrets pour mieux accompagner la personne."),
        ],
        "blocks": [
            ("Ressentir pour comprendre", "Les équipes testent des mises en situation. Elles regardent des images en zoom pour ressentir l’attention portée aux détails. Elles portent des moufles pour approcher les difficultés de coordination (dyspraxie). Elles font un exercice avec du bruit pour comprendre les difficultés d’attention."),
            ("Mettre en avant les capacités", "Le diaporama ne parle pas seulement des difficultés. Il montre aussi ce que la personne fait bien et sa valeur ajoutée dans l’équipe, avec des outils concrets pour la soutenir au quotidien."),
        ],
        "resultTitle": "Une équipe qui comprend mieux, une personne moins anxieuse",
        "resultText": "L’équipe a mieux compris la personne. Des ajustements concrets ont été faits dans la communication et dans l’organisation du travail. La personne était moins anxieuse à l’idée d’aller travailler, car elle se sentait comprise.",
        "citation": None,
        "todo": "À compléter avec Sara : (1) ANONYMISER le diaporama avant toute capture : il contient le prénom réel de la personne (titre « Mieux comprendre … », 06/05/2025) ; (2) accord écrit de la personne pour montrer des captures ; (3) exemples précis d’ajustements obtenus ; (4) durée de l’intervention auprès de l’équipe ; (5) citation de retour anonymisée ; (6) type d’entreprise (sans la nommer).",
    },
    {
        "slug": "plan-3d-chambre-personne-autiste",
        "cardTitle": "Plan 3D d’aménagement de chambre",
        "order": 3,
        "title": "Plan 3D d’aménagement de chambre pour une personne autiste",
        "public": [PUB["pers"]],
        "with": "La personne concernée, associée à la création du plan",
        "duration": None,
        "intro": "Un plan 3D de chambre pour aider une personne autiste à se projeter dans des changements avant de les faire pour de vrai.",
        "contextTitle": "Quand un objet déplacé désorganise toute la journée",
        "contextText": "Cette personne avait besoin de repères visuels et spatiaux, et d’un environnement stable. Le moindre changement dans sa chambre (rangement, repères) pouvait désorganiser sa journée, dès le lever et l’habillage. Avant de changer quoi que ce soit, il fallait qu’elle puisse voir et se projeter dans les changements prévus.",
        "steps": [
            ("Reproduire la chambre", "Nous avons créé ensemble un plan 3D de la chambre, avec tous les détails de l’espace."),
            ("Déplacer sur le plan", "Nous avons déplacé certains éléments sur le plan, de façon virtuelle. Cela permet d’essayer sans risque."),
            ("Changer dans la vraie chambre", "La personne a intégré les changements petit à petit. Nous les avons ensuite mis en place dans sa vraie chambre."),
        ],
        "blocks": [],
        "resultTitle": "Des changements mieux anticipés et mieux acceptés",
        "resultText": "La personne a mieux anticipé les changements d’aménagement et se les est appropriés. Leur mise en place réelle a été plus facile, avec moins de perturbations dans son quotidien.",
        "citation": None,
        "todo": "À compléter avec Sara : (1) images du plan 3D à montrer (vérifier que la chambre n’est pas identifiable ; les captures du dossier « Doc » sont à confirmer) ; (2) accord de la personne ; (3) durée du projet et nombre de séances ; (4) exemple de changement fait dans la vraie chambre ; (5) citation anonymisée.",
    },
    {
        "slug": "ateliers-cuisine-psychiatrie",
        "cardTitle": "Ateliers cuisine en psychiatrie",
        "order": 4,
        "title": "Ateliers cuisine et visites à domicile en psychiatrie",
        "public": [PUB["struct"], PUB["pers"]],
        "with": "Les patients, en accompagnement individuel et en groupe, dans le cadre de mon poste à l’hôpital",
        "duration": "3 ans",
        "intro": "Des ateliers en groupe, puis un accompagnement individuel avec des visites à domicile, pour préparer la sortie d’un hôpital psychiatrique.",
        "contextTitle": "Préparer la suite après l’hospitalisation",
        "contextText": "À l’hôpital psychiatrique, l’accompagnement se concentre surtout sur la crise et l’hospitalisation. Peu de choses sont prévues pour la suite. Pourtant, se projeter vers des activités qui ont du sens, retrouver les gestes du quotidien et avoir des stratégies pour éviter les rechutes sont essentiels pour une sortie durable.",
        "steps": [
            ("Des ateliers en groupe", "J’ai mis en place des ateliers : jardinage, arts créatifs, construction, groupes de parole, et un atelier cuisine pour réapprendre les gestes du quotidien avant la sortie."),
            ("Un accompagnement individuel", "Pour aller plus loin, la personne choisit un menu complet (entrée, plat, dessert), prépare le budget et fait les courses."),
            ("Des visites à domicile", "Je me rends chez la personne pour l’observer dans son environnement réel et adapter l’accompagnement."),
        ],
        "blocks": [],
        "resultTitle": "Une remise en mouvement vers l’extérieur et l’autonomie",
        "resultText": "Les personnes ont repris progressivement contact avec l’extérieur. Le travail a porté sur des compétences concrètes du quotidien : relations avec les autres, budget, choix, planification, organisation et estime de soi. Les personnes ont aussi mieux préparé des stratégies pour limiter les risques de rechute après la sortie.",
        "citation": None,
        "todo": "Étude de cas INCOMPLÈTE. À compléter avec Sara : (1) ce qu’elle peut montrer (le champ est resté vide) : photos d’atelier sans visage, menus, outils ; (2) accord de l’hôpital (service de psychiatrie du GHNE) avant de le nommer ; (3) exemples de situations, sans élément identifiant ; (4) nombre de participants et fréquence des ateliers ; (5) à vérifier : la visite à domicile est-elle toujours liée au même parcours ?",
    },
    {
        "slug": "quete-de-l-autonomie-jeu-jeunes-adultes",
        "cardTitle": "La Quête de l’Autonomie",
        "order": 5,
        "title": "La Quête de l’Autonomie, un jeu pour jeunes adultes",
        "public": [PUB["struct"], PUB["pers"]],
        "with": "Une collègue éducatrice spécialisée du SAMSAH",
        "duration": None,
        "intro": "Un jeu en plusieurs séances, organisées en quêtes, pour aider des jeunes adultes à avancer vers l’autonomie.",
        "contextTitle": "Des jeunes adultes en route vers l’indépendance",
        "contextText": "Avec une collègue éducatrice spécialisée, j’ai constaté des besoins qui reviennent chez des jeunes adultes de 18 à 28 ans : quitter le domicile familial, trouver un emploi ou une activité qui a du sens, passer le permis, gérer un budget, faire face aux imprévus, trouver sa place dans la société. Ces besoins sont apparus d’abord chez des personnes autistes. Ils concernent en fait plus largement les jeunes adultes qui deviennent indépendants.",
        "steps": [
            ("Choisir un univers de jeu", "Nous avons imaginé un thème fantaisiste, pensé pour un public qui connaît les jeux vidéo. Chaque participant incarne un avatar."),
            ("Créer des quêtes", "Chaque séance devient une quête sur un thème : budget, courses, organisation du quotidien, imprévus, permis de conduire, devenir locataire ou propriétaire."),
            ("Jouer et s’exercer", "L’avatar avance de quête en quête et gagne des pièces d’or. Les séances alternent mises en situation, exercices, débats et outils mis à disposition."),
        ],
        "blocks": [],
        "resultTitle": "Un jeu pensé pour donner confiance et motiver",
        "resultText": "Le jeu est conçu pour renforcer l’estime de soi des participants face aux grandes étapes de la vie adulte. Sa forme rend les apprentissages plus motivants.",
        "citation": None,
        "todo": "Étude de cas INCOMPLÈTE, à ne pas publier sans résultat. À compléter avec Sara : (1) combien de séances ont déjà eu lieu, avec qui, combien de participants ; (2) retours observés (le texte actuel décrit ce que le jeu vise, pas ce qui a été constaté) ; (3) captures du jeu (« Ce que je peux montrer » est resté vide) ; (4) accord de la collègue (Lorraine Maillard) avant de la nommer ; (5) durée de conception ; (6) suite envisagée : Sara parle d’un développement futur en programme.",
    },
]

# Projet en pause : brouillon (non affiché sur le site tant qu'il n'est pas publié dans le Studio).
DRAFT = {
    "slug": "site-ressources-numeriques-samsah",
        "cardTitle": "Site de ressources pour l’autonomie",
    "order": 6,
    "draft": True,
    "title": "Site de ressources numériques pour l’autonomie",
    "public": [PUB["struct"], PUB["pers"]],
    "with": "Un étudiant en design web",
    "duration": None,
    "intro": "Une idée de site pour rassembler au même endroit les ressources d’autonomie d’un SAMSAH, accessibles au moment du besoin. Le projet est en pause.",
    "contextTitle": "Trouver une réponse au moment où l’on en a besoin",
    "contextText": "Les personnes autistes accompagnées au SAMSAH parlent souvent de leurs difficultés face aux imprévus du quotidien : entretenir le linge ou la voiture, faire de petites réparations, cuisiner, trouver le bon professionnel de santé. Le SAMSAH avait déjà des livrets sur ces sujets, d’abord sur papier puis en PDF, mais sans endroit unique pour les consulter. Internet regorge de tutoriels, mais cette abondance distrait et fait vite perdre de vue le but de départ.",
    "steps": [
        ("Recenser l’existant", "Nous avons repris les livrets du SAMSAH, en papier puis en PDF."),
        ("Imaginer un accès rapide", "Nous avons réfléchi à un site ou une application, simple et fluide, qui évite de se perdre dans trop d’informations. L’idée inclut des tutoriels vidéo et des QR codes pour compléter les livrets."),
        ("Réaliser une première ébauche", "Une première version du site a été dessinée."),
    ],
    "blocks": [],
    "resultTitle": "Une première ébauche, en attente de suite",
    "resultText": "L’ébauche pose les bases d’un futur outil qui rassemblerait les ressources d’autonomie du SAMSAH. Le projet est en pause. Il pourra reprendre selon les besoins repérés.",
    "citation": None,
    "todo": "Brouillon, projet en pause. À décider : le garder ou non (le collaborateur cité est Thomas Marilleau, qui réalise aussi ce site). À compléter : commentaires des personnes accompagnées, captures de l’ébauche (à confirmer), accord du SAMSAH.",
}


def to_doc(p):
    pid = f"project-{p['slug']}"
    if p.get("draft"):
        pid = "drafts." + pid
    doc = {
        "_id": pid,
        "_type": "project",
        "title": p["title"],
        "slug": {"_type": "slug", "current": p["slug"]},
        "cardTitle": p["cardTitle"],
        "order": p["order"],
        "public": p["public"],
        "with": p["with"],
        "intro": p["intro"],
        "contextTitle": p["contextTitle"],
        "contextText": p["contextText"],
        "steps": [
            {"_type": "step", "_key": f"s{i+1}", "title": t, "text": x} for i, (t, x) in enumerate(p["steps"])
        ],
        "blocks": [
            {"_type": "textBlock", "_key": f"b{i+1}", "title": t, "text": x} for i, (t, x) in enumerate(p["blocks"])
        ],
        "resultTitle": p["resultTitle"],
        "resultText": p["resultText"],
        "todo": p["todo"],
    }
    if p.get("duration"):
        doc["duration"] = p["duration"]
    if p.get("citation"):
        doc["citation"] = p["citation"]
    return doc


if __name__ == "__main__":
    out = pathlib.Path(__file__).resolve().parent.parent / "studio" / "seed" / "projects.ndjson"
    out.parent.mkdir(exist_ok=True)
    docs = [to_doc(p) for p in PROJECTS + [DRAFT]]
    out.write_text("\n".join(json.dumps(d, ensure_ascii=False) for d in docs) + "\n", encoding="utf-8")
    print(f"{len(docs)} projets écrits dans {out}")
