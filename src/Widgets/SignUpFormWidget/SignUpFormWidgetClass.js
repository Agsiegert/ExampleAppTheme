import { registerTextExtract } from 'utils/textExtractRegistry';

const SignUpFormWidget = Scrivito.provideWidgetClass('SignUpFormWidget', {
  attributes: {
    title: 'string',
    buttonText: 'string',
    isTransparent: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('SignUpFormWidget', [
  { attribute: 'title', type: 'string' },
]);

export default SignUpFormWidget;
