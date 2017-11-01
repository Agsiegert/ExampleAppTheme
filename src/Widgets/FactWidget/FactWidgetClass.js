import { registerTextExtract } from 'utils/text_extract_registry';

const FactWidget = Scrivito.provideWidgetClass('FactWidget', {
  attributes: {
    key: 'string',
    value: 'string',
  },
});

registerTextExtract('FactWidget', [
  { attribute: 'key', type: 'string' },
  { attribute: 'value', type: 'string' },
]);

export default FactWidget;
