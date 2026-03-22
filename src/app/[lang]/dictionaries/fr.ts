import enDictionary from './en';

const dictionary = {
  ...enDictionary,
  metadata: {
    ...enDictionary.metadata,
    title: {
      default: 'Cotersus IT Consulting | Développement logiciel senior',
      template: '%s | Cotersus',
    },
    description:
      'Société belge de consultance IT spécialisée en développement logiciel senior, coaching technique et plateformes web modernes. L\'expertise couvre React, Angular, Next.js, Nx et TypeScript.',
    keywords: [
      'consultance IT Belgique',
      'développement logiciel',
      'développement full-stack',
      'développement React',
      'développement Angular',
      'Next.js',
      'TypeScript',
      'coaching développeurs',
      'conseil tech belge',
      'logiciel de qualité',
    ],
    openGraph: {
      ...enDictionary.metadata.openGraph,
      locale: 'fr_BE',
      title: 'Cotersus IT Consulting | Développement logiciel senior',
      description:
        'Société belge de consultance IT spécialisée en développement logiciel senior, coaching technique et plateformes web modernes.',
    },
    twitter: {
      ...enDictionary.metadata.twitter,
      title: 'Cotersus IT Consulting | Développement logiciel senior',
      description:
        'Société belge de consultance IT spécialisée en développement logiciel senior, coaching technique et plateformes web modernes.',
    },
    jsonLd: {
      ...enDictionary.metadata.jsonLd,
      description:
        'Société belge de consultance IT spécialisée en développement logiciel senior, coaching technique et plateformes web modernes.',
      contactType: 'Service clientèle',
      availableLanguage: ['en', 'nl', 'fr'],
    },
  },
  header: {
    ...enDictionary.header,
    companyTagline: 'Consultance IT',
    themeToggleLabel: 'Changer le thème',
  },
  footer: {
    ...enDictionary.footer,
    blurb:
      'Développement logiciel senior, direction technique et accompagnement d\'équipe pour les organisations qui veulent continuer à livrer sans compromettre la qualité de leur base de code.',
    contactHeading: 'Contact',
    connectHeading: 'Nous suivre',
    privacyLabel: 'Politique de confidentialité',
    copyrightSuffix: 'Tous droits réservés.',
    socialLinks: {
      linkedin: 'LinkedIn',
      x: 'X (Twitter)',
      bluesky: 'Bluesky',
    },
  },
  home: {
    hero: {
      eyebrow: 'Cotersus / consultance IT / Belgique',
      title: 'Développement logiciel senior, sans les obstacles habituels.',
      description:
        'Cotersus aide les équipes à construire des produits, moderniser des plateformes et renforcer leur qualité d\'ingénierie grâce à un développement concret et une direction technique claire.',
      primaryCta: {
        href: 'mailto:info@cotersus.be',
        label: 'Planifier un appel de découverte',
      },
      secondaryCta: {
        href: '#projects',
        label: 'Voir les réalisations récentes',
      },
      cards: {
        featuredBadge: 'Projet à la une',
        supportingBadge: 'Projet de support',
        platformBadge: 'Travail plateforme',
      },
      highlights: [
        {
          label: 'Focus',
          value: 'Livraison produit, conseil, coaching',
        },
        {
          label: 'Stack',
          value: 'Next.js, Angular, TypeScript, Nx',
        },
        {
          label: 'Approche',
          value: 'Cadrage clair. Code propre. Exécution pragmatique.',
        },
      ],
    },
    capabilities: {
      eyebrow: 'Comment Cotersus aide',
      title: 'Le soutien nécessaire pour livrer avec confiance.',
      pillars: [
        {
          title: 'Ingénierie senior',
          body: 'Un accompagnement concret pour les équipes qui ont besoin de développeurs expérimentés capables de faire avancer le travail sans encadrement lourd.',
        },
        {
          title: 'Systèmes maintenables',
          body: 'Une architecture et des bases de code conçues pour rester lisibles à mesure que les produits, les équipes et les besoins évoluent.',
        },
        {
          title: 'Coaching intégré',
          body: 'Accompagnement technique, revue de code et soutien de l\'équipe intégrés au processus de réalisation.',
        },
      ],
    },
    projects: {
      eyebrow: 'Réalisations sélectionnées',
      title: 'Projets récents en produit, plateforme et frontend.',
      description:
        'Quelques exemples de réalisations livrées par Cotersus pour des clients qui avaient besoin d\'une implémentation fiable, de systèmes frontend plus solides ou d\'une présence web moderne.',
      featuredEyebrow: 'Projet à la une',
      viewProjectLabel: 'Voir le projet',
    },
    process: {
      eyebrow: 'Méthode',
      title: 'Un processus conçu pour réduire l\'incertitude.',
      description:
        'L\'objectif est simple : comprendre rapidement le besoin, construire d\'abord la bonne solution et laisser une base de code que votre équipe peut faire évoluer.',
      steps: [
        {
          label: '01',
          title: 'Clarifier le cadrage',
          body: 'Nous alignons objectifs, contraintes et priorités avant de démarrer l\'implémentation afin de garder le travail ciblé.',
          phase: 'Stratégie',
        },
        {
          label: '02',
          title: 'Construire d\'abord l\'essentiel',
          body: 'Nous ciblons les parcours produit à plus forte valeur et structurons la base technique autour d\'eux.',
          phase: 'Exécution',
        },
        {
          label: '03',
          title: 'Renforcer l\'équipe',
          body: 'Le projet inclut la documentation, le coaching et les pratiques de qualité qui maintiennent le produit en bonne santé après la mise en production.',
          phase: 'Transmission',
        },
      ],
    },
    technologies: {
      eyebrow: 'Base technologique',
      title: 'Des technologies choisies pour un vrai travail produit.',
      description:
        'Cotersus travaille avec des outils frontend et full-stack éprouvés qui soutiennent une livraison rapide, un code maintenable et des équipes qui continuent à construire après le lancement.',
    },
    cta: {
      eyebrow: 'Prochaine étape',
      title: 'Besoin d\'une équipe expérimentée pour faire avancer votre projet ?',
      description:
        'Dites-nous ce que vous construisez et où l\'exécution bloque. Nous pouvons aider sur l\'implémentation, l\'architecture et le coaching technique, du cadrage au lancement.',
      primaryCta: {
        href: 'mailto:info@cotersus.be',
        label: 'Planifier un appel de découverte',
      },
      secondaryCta: {
        href: '#projects',
        label: 'Voir les réalisations',
      },
    },
  },
  privacy: {
    metadata: {
      title: 'Politique de confidentialité | Cotersus IT Consulting',
      description: 'Politique de confidentialité de Cotersus IT Consulting.',
    },
    title: 'Politique de confidentialité',
    lastUpdatedLabel: 'Dernière mise à jour:',
    intro:
      'Chez Cotersus BV, nous prenons votre vie privée au sérieux. Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles.',
    sections: [
      {
        heading: '1. Informations que nous collectons',
        paragraph: 'Nous pouvons collecter les types d\'informations suivants :',
        list: [
          'Informations de contact (nom, adresse e-mail, nom de société) lorsque vous nous contactez via nos réseaux sociaux',
          'Données d\'usage via les analytics (visites de pages, type de navigateur, informations sur l\'appareil)',
          'Données techniques (adresse IP, type de navigateur, système d\'exploitation)',
        ],
      },
      {
        heading: '2. Comment nous utilisons vos informations',
        paragraph: 'Nous utilisons les informations collectées pour:',
        list: [
          'Répondre à vos demandes et fournir nos services',
          'Améliorer notre site web et nos services',
          'Analyser le trafic et les usages du site',
          'Respecter nos obligations légales',
        ],
      },
      {
        heading: '3. Cookies et suivi',
        paragraph: 'Nous utilisons un suivi minimal sur notre site:',
        list: [
          {
            label: 'Analytics',
            text: 'Nous utilisons Vercel Analytics et Speed Insights pour un suivi de performance respectueux de la vie privée',
          },
          {
            label: 'Préférence de thème',
            text: 'Nous stockons localement votre préférence pour le mode clair ou sombre dans votre navigateur',
          },
        ],
      },
      {
        heading: '4. Partage et divulgation des données',
        paragraph:
          'Nous ne vendons, n\'échangeons ni ne louons vos données personnelles à des tiers. Nous ne partageons vos données que dans les cas suivants :',
        list: [
          'Avec votre consentement explicite',
          'Pour respecter une obligation légale ou répondre à une demande juridique',
          'Pour protéger nos droits, notre vie privée, notre sécurité ou nos biens',
        ],
      },
      {
        heading: '5. Sécurité des données',
        paragraph:
          'Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.',
      },
      {
        heading: '6. Vos droits (RGPD)',
        paragraph: 'Conformément au RGPD, vous disposez des droits suivants:',
        list: [
          {
            label: 'Droit d\'accès',
            text: 'Demander une copie de vos données personnelles',
          },
          {
            label: 'Droit de rectification',
            text: 'Demander la correction de données inexactes',
          },
          {
            label: 'Droit à l\'effacement',
            text: 'Demander la suppression de vos données personnelles',
          },
          {
            label: 'Droit à la limitation',
            text: 'Demander la limitation du traitement des données',
          },
          {
            label: 'Droit à la portabilité',
            text: 'Demander le transfert de vos données',
          },
          {
            label: 'Droit d\'opposition',
            text: 'Vous opposer au traitement de vos données',
          },
        ],
      },
      {
        heading: '7. Durée de conservation',
        paragraph:
          'Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités décrites dans cette politique, sauf durée plus longue imposée ou autorisée par la loi.',
      },
      {
        heading: '8. Transferts internationaux de données',
        paragraph:
          'Vos données peuvent être transférées et traitées dans des pays autres que la Belgique. Nous mettons en place des garanties appropriées conformément aux exigences du RGPD.',
      },
      {
        heading: '9. Modifications de cette politique',
        paragraph:
          'Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Toute modification sera publiée sur cette page avec mise à jour de la date de "Dernière mise à jour".',
      },
      {
        heading: '10. Nous contacter',
        paragraph:
          'Si vous avez des questions concernant cette politique de confidentialité ou souhaitez exercer vos droits, contactez-nous:',
      },
    ],
    contact: {
      company: 'Cotersus BV',
      addressLine1: 'Beigemsesteenweg 387',
      addressLine2: '1852 Beigem, Belgique',
      vat: 'TVA: BE 0791.547.318',
      emailLabel: 'E-mail:',
    },
    backToHomeLabel: 'Retour à l\'accueil',
  },
  projectCopies: {
    'zwem-coach': {
      alt: 'Plateforme Zwem Coach',
      role: 'Analyse • Design • Développement full-stack',
      title: 'Zwem Coach',
      description:
        'Apprenez le crawl ou affinez votre technique avec l\'accompagnement expert de Pieter Timmers et Ward Pellegrims.',
    },
    'ward-pellegrims-coaching': {
      alt: 'Plateforme Ward Pellegrims Coaching',
      role: 'Analyse • Design • Développement full-stack',
      title: 'Ward Pellegrims Coaching',
      description:
        'Plateforme de coaching professionnel pour athlètes de haut niveau en natation et triathlon, avec programmes en ligne, séances techniques et intégration des paiements.',
    },
    'exceptional-kids': {
      alt: 'Site de la fondation Exceptional Kids',
      role: 'Analyse • Design • Développement full-stack',
      title: 'Exceptional Kids',
      description:
        'Site de la fondation qui soutient les enfants atteints de maladies génétiques rares, avec intégration documentaire, ressources pédagogiques et initiatives de collecte de fonds.',
    },
    'vs-mediation': {
      alt: 'Plateforme agence football VS Mediation',
      role: 'Développement frontend',
      title: 'VS Mediation',
      description:
        'Plateforme moderne d\'agence de football combinant expertise juridique, réseau international et coaching de performance dans une structure tarifaire transparente.',
    },
    'van-steenbrugge-advocaten': {
      alt: 'Site Van Steenbrugge Advocaten',
      role: 'Développement frontend',
      title: 'Van Steenbrugge Advocaten',
      description:
        'Refonte moderne du site d\'un cabinet d\'avocats belge, avec un accent mis sur l\'image professionnelle et l\'expérience utilisateur.',
    },
    'jazz-and-mo': {
      alt: 'Plateforme Jazz&Mo',
      role: 'Développement frontend',
      title: 'Jazz&Mo',
      description:
        'Magazine jazz, site communautaire et plateforme de découverte musicale où les utilisateurs peuvent contribuer et découvrir leur prochain artiste ou album préféré.',
    },
    banakin: {
      alt: 'Site du fonds caritatif Banakin',
      role: 'Développement frontend',
      title: 'Banakin',
      description:
        'Site du fonds caritatif géré par la Fondation Roi Baudouin, soutenant les patients atteints de cancer en Belgique, la préservation du patrimoine et des initiatives de santé mondiale.',
    },
    'manage-my-business': {
      alt: 'Plateforme Manage My Business',
      role: 'Développement frontend',
      title: 'Manage My Business',
      description:
        'La plateforme belge pour la constitution, modification et dissolution en ligne de votre société, association ou fondation.',
    },
    stapor: {
      alt: 'Plateforme Statuten en vertegenwoordigingsbevoegdheden',
      role: 'Développement frontend',
      title: 'Statuts et pouvoirs de représentation',
      description:
        'La base statutaire qui regroupe toutes les versions des statuts des personnes morales, issues d\'actes notariés passés en Belgique, depuis la constitution jusqu\'à la dernière mise à jour.',
    },
    'zvc-goldgetters': {
      alt: 'Site de l\'équipe de futsal ZVC Goldgetters',
      role: 'Analyse • Design • Développement full-stack',
      title: 'ZVC Goldgetters',
      description:
        'Site officiel de l\'équipe de futsal ZVC Goldgetters, avec informations d\'équipe, calendrier des matchs, profils des joueurs, statistiques et plus encore.',
    },
  },
} as const;

export default dictionary;
