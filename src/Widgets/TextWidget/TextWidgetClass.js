import { registerTextExtract } from 'utils/text_extract_registry';

const TextWidget = Scrivito.provideWidgetClass('TextWidget', {
  attributes: {
    text: 'html',
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
  },
});

registerTextExtract('TextWidget', [
  { attribute: 'text', type: 'html' },
]);

export default TextWidget;
