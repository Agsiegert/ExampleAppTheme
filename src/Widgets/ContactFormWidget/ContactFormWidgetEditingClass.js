import contactFormWidgetIcon from 'assets/images/contact_form_widget.svg';

Scrivito.provideEditingConfig('ContactFormWidget', {
  title: 'Contact Form',
  description: 'A widget with contact form.',
  thumbnail: `/${contactFormWidgetIcon}`,
  attributesConfig: {
    agreementText: {
      title: 'Agreement Text',
      description: 'What should the agreement say?',
    },
    buttonText: {
      title: 'Button Text',
      description: 'What should the submit button say? Default: send message',
    },
  },
  generalProperties: [
    'agreementText',
    'buttonText',
  ],
});
