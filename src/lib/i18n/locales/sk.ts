export const sk = {
  common: {
    appName: 'Good boy',
    back: 'Späť',
    continue: 'Pokračovať',
    optional: 'Nepovinné',
    skipToContent: 'Preskočiť na obsah',
    backToForm: 'Späť na formulár',
  },
  nav: {
    label: 'Hlavná navigácia',
    contact: 'Kontakt',
    about: 'O projekte',
  },
  stepper: {
    label: 'Priebeh formulára',
    shelter: 'Výber útulku',
    donor: 'Osobné údaje',
    confirmation: 'Potvrdenie',
    hasError: 'obsahuje chybu',
  },
  shelterStep: {
    title: 'Vyberte si možnosť, ako chcete pomôcť',
    typeSpecific: 'Prispieť konkrétnemu útulku',
    typeGeneral: 'Prispieť celej nadácii',
    typeLegend: 'Forma pomoci',
    projectSectionTitle: 'O projekte',
    shelterLabel: 'Útulok',
    shelterPlaceholder: 'Vyberte útulok zo zoznamu',
    shelterEmpty: 'Žiadny útulok nezodpovedá hľadaniu',
    shelterLoading: 'Načítavam útulky',
    shelterError: 'Zoznam útulkov sa nepodarilo načítať',
    amountLegend: 'Suma, ktorou chcem prispieť',
    amountInputLabel: 'Vlastná suma v eurách',
    presetLabel: 'Prispieť {{amount}}',
  },
  donorStep: {
    title: 'Potrebujeme od Vás zopár informácií',
    sectionTitle: 'O vás',
    firstName: 'Meno',
    firstNamePlaceholder: 'Zadajte Vaše meno',
    lastName: 'Priezvisko',
    lastNamePlaceholder: 'Zadajte Vaše priezvisko',
    email: 'E-mailová adresa',
    emailPlaceholder: 'Zadajte Váš e-mail',
    phone: 'Telefónne číslo',
    phonePlaceholder: '123 321 123',
    phoneCountryLabel: 'Predvoľba krajiny',
    donorTitle: 'Darca {{index}}',
    addDonor: 'Pridať ďalšieho darcu',
    removeDonor: 'Odstrániť darcu {{index}}',
  },
  summaryStep: {
    title: 'Skontrolujte si zadané údaje',
    sectionTitle: 'Zhrnutie',
    donationType: 'Forma pomoci',
    donationTypeGeneral: 'Finančný príspevok celej nadácii',
    donationTypeSpecific: 'Finančný príspevok konkrétnemu útulku',
    shelter: 'Útulok',
    amount: 'Suma príspevku',
    fullName: 'Meno a priezvisko',
    email: 'E-mail',
    phone: 'Telefónne číslo',
    consent: 'Súhlasím so spracovaním mojich osobných údajov',
    submit: 'Odoslať formulár',
    notFilled: 'Nevyplnené',
  },
  success: {
    title: 'Ďakujeme za Váš príspevok',
    description: 'Vaša podpora pomôže psom, ktorí to najviac potrebujú',
    redirect: 'Presmerujeme Vás na formulár za {{seconds}} s',
    newDonation: 'Prispieť znova',
  },
  errors: {
    submitGeneric: 'Skúste to prosím o chvíľu znova',
  },
  notFound: {
    title: 'Táto stránka neexistuje',
    description:
      'Adresu sme nenašli. Možno je v odkaze chyba alebo sa stránka presunula.',
  },
  errorPage: {
    title: 'Niečo sa pokazilo',
    description:
      'Stránku sa nepodarilo zobraziť. Skúste to prosím znova, vaše údaje sme nikam neposlali.',
    retry: 'Skúsiť znova',
    digest: 'Kód chyby: {{digest}}',
    fatalTitle: 'Aplikáciu sa nepodarilo spustiť',
    fatalDescription: 'Skúste stránku obnoviť. Ak problém pretrvá, ozvite sa nám na',
  },
  validation: {
    firstName: {
      min: 'Meno musí mať aspoň 2 znaky',
      max: 'Meno môže mať najviac 20 znakov',
    },
    lastName: {
      required: 'Priezvisko je povinné',
      min: 'Priezvisko musí mať aspoň 2 znaky',
      max: 'Priezvisko môže mať najviac 30 znakov',
    },
    email: {
      required: 'E-mail je povinný',
      invalid: 'Zadajte e-mail v platnom tvare',
    },
    phone: {
      required: 'Telefónne číslo je povinné',
      invalid: 'Zadajte platné slovenské alebo české číslo',
    },
    consent: {
      required: 'Bez súhlasu nevieme príspevok spracovať',
    },
    amount: {
      required: 'Zvoľte výšku príspevku',
      invalid: 'Zadajte sumu ako číslo',
      min: 'Minimálna suma je {{min}} €',
      max: 'Maximálna suma je {{max}} €',
    },
    shelter: {
      required: 'Vyberte si útulok, ktorému chcete prispieť',
    },
  },
  contact: {
    title: 'Kontakt',
    emailTitle: 'Email',
    emailSubtitle: 'Náš tím Vám rád pomôže',
    emailValue: 'hello@goodrequest.com',
    officeTitle: 'Office',
    officeSubtitle: 'Zastavte sa u nás v kancelárii',
    officeValue: 'Obchodná 3D, 010 08 Žilina, Slovakia',
    phoneTitle: 'Phone',
    phoneSubtitle: 'Pondelok až piatok, 8:00 – 17:00',
    phoneValue: '+421 911 750 750',
    imageAlt: 'Zlatý retríver na pláži pri západe slnka',
  },
  about: {
    title: 'O projekte',
    intro:
      'Nadácia Good Boy sa venuje zlepšovaniu života psov v Žiline na Slovensku. Zachraňujeme opustené, týrané a bezdomovské psy, poskytujeme im lekársku starostlivosť, útočisko a lásku, ktorú si zaslúžia. Naším poslaním je dať týmto verným spoločníkom druhú šancu na život tým, že im nájdeme milujúci domov. Okrem záchrany a rehabilitácie sa zameriavame aj na podporu zodpovedného vlastníctva zvierat a ochrany zvierat prostredníctvom vzdelávacích a komunitných programov.',
    outro:
      'Naša práca je možná vďaka podpore vášnivých dobrovoľníkov, štedrých darcov a komunity, ktorá sa hlboko stará o dobro zvierat. Organizujeme aj kastračné a sterilizačné iniciatívy, aby sme riešili problém túlavých psov a zabezpečili dlhodobý vplyv. V nadácii Good Boy veríme, že každý pes si zaslúži bezpečný, milujúci domov a šťastný život. Pridajte sa k nám a pomôžte nám robiť zmeny – či už dobrovoľníctvom, darovaním alebo adopciou chlpatého priateľa. Spoločne môžeme vytvoriť lepšiu budúcnosť pre psy v Žiline.',
    totalRaised: 'Celková vyzbieraná hodnota',
    contributors: 'Počet darcov',
    statsError: 'Údaje o zbierke sa nepodarilo načítať',
  },
  meta: {
    shelterStepTitle: 'Vyberte si, ako chcete pomôcť',
    donorStepTitle: 'Vaše osobné údaje',
    summaryStepTitle: 'Skontrolujte si zadané údaje',
    donateDescription:
      'Prispejte konkrétnemu útulku alebo celej nadácii Good Boy a pomôžte psom v Žiline nájsť domov',
    donorStepDescription:
      'Zadajte kontaktné údaje darcu, aby sme vám mohli poslať potvrdenie o príspevku nadácii Good Boy',
    summaryStepDescription:
      'Skontrolujte formu pomoci, výšku príspevku a svoje údaje pred odoslaním nadácii Good Boy',
    contactTitle: 'Kontakt',
    contactDescription: 'Kontaktné údaje nadácie Good Boy – e-mail, adresa a telefón',
    aboutTitle: 'O projekte',
    aboutDescription:
      'Nadácia Good Boy zachraňuje opustené a týrané psy a hľadá im milujúci domov',
  },
  imageAlt: {
    dogOnBeach: 'Šteňa kokršpaniela sediace na piesočnatej pláži',
  },
} as const;
