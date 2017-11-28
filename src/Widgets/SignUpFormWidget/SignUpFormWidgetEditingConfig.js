import signUpFormWidgetIcon from 'assets/images/sign_up_form_widget.svg';

Scrivito.provideEditingConfig('SignUpFormWidget', {
  title: 'Sign Up Form',
  description: 'A widget with sign up form.',
  thumbnail: `/${signUpFormWidgetIcon}`,
  attributes: {
    buttonText: {
      title: 'Submit button text',
      description: 'Default: Sign up now',
    },
    isTransparent: {
      title: 'Background color',
      description: 'Default: White',
      values: [
        { value: 'no', title: 'White' },
        { value: 'yes', title: 'Transparent' },
      ],
    },
  },
  properties: [
    'buttonText',
    'isTransparent',
  ],
});
