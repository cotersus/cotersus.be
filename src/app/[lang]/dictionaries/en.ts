const dictionary = {
  metadata: {
    title: {
      default: 'Cotersus IT Consulting | Senior Software Delivery',
      template: '%s | Cotersus',
    },
    description:
      'Belgian IT consulting company for senior software development, technical coaching, and modern web platforms. Expertise in React, Angular, Next.js, Nx, and TypeScript.',
    keywords: [
      'IT consulting Belgium',
      'software development',
      'full-stack development',
      'React development',
      'Angular development',
      'Next.js',
      'TypeScript',
      'developer coaching',
      'Belgian tech consulting',
      'quality software',
    ],
    openGraph: {
      locale: 'en_BE',
      siteName: 'Cotersus',
      title: 'Cotersus IT Consulting | Senior Software Delivery',
      description:
        'Belgian IT consulting company for senior software development, technical coaching, and modern web platforms.',
      imageAlt: 'Cotersus Logo',
    },
    twitter: {
      title: 'Cotersus IT Consulting | Senior Software Delivery',
      description:
        'Belgian IT consulting company for senior software development, technical coaching, and modern web platforms.',
      creator: '@robinpel',
      site: '@cotersusIT',
    },
    jsonLd: {
      organizationName: 'Cotersus',
      description:
        'Belgian IT consulting company for senior software development, technical coaching, and modern web platforms.',
      contactType: 'Customer Service',
      availableLanguage: ['en', 'nl'],
      streetAddress: 'Beigemsesteenweg 387',
      locality: 'Beigem',
      postalCode: '1852',
      country: 'BE',
    },
  },
  header: {
    logoAlt: 'Cotersus Logo',
    companyName: 'Cotersus',
    companyTagline: 'IT Consulting',
    themeToggleLabel: 'Toggle theme',
  },
  footer: {
    logoAlt: 'Cotersus Logo',
    companyName: 'Cotersus',
    companyTagline: 'IT Consulting',
    blurb:
      'Senior software development, technical direction, and team coaching for organizations that want to ship and keep their codebase healthy.',
    contactHeading: 'Contact',
    contactCompany: 'Cotersus BV',
    contactAddress: 'Beigemsesteenweg 387, 1852 Beigem, Belgium',
    contactVat: 'VAT: BE 0791.547.318',
    connectHeading: 'Connect',
    privacyLabel: 'Privacy Policy',
    copyrightSuffix: 'All rights reserved.',
    socialLinks: {
      linkedin: 'LinkedIn',
      x: 'X (Twitter)',
      bluesky: 'Bluesky',
    },
  },
  home: {
    hero: {
      eyebrow: 'Cotersus / IT consulting / Belgium',
      title: 'Senior software delivery without the usual drag.',
      description:
        'Cotersus helps teams build products, modernize platforms, and raise engineering quality with hands-on development and clear technical direction.',
      primaryCta: {
        href: 'mailto:info@cotersus.be',
        label: 'Book an intro call',
      },
      secondaryCta: {
        href: '#projects',
        label: 'See recent work',
      },
      cards: {
        featuredBadge: 'Featured project',
        supportingBadge: 'Supporting project',
        platformBadge: 'Platform work',
      },
      highlights: [
        {
          label: 'Focus',
          value: 'Product delivery, consulting, coaching',
        },
        {
          label: 'Stack',
          value: 'Next.js, Angular, TypeScript, Nx',
        },
        {
          label: 'Approach',
          value: 'Clear scope. Clean code. Practical delivery.',
        },
      ],
    },
    capabilities: {
      eyebrow: 'How Cotersus helps',
      title: 'The support you need to ship with confidence.',
      pillars: [
        {
          title: 'Senior engineering',
          body: 'Hands-on delivery for teams that need experienced developers who can move work forward without heavy oversight.',
        },
        {
          title: 'Maintainable systems',
          body: 'Architecture and codebases designed to stay clear as products, teams, and requirements grow.',
        },
        {
          title: 'Embedded coaching',
          body: 'Technical guidance, code review, and team support built into the delivery process.',
        },
      ],
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Recent projects across product, platform, and frontend work.',
      description:
        'A few examples of the work Cotersus has delivered for clients who needed reliable implementation, stronger frontend systems, or a modern web presence.',
      featuredEyebrow: 'Featured project',
      viewProjectLabel: 'View project',
    },
    process: {
      eyebrow: 'Method',
      title: 'A delivery process built to reduce uncertainty.',
      description:
        'The goal is simple: understand the work quickly, build the right thing first, and leave behind a codebase your team can keep moving forward.',
      steps: [
        {
          label: '01',
          title: 'Clarify the scope',
          body: 'We align on goals, constraints, and priorities before implementation starts, so the work stays focused.',
          phase: 'Strategy',
        },
        {
          label: '02',
          title: 'Build what matters first',
          body: 'We focus on the product paths that carry the most business value and shape the technical foundation around them.',
          phase: 'Delivery',
        },
        {
          label: '03',
          title: 'Strengthen the team',
          body: 'Delivery includes documentation, coaching, and code quality practices that keep the product healthy after launch.',
          phase: 'Handoff',
        },
      ],
    },
    technologies: {
      eyebrow: 'Technology baseline',
      title: 'Technologies chosen for real product work.',
      description:
        'Cotersus works with proven frontend and full-stack tools that support fast delivery, maintainable code, and teams that need to keep building after launch.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Need an experienced team to move your project forward?',
      description:
        'Tell us what you are building and where delivery is blocked. We can support implementation, architecture, and technical coaching from kickoff to launch.',
      primaryCta: {
        href: 'mailto:info@cotersus.be',
        label: 'Book an intro call',
      },
      secondaryCta: {
        href: '#projects',
        label: 'See selected work',
      },
    },
  },
  privacy: {
    metadata: {
      title: 'Privacy Policy | Cotersus IT Consulting',
      description: 'Privacy policy for Cotersus IT Consulting.',
    },
    title: 'Privacy Policy',
    lastUpdatedLabel: 'Last updated:',
    intro:
      'At Cotersus BV, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.',
    sections: [
      {
        heading: '1. Information We Collect',
        paragraph: 'We may collect the following types of information:',
        list: [
          'Contact information (name, email address, company name) when you contact us through our social channels',
          'Usage data through analytics (page visits, browser type, device information)',
          'Technical data (IP address, browser type, operating system)',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        paragraph: 'We use the collected information for the following purposes:',
        list: [
          'To respond to your inquiries and provide our services',
          'To improve our website and services',
          'To analyze website traffic and usage patterns',
          'To comply with legal obligations',
        ],
      },
      {
        heading: '3. Cookies and Tracking',
        paragraph: 'We use minimal tracking on our website:',
        list: [
          {
            label: 'Analytics',
            text: 'We use Vercel Analytics and Speed Insights for privacy-friendly performance monitoring',
          },
          {
            label: 'Theme Preference',
            text: 'We store your dark/light mode preference locally in your browser',
          },
        ],
      },
      {
        heading: '4. Data Sharing and Disclosure',
        paragraph:
          'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:',
        list: [
          'With your explicit consent',
          'To comply with legal obligations or respond to legal requests',
          'To protect our rights, privacy, safety, or property',
        ],
      },
      {
        heading: '5. Data Security',
        paragraph:
          'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      },
      {
        heading: '6. Your Rights (GDPR)',
        paragraph:
          'Under the General Data Protection Regulation (GDPR), you have the following rights:',
        list: [
          {
            label: 'Right to access',
            text: 'Request a copy of your personal data',
          },
          {
            label: 'Right to rectification',
            text: 'Request correction of inaccurate data',
          },
          {
            label: 'Right to erasure',
            text: 'Request deletion of your personal data',
          },
          {
            label: 'Right to restrict processing',
            text: 'Request limitation of data processing',
          },
          {
            label: 'Right to data portability',
            text: 'Request transfer of your data',
          },
          {
            label: 'Right to object',
            text: 'Object to processing of your data',
          },
        ],
      },
      {
        heading: '7. Data Retention',
        paragraph:
          'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.',
      },
      {
        heading: '8. International Data Transfers',
        paragraph:
          'Your information may be transferred to and processed in countries other than Belgium. We ensure appropriate safeguards are in place to protect your data in accordance with GDPR requirements.',
      },
      {
        heading: '9. Changes to This Policy',
        paragraph:
          'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
      },
      {
        heading: '10. Contact Us',
        paragraph:
          'If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:',
      },
    ],
    contact: {
      company: 'Cotersus BV',
      addressLine1: 'Beigemsesteenweg 387',
      addressLine2: '1852 Beigem, Belgium',
      vat: 'VAT: BE 0791.547.318',
      emailLabel: 'Email:',
    },
    backToHomeLabel: 'Back to Home',
  },
  projectCopies: {
    'zwem-coach': {
      alt: 'Zwem Coach platform',
      role: 'Analysis • Design • Full-stack Development',
      title: 'Zwem Coach',
      description:
        'Learn to swim crawl or improve your technique under expert guidance from Pieter Timmers and Ward Pellegrims.',
    },
    'ward-pellegrims-coaching': {
      alt: 'Ward Pellegrims Coaching platform',
      role: 'Analysis • Design • Full-stack Development',
      title: 'Ward Pellegrims Coaching',
      description:
        'Professional coaching platform for elite swimming and triathlon athletes with online training programs, technique sessions, and payment integration.',
    },
    'exceptional-kids': {
      alt: 'Exceptional Kids Foundation website',
      role: 'Analysis • Design • Full-stack Development',
      title: 'Exceptional Kids',
      description:
        'Foundation website supporting children with rare genetic disorders, featuring documentary integration, educational resources, and fundraising initiatives.',
    },
    'vs-mediation': {
      alt: 'VS Mediation football agency platform',
      role: 'Frontend Development',
      title: 'VS Mediation',
      description:
        'Modern football agency platform combining legal expertise, international networking, and performance coaching with transparent fee structures.',
    },
    'van-steenbrugge-advocaten': {
      alt: 'Van Steenbrugge Advocaten website',
      role: 'Frontend Development',
      title: 'Van Steenbrugge Advocaten',
      description:
        'Modern website update for Belgian law firm emphasizing professional branding and user experience',
    },
    'jazz-and-mo': {
      alt: 'Jazz&Mo platform',
      role: 'Frontend Development',
      title: 'Jazz&Mo',
      description:
        'Jazz magazine, community site, and music discovery platform where users can contribute content and discover their next favorite artist or album.',
    },
    banakin: {
      alt: 'Banakin charitable fund website',
      role: 'Frontend Development',
      title: 'Banakin',
      description:
        'Charitable fund website managed by King Baudouin Foundation, supporting cancer patients in Belgium, heritage preservation, and global health initiatives.',
    },
    'manage-my-business': {
      alt: 'Manage My Business platform',
      role: 'Frontend Development',
      title: 'Manage My Business',
      description:
        'The Belgian platform for the online incorporation, modification, and dissolution of your company, association, or foundation.',
    },
    stapor: {
      alt: 'Statuten en vertegenwoordigingsbevoegdheden platform',
      role: 'Frontend Development',
      title: 'Statuten en vertegenwoordigingsbevoegdheden',
      description:
        'The statutory database that contains all versions of the articles of association of legal entities, resulting from notarial acts executed in Belgium, from the incorporation of the legal entity up to the very last update of the articles of association.',
    },
    'zvc-goldgetters': {
      alt: 'ZVC Goldgetters futsal team website',
      role: 'Analysis • Design • Full-stack Development',
      title: 'ZVC Goldgetters',
      description:
        'Official website for ZVC Goldgetters futsal team, featuring team information, match schedules, player profiles, statistics, and more.',
    },
  },
} as const;

export default dictionary;
