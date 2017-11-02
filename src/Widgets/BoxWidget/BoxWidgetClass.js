import { registerTextExtract } from 'utils/text_extract_registry';

const BoxWidget = Scrivito.provideWidgetClass('BoxWidget', {
  attributes: {
    body: 'widgetlist',
    useOffset: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('BoxWidget', [
  { attribute: 'body', type: 'widgetlist' },
]);

export default BoxWidget;