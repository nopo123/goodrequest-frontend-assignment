import type { TranslationResource } from '../../../types/translation';

export const en: TranslationResource = {
  common: {
    appName: 'Good boy',
    back: 'Back',
    continue: 'Continue',
    optional: 'Optional',
    skipToContent: 'Skip to content',
    backToForm: 'Back to the form',
  },
  nav: {
    label: 'Main navigation',
    contact: 'Contact',
    about: 'About',
  },
  stepper: {
    label: 'Form progress',
    shelter: 'Choose a shelter',
    donor: 'Your details',
    confirmation: 'Confirmation',
    hasError: 'contains an error',
  },
  shelterStep: {
    title: 'Choose how you would like to help',
    typeSpecific: 'Donate to a specific shelter',
    typeGeneral: 'Donate to the whole foundation',
    typeLegend: 'Type of donation',
    projectSectionTitle: 'About the project',
    shelterLabel: 'Shelter',
    shelterPlaceholder: 'Pick a shelter from the list',
    shelterEmpty: 'No shelter matches your search',
    shelterLoading: 'Loading shelters',
    shelterError: 'The list of shelters could not be loaded',
    amountLegend: 'The amount I want to donate',
    amountInputLabel: 'Custom amount in euros',
    presetLabel: 'Donate {{amount}}',
  },
  donorStep: {
    title: 'We need a few details from you',
    sectionTitle: 'About you',
    firstName: 'First name',
    firstNamePlaceholder: 'Enter your first name',
    lastName: 'Last name',
    lastNamePlaceholder: 'Enter your last name',
    email: 'Email address',
    emailPlaceholder: 'Enter your email',
    phone: 'Phone number',
    phonePlaceholder: '123 321 123',
    phoneCountryLabel: 'Country code',
    donorTitle: 'Donor {{index}}',
    addDonor: 'Add another donor',
    removeDonor: 'Remove donor {{index}}',
  },
  summaryStep: {
    title: 'Check the details you entered',
    sectionTitle: 'Summary',
    donationType: 'Type of donation',
    donationTypeGeneral: 'Financial donation to the whole foundation',
    donationTypeSpecific: 'Financial donation to a specific shelter',
    shelter: 'Shelter',
    amount: 'Donation amount',
    fullName: 'Full name',
    email: 'Email',
    phone: 'Phone number',
    consent: 'I agree with the processing of my personal data',
    submit: 'Submit the form',
    notFilled: 'Not filled in',
  },
  success: {
    title: 'Thank you for your donation',
    description: 'Your support will help the dogs who need it the most',
    redirect: 'Redirecting you to the form in {{seconds}} s',
    newDonation: 'Donate again',
  },
  errors: {
    submitGeneric: 'Please try again in a moment',
  },
  notFound: {
    title: 'This page does not exist',
    description:
      'We could not find that address. The link may be wrong or the page has moved.',
  },
  errorPage: {
    title: 'Something went wrong',
    description:
      'We could not render this page. Please try again, none of your details were submitted.',
    retry: 'Try again',
    digest: 'Error code: {{digest}}',
    fatalTitle: 'The application failed to start',
    fatalDescription: 'Please reload the page. If the problem persists, get in touch at',
  },
  validation: {
    firstName: {
      min: 'First name must be at least 2 characters',
      max: 'First name can be at most 20 characters',
    },
    lastName: {
      required: 'Last name is required',
      min: 'Last name must be at least 2 characters',
      max: 'Last name can be at most 30 characters',
    },
    email: {
      required: 'Email is required',
      invalid: 'Enter a valid email address',
    },
    phone: {
      required: 'Phone number is required',
      invalid: 'Enter a valid Slovak or Czech number',
    },
    consent: {
      required: 'We cannot process the donation without your consent',
    },
    amount: {
      required: 'Choose the donation amount',
      invalid: 'Enter the amount as a number',
      min: 'The minimum amount is {{min}} €',
      max: 'The maximum amount is {{max}} €',
    },
    shelter: {
      required: 'Choose the shelter you want to support',
    },
  },
  contact: {
    title: 'Contact',
    emailTitle: 'Email',
    emailSubtitle: 'Our friendly team is here to help',
    emailValue: 'hello@goodrequest.com',
    officeTitle: 'Office',
    officeSubtitle: 'Come say hello at our office HQ',
    officeValue: 'Obchodná 3D, 010 08 Žilina, Slovakia',
    phoneTitle: 'Phone',
    phoneSubtitle: 'Mon-Fri from 8am to 5pm',
    phoneValue: '+421 911 750 750',
    imageAlt: 'Golden retriever on a beach at sunset',
  },
  about: {
    title: 'About',
    intro:
      'The Good Boy foundation is dedicated to improving the lives of dogs in Žilina, Slovakia. We rescue abandoned, abused and homeless dogs and give them the medical care, shelter and love they deserve. Our mission is to give these loyal companions a second chance at life by finding them a loving home. Beyond rescue and rehabilitation, we also promote responsible pet ownership and animal welfare through educational and community programmes.',
    outro:
      'Our work is made possible by passionate volunteers, generous donors and a community that cares deeply about animal welfare. We also run spaying and neutering initiatives to tackle the stray dog problem and secure a long-term impact. At the Good Boy foundation we believe every dog deserves a safe, loving home and a happy life. Join us and help us make a change – through volunteering, donating or adopting a furry friend. Together we can build a better future for the dogs of Žilina.',
    totalRaised: 'Total amount raised',
    contributors: 'Number of donors',
    statsError: 'The fundraising data could not be loaded',
  },
  meta: {
    siteName: 'Good boy Foundation',
    thankYouTitle: 'Thank you',
    thankYouDescription: 'Confirmation of your donation to the Good Boy foundation',
    shelterStepTitle: 'Choose how you want to help',
    donorStepTitle: 'Your personal details',
    summaryStepTitle: 'Check the details you entered',
    donateDescription:
      'Donate to a specific shelter or to the whole Good Boy foundation and help dogs in Žilina find a home',
    donorStepDescription:
      "Enter the donor's contact details so we can send a confirmation of your donation to the Good Boy foundation",
    summaryStepDescription:
      'Check the type of help, the donation amount and your details before submitting to the Good Boy foundation',
    contactTitle: 'Contact',
    contactDescription:
      'Contact details of the Good Boy foundation – email, address and phone',
    aboutTitle: 'About',
    aboutDescription:
      'The Good Boy foundation rescues abandoned and abused dogs in Žilina and finds them a loving home',
  },
  imageAlt: {
    dogOnBeach: 'A cocker spaniel puppy sitting on a sandy beach',
  },
};
