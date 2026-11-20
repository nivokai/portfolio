// ─────────────────────────────────────────────────────────────
// Tout le contenu du portfolio se modifie ici.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Tom Cunningham',
  handle: 'nivokai',
  status: 'Tom Cunningham · Apprenti informaticien à Genève',
  github: 'https://github.com/nivokai',
  tagline: 'Je construis des',
  roles: ['serveurs FiveM', 'sites FiveM','applications PHP', 'bots Discord', 'outils sur mesure', 'cartes interactives'],
  intro:
    "Apprenti informaticien (CFC + maturité, 2024 – 2028). Je conçois des serveurs, des sites, des applications de gestion et des bots pour des communautés de jeu : de la base FiveM écrite à la main au panel d'administration, avec connexion Discord et base de données.",
  about:
    "Je pars d'un besoin concret, souvent celui d'un serveur roleplay, et j'en fais un outil qui tourne sans qu'on y pense : un catalogue, un panel de tickets, une comptabilité d'entreprise, un dossier médical. Du front soigné, un back sécurisé, une installation documentée."
};

export const qualities = ['Analytique', 'Curieux', 'Rigoureux', "Esprit d'équipe"];

// Parcours : formation et expérience. `current: true` marque ce qui est en cours.
export const education = [
  {
    period: '2024 – 2028',
    title: 'CFC Informatique + Maturité',
    place: 'Formation en cours',
    current: true
  },
  {
    period: '2023 – 2024',
    title: 'Collège Sismondi',
    place: 'Genève',
    text: "L'année où j'ai choisi de me lancer dans l'informatique."
  }
];

export const experience = [
  {
    period: '2025',
    title: 'Commune de Lancy',
    place: 'Logistique et technique',
    text: "Mise en place des structures pour les fêtes des écoles, installation des réseaux électriques, vérification et contrôle approfondi du matériel."
  },
  {
    period: '2021 – 2022',
    title: 'Entreprise familiale de paysagisme',
    place: 'Espaces verts',
    text: 'Contact avec la clientèle, travaux variés en extérieur : autonomie et débrouillardise.'
  }
];

export const marquee = ['Lua', 'PHP', 'JavaScript', 'MySQL', 'Discord', 'FiveM', 'Leaflet', 'Node.js', 'React'];

export const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'server', label: 'Serveurs' },
  { id: 'site', label: 'Sites' },
  { id: 'app', label: 'Applications' },
  { id: 'bot', label: 'Bots' }
];

// `repo` : nom du dépôt GitHub associé (facultatif) — le lien « Voir le code »
// n'apparaît que si le dépôt existe et n'est pas vide.
// `modules` : liste affichée à la place d'une capture (facultatif).
export const projects = [
  {
    id: 'nivokai-base',
    category: 'server',
    kind: 'Serveur roleplay',
    status: 'En développement · pas encore terminé',
    title: 'Nivokai · Base FiveM',
    description:
      "Base roleplay FiveM écrite entièrement à la main, sans ESX, QBCore ni ox_* : 44 ressources qui couvrent tout le serveur, des personnages à l'économie, des métiers au téléphone. Presque tout se règle en jeu, depuis les panneaux du staff.",
    statusNote:
      "Le projet n'est pas encore terminé : il avance phase par phase, plusieurs parties restent à tester en jeu et d'autres sont encore à construire (tablettes des organisations, caméras, anticheat, finitions). Le serveur n'est pas encore ouvert au public.",
    highlights: [
      'Framework maison : base de données et migrations, permissions par rang, journal d’audit',
      'Inventaire, banque et factures, véhicules, propriétés, téléphone, santé et justice',
      'Métiers : police, secours, pompiers, restaurants, presse, administration fiscale',
      'Créateurs en jeu : braquages, drogues, émotes, tatouages, décor',
      'Interface « Nivokai Noir » : un design system commun à tous les écrans'
    ],
    tags: ['Lua 5.4', 'JavaScript', 'HTML / CSS', 'MySQL', 'FiveM', 'Discord'],
    modules: [
      'core', 'db', 'ui', 'admin', 'appearance', 'clothing', 'inventory', 'bank', 'fisc', 'shops',
      'jobs', 'groups', 'vehicles', 'properties', 'phone', 'radio', 'dispatch', 'mdt', 'mdt_ems',
      'health', 'justice', 'court', 'press', 'restaurants', 'harvest', 'drugs', 'heists', 'tattoos',
      'emotes', 'pets', 'quests', 'world', 'doors', 'markers', 'decor', 'fire', 'rules', 'context',
      'chat', 'voice', 'hud', 'pause', 'loading', 'images'
    ],
    size: 'wide',
    featured: true
  },
  {
    id: 'blaine-county',
    category: 'site',
    kind: 'Site vitrine',
    title: 'Blaine County',
    description:
      "Site officiel d'un serveur FiveM roleplay : accueil, règlement, boutique, entreprises, commandes et page créateurs. Le contenu se modifie depuis un panneau d'administration, sans toucher au code.",
    highlights: [
      'Créateurs en direct via l’API Twitch',
      'Contenu éditable depuis un panneau admin',
      'Pages légales complètes : CGU, CGV, cookies'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'API Twitch'],
    image: 'shots/blaine-county.webp',
    size: 'wide',
    featured: true
  },
  {
    id: 'motors',
    category: 'site',
    kind: 'Catalogue',
    title: 'Blaine County Motors',
    description:
      'Catalogue officiel du concessionnaire : 446 véhicules répartis en 13 catégories, avec recherche instantanée, tri par prix ou par nom, favoris et fiche détaillée.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'shots/motors.webp'
  },
  {
    id: 'global-import',
    category: 'site',
    kind: 'Site de services',
    title: 'Global Import',
    description:
      'Site de présentation des services : objets custom, matières premières, ajout d’entreprise, gestion et sécurisation, véhicules personnalisés, services web et bots Discord.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'shots/global-import.webp'
  },
  {
    id: 'ems',
    category: 'app',
    kind: 'Application de gestion',
    title: 'EMS · Dossiers médicaux',
    description:
      'Application des services médicaux : patients, ordonnances, opérations, hôpitaux, comptabilité et salaires. Les documents sont générés en Word et en PDF.',
    highlights: [
      'Architecture MVC écrite à la main : routeur, conteneur, middlewares',
      'Connexion Discord, permissions par rôle, CSRF et limitation de débit',
      'Notifications par webhooks Discord'
    ],
    tags: ['PHP 8.1', 'MySQL', 'Discord OAuth2', 'PhpWord', 'Dompdf']
  },
  {
    id: 'entreprises',
    repo: 'Entreprises',
    category: 'app',
    kind: 'Application de gestion',
    title: 'GestionEntreprises',
    description:
      'Gestion complète des entreprises du serveur : employés, grades et permissions, factures, salaires, absences, comptabilité et tranches d’imposition, avec journal des actions.',
    highlights: [
      'API REST pour entreprises, employés et factures',
      'Audit de sécurité OWASP Top 10 : 14 failles sur 14 corrigées',
      'Guide d’installation complet'
    ],
    tags: ['PHP 8.1', 'MariaDB', 'Discord OAuth2', 'Chart.js']
  },
  {
    id: 'ticket',
    category: 'app',
    kind: 'Panel Discord',
    title: 'Panel Tickets',
    description:
      'Panel web relié à un bot Discord : tickets et catégories, envoi et édition de messages, reaction roles, permissions par rôle, notifications, journaux et pages publiques (règlement, catalogue).',
    tags: ['PHP', 'MySQL', 'JavaScript', 'API Discord'],
    size: 'wide'
  },
  {
    id: 'staff',
    size: 'third',
    category: 'app',
    kind: 'Portail interne',
    title: 'Staff Portal',
    description:
      'Portail réservé à l’équipe du serveur : guides, commandes et outils (markers, zones, craft, items, boutiques, propriétés). L’accès à chaque section dépend du rôle Discord.',
    tags: ['PHP', 'Discord OAuth2', 'JSON']
  },
  {
    id: 'map',
    size: 'third',
    category: 'app',
    kind: 'Carte interactive',
    title: 'Zone Map GTA V',
    description:
      'Carte interactive de GTA V avec zones dessinées (polygones, rectangles, cercles), groupes et recherche. Un espace admin permet de tracer les zones directement sur la carte, y compris Cayo Perico et Roxwood.',
    tags: ['Leaflet', 'PHP', 'MySQL']
  },
  {
    id: 'seven-wands',
    size: 'third',
    repo: 'botSevenWands',
    code: true,
    category: 'bot',
    kind: 'Bot Discord',
    title: '7Wands · Calendrier',
    description:
      'Bot de planning de cours : un salon « emploi du temps » mis à jour tout seul sur 7 jours et un salon « historique » avec un message par jour. Les dates se saisissent en langage naturel (« demain 20h »).',
    tags: ['discord.js 14', 'Node.js', 'Luxon']
  }
];

export const stack = [
  'Lua',
  'FiveM',
  'PHP',
  'JavaScript',
  'MySQL',
  'MariaDB',
  'Node.js',
  'discord.js',
  'Discord OAuth2',
  'Leaflet',
  'HTML',
  'CSS',
  'React',
  'Vite',
  'Git'
];

export const stats = [
  { key: 'projects', to: projects.length, label: 'projets réalisés' },
  { key: 'resources', to: 44, label: 'ressources dans la base FiveM Nivokai' },
  { key: 'vehicles', to: 446, label: 'véhicules dans le catalogue Motors' },
  { key: 'audit', to: 14, label: 'failles corrigées après audit OWASP', suffix: '/14' }
];
