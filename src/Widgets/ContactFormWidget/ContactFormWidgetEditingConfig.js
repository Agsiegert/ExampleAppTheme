import contactFormWidgetIcon from 'assets/images/contact_form_widget.svg';

Scrivito.provideEditingConfig('ContactFormWidget', {
  title: 'Contact Form',
  description: 'A widget with contact form.',
  thumbnail: `/${contactFormWidgetIcon}`,
  attributesConfig: {
    agreementText: {
      title: 'Agreement text',
    },
    buttonText: {
      title: 'Submit button text',
      description: 'Default: send message',
    },
  },
  generalProperties: [
    'agreementText',
    'buttonText',
  ],
});
