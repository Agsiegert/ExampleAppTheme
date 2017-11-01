import { registerTextExtract } from 'utils/text_extract_registry';

const BoxWidget = Scrivito.createWidgetClass({
  name: 'BoxWidget',
  attributes: {
    body: 'widgetlist',
    useOffset: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('BoxWidget', [
  { attribute: 'body', type: 'widgetlist' },
]);

export default BoxWidget;
