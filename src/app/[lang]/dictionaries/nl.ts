import enDictionary from './en';

const dictionary = {
  ...enDictionary,
  metadata: {
    ...enDictionary.metadata,
    title: {
      default: 'Cotersus IT Consulting | Senior softwareontwikkeling',
      template: '%s | Cotersus',
    },
    description:
      'Belgisch IT-consultancybedrijf voor senior softwareontwikkeling, technische coaching en moderne webplatforms. Expertise in React, Angular, Next.js, Nx en TypeScript.',
    keywords: [
      'IT consultancy België',
      'softwareontwikkeling',
      'full-stack ontwikkeling',
      'React ontwikkeling',
      'Angular ontwikkeling',
      'Next.js',
      'TypeScript',
      'technische coaching',
      'Belgische tech consultancy',
      'kwaliteitssoftware',
    ],
    openGraph: {
      ...enDictionary.metadata.openGraph,
      locale: 'nl_BE',
      title: 'Cotersus IT Consulting | Senior softwareontwikkeling',
      description:
        'Belgisch IT-consultancybedrijf voor senior softwareontwikkeling, technische coaching en moderne webplatforms.',
    },
    twitter: {
      ...enDictionary.metadata.twitter,
      title: 'Cotersus IT Consulting | Senior softwareontwikkeling',
      description:
        'Belgisch IT-consultancybedrijf voor senior softwareontwikkeling, technische coaching en moderne webplatforms.',
    },
    jsonLd: {
      ...enDictionary.metadata.jsonLd,
      description:
        'Belgisch IT-consultancybedrijf voor senior softwareontwikkeling, technische coaching en moderne webplatforms.',
      contactType: 'Klantenservice',
      availableLanguage: ['en', 'nl', 'fr'],
    },
  },
  header: {
    ...enDictionary.header,
    companyTagline: 'IT Consulting',
    themeToggleLabel: 'Thema wisselen',
  },
  footer: {
    ...enDictionary.footer,
    blurb:
      'Senior softwareontwikkeling, technische richting en teamcoaching voor organisaties die willen blijven opleveren zonder hun codebase te laten ontsporen.',
    contactHeading: 'Contact',
    connectHeading: 'Volg ons',
    privacyLabel: 'Privacybeleid',
    copyrightSuffix: 'Alle rechten voorbehouden.',
  },
  home: {
    hero: {
      eyebrow: 'Cotersus / IT consulting / België',
      title: 'Senior software delivery zonder de gebruikelijke ruis.',
      description:
        'Cotersus helpt teams producten bouwen, platforms moderniseren en hun engineeringkwaliteit verhogen met praktische ontwikkeling en duidelijke technische richting.',
      primaryCta: {
        href: 'mailto:info@cotersus.be',
        label: 'Plan een kennismakingsgesprek',
      },
      secondaryCta: {
        href: '#projects',
        label: 'Bekijk recent werk',
      },
      cards: {
        featuredBadge: 'Uitgelicht project',
        supportingBadge: 'Ondersteunend project',
        platformBadge: 'Platformwerk',
      },
      highlights: [
        {
          label: 'Focus',
          value: 'Productontwikkeling, advies, coaching',
        },
        {
          label: 'Stack',
          value: 'Next.js, Angular, TypeScript, Nx',
        },
        {
          label: 'Aanpak',
          value: 'Duidelijke scope. Clean code. Praktische aanpak.',
        },
      ],
    },
    capabilities: {
      eyebrow: 'Hoe Cotersus helpt',
      title: 'De ondersteuning die je nodig hebt om met vertrouwen op te leveren.',
      pillars: [
        {
          title: 'Senior engineering',
          body: 'Hands-on ondersteuning voor teams die ervaren developers nodig hebben die zelfstandig werk vooruithelpen.',
        },
        {
          title: 'Onderhoudbare systemen',
          body: 'Architectuur en codebases die helder blijven terwijl producten, teams en noden groeien.',
        },
        {
          title: 'Ingebedde coaching',
          body: 'Technische begeleiding, code reviews en ondersteuning voor het team, ingebouwd in het traject.',
        },
      ],
    },
    projects: {
      eyebrow: 'Geselecteerd werk',
      title: 'Recente projecten in productontwikkeling, platformwerk en frontend.',
      description:
        'Een greep uit het werk dat Cotersus opleverde voor klanten die nood hadden aan betrouwbare implementatie, sterkere frontendsystemen of een moderne online aanwezigheid.',
      featuredEyebrow: 'Uitgelicht project',
      viewProjectLabel: 'Bekijk project',
    },
    process: {
      eyebrow: 'Werkwijze',
      title: 'Een leveringsproces dat onzekerheid wegneemt.',
      description:
        'Het doel is eenvoudig: het werk snel scherp krijgen, eerst het juiste bouwen en een codebase achterlaten waarmee je team verder kan.',
      steps: [
        {
          label: '01',
          title: 'Scope scherpstellen',
          body: 'We stemmen doelen, beperkingen en prioriteiten af voor de implementatie start, zodat het werk gefocust blijft.',
          phase: 'Strategie',
        },
        {
          label: '02',
          title: 'Eerst bouwen wat telt',
          body: 'We focussen op de productpaden met de hoogste bedrijfswaarde en bouwen daar de technische basis rond.',
          phase: 'Uitvoering',
        },
        {
          label: '03',
          title: 'Het team versterken',
          body: 'Het traject omvat documentatie, coaching en kwaliteitsafspraken die het product ook na livegang gezond houden.',
          phase: 'Overdracht',
        },
      ],
    },
    technologies: {
      eyebrow: 'Technologische basis',
      title: 'Technologie gekozen voor echt productwerk.',
      description:
        'Cotersus werkt met bewezen frontend- en full-stack tools die snelle oplevering, onderhoudbare code en teams ondersteunen die ook na de livegang blijven bouwen.',
    },
    cta: {
      eyebrow: 'Volgende stap',
      title: 'Heb je een ervaren team nodig om je project vooruit te brengen?',
      description:
        'Vertel wat je bouwt en waar de uitvoering vastloopt. Wij ondersteunen implementatie, architectuur en technische coaching van opstart tot livegang.',
      primaryCta: {
        href: 'mailto:info@cotersus.be',
        label: 'Plan een kennismakingsgesprek',
      },
      secondaryCta: {
        href: '#projects',
        label: 'Bekijk geselecteerd werk',
      },
    },
  },
  privacy: {
    metadata: {
      title: 'Privacybeleid | Cotersus IT Consulting',
      description: 'Privacybeleid voor Cotersus IT Consulting.',
    },
    title: 'Privacybeleid',
    lastUpdatedLabel: 'Laatst bijgewerkt:',
    intro:
      'Bij Cotersus BV nemen we je privacy serieus. Dit privacybeleid legt uit hoe we je persoonsgegevens verzamelen, gebruiken en beschermen.',
    sections: [
      {
        heading: '1. Welke informatie we verzamelen',
        paragraph: 'We kunnen de volgende soorten informatie verzamelen:',
        list: [
          'Contactgegevens (naam, e-mailadres, bedrijfsnaam) wanneer je contact met ons opneemt via onze sociale kanalen',
          'Gebruiksgegevens via analytics (paginabezoeken, browsertype, apparaatinformatie)',
          'Technische gegevens (IP-adres, browsertype, besturingssysteem)',
        ],
      },
      {
        heading: '2. Hoe we je informatie gebruiken',
        paragraph: 'We gebruiken verzamelde informatie voor de volgende doeleinden:',
        list: [
          'Om op je vragen te antwoorden en onze diensten te leveren',
          'Om onze website en diensten te verbeteren',
          'Om websiteverkeer en gebruikspatronen te analyseren',
          'Om wettelijke verplichtingen na te leven',
        ],
      },
      {
        heading: '3. Cookies en tracking',
        paragraph: 'We gebruiken minimale tracking op onze website:',
        list: [
          {
            label: 'Analytics',
            text: 'We gebruiken Vercel Analytics en Speed Insights voor privacyvriendelijke performancemonitoring',
          },
          {
            label: 'Themakeuze',
            text: 'We bewaren je voorkeur voor licht of donker lokaal in je browser',
          },
        ],
      },
      {
        heading: '4. Gegevensdeling en openbaarmaking',
        paragraph:
          'We verkopen, verhandelen of verhuren je persoonsgegevens niet aan derden. We delen je informatie alleen in de volgende omstandigheden:',
        list: [
          'Met je uitdrukkelijke toestemming',
          'Om wettelijke verplichtingen na te leven of op juridische verzoeken te reageren',
          'Om onze rechten, privacy, veiligheid of eigendom te beschermen',
        ],
      },
      {
        heading: '5. Gegevensbeveiliging',
        paragraph:
          'We nemen gepaste technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen ongeoorloofde toegang, wijziging, openbaarmaking of vernietiging.',
      },
      {
        heading: '6. Je rechten (GDPR)',
        paragraph: 'Onder de GDPR heb je de volgende rechten:',
        list: [
          {
            label: 'Recht op inzage',
            text: 'Vraag een kopie van je persoonsgegevens op',
          },
          {
            label: 'Recht op rectificatie',
            text: 'Vraag correctie van onjuiste gegevens',
          },
          {
            label: 'Recht op gegevenswissing',
            text: 'Vraag verwijdering van je persoonsgegevens',
          },
          {
            label: 'Recht op beperking',
            text: 'Vraag beperking van gegevensverwerking',
          },
          {
            label: 'Recht op overdraagbaarheid',
            text: 'Vraag overdracht van je gegevens',
          },
          {
            label: 'Recht van bezwaar',
            text: 'Maak bezwaar tegen verwerking van je gegevens',
          },
        ],
      },
      {
        heading: '7. Bewaartermijn van gegevens',
        paragraph:
          'We bewaren je persoonsgegevens alleen zolang als nodig om de doelen in dit privacybeleid te realiseren, tenzij een langere bewaartermijn wettelijk vereist of toegestaan is.',
      },
      {
        heading: '8. Internationale gegevensoverdrachten',
        paragraph:
          'Je gegevens kunnen worden overgedragen naar en verwerkt in andere landen dan België. We zorgen daarbij voor passende waarborgen in lijn met de GDPR.',
      },
      {
        heading: '9. Wijzigingen aan dit beleid',
        paragraph:
          'We kunnen dit privacybeleid van tijd tot tijd bijwerken. We informeren je over wijzigingen door het nieuwe privacybeleid op deze pagina te publiceren en de datum van "Laatst bijgewerkt" aan te passen.',
      },
      {
        heading: '10. Contacteer ons',
        paragraph:
          'Heb je vragen over dit privacybeleid of wil je je rechten uitoefenen? Neem dan contact met ons op:',
      },
    ],
    contact: {
      company: 'Cotersus BV',
      addressLine1: 'Beigemsesteenweg 387',
      addressLine2: '1852 Beigem, België',
      vat: 'BTW: BE 0791.547.318',
      emailLabel: 'E-mail:',
    },
    backToHomeLabel: 'Terug naar de homepagina',
  },
  projectCopies: {
    'zwem-coach': {
      alt: 'Zwem Coach platform',
      role: 'Analyse • Design • Full-stack ontwikkeling',
      title: 'Zwem Coach',
      description:
        'Leer crawl zwemmen of verfijn je techniek onder begeleiding van Pieter Timmers en Ward Pellegrims.',
    },
    'ward-pellegrims-coaching': {
      alt: 'Ward Pellegrims Coaching platform',
      role: 'Analyse • Design • Full-stack ontwikkeling',
      title: 'Ward Pellegrims Coaching',
      description:
        'Professioneel coachingplatform voor topsporters in zwemmen en triatlon, met online trainingsprogramma\'s, techniektrainingen en betaalintegratie.',
    },
    'exceptional-kids': {
      alt: 'Website van Exceptional Kids Foundation',
      role: 'Analyse • Design • Full-stack ontwikkeling',
      title: 'Exceptional Kids',
      description:
        'Website van de stichting die kinderen met zeldzame genetische aandoeningen ondersteunt, met documentaire-integratie, educatieve content en fondsenwerving.',
    },
    'vs-mediation': {
      alt: 'VS Mediation voetbalmakelaarsplatform',
      role: 'Frontend ontwikkeling',
      title: 'VS Mediation',
      description:
        'Modern platform voor voetbalmakelaardij dat juridische expertise, een internationaal netwerk en performance coaching samenbrengt in een transparant model.',
    },
    'van-steenbrugge-advocaten': {
      alt: 'Van Steenbrugge Advocaten website',
      role: 'Frontend ontwikkeling',
      title: 'Van Steenbrugge Advocaten',
      description:
        'Moderne website-update voor een Belgisch advocatenkantoor met focus op professionele branding en gebruikservaring.',
    },
    'jazz-and-mo': {
      alt: 'Jazz&Mo platform',
      role: 'Frontend ontwikkeling',
      title: 'Jazz&Mo',
      description:
        'Jazzmagazine, communitysite en muziekplatform waar gebruikers bijdragen kunnen leveren en nieuwe artiesten of albums kunnen ontdekken.',
    },
    banakin: {
      alt: 'Banakin liefdadigheidsfonds website',
      role: 'Frontend ontwikkeling',
      title: 'Banakin',
      description:
        'Website van het liefdadigheidsfonds van de Koning Boudewijnstichting, ter ondersteuning van kankerpatiënten in België, erfgoedbehoud en wereldwijde gezondheidsinitiatieven.',
    },
    'manage-my-business': {
      alt: 'Manage My Business platform',
      role: 'Frontend ontwikkeling',
      title: 'Manage My Business',
      description:
        'Het Belgische platform voor de online oprichting, wijziging en ontbinding van je vennootschap, vereniging of stichting.',
    },
    stapor: {
      alt: 'Statuten en vertegenwoordigingsbevoegdheden platform',
      role: 'Frontend ontwikkeling',
      title: 'Statuten en vertegenwoordigingsbevoegdheden',
      description:
        'De statutaire databank met alle versies van statuten van rechtspersonen, op basis van notariële akten in België, vanaf de oprichting tot de meest recente wijziging.',
    },
    'zvc-goldgetters': {
      alt: 'ZVC Goldgetters futsalteam website',
      role: 'Analyse • Design • Full-stack ontwikkeling',
      title: 'ZVC Goldgetters',
      description:
        'Officiële website van futsalteam ZVC Goldgetters met teaminformatie, wedstrijdschema\'s, spelersprofielen, statistieken en meer.',
    },
  },
} as const;

export default dictionary;
