import signUpFormWidgetIcon from 'assets/images/sign_up_form_widget.svg';

Scrivito.provideEditingConfig('SignUpFormWidget', {
  title: 'Sign Up Form',
  description: 'A widget with sign up form.',
  thumbnail: `/${signUpFormWidgetIcon}`,
  attributesConfig: {
    buttonText: {
      title: 'Button Text',
      description: 'What should the submit button say? Default: Sign up now',
    },
    isTransparent: {
      title: 'Is Transparent?',
      description: 'Should this sign up form be transparent? Default: no',
    },
  },
  generalProperties: [
    'buttonText',
    'isTransparent',
  ],
});
