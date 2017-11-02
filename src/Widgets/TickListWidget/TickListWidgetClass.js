import { registerTextExtract } from 'utils/text_extract_registry';

const TickListWidget = Scrivito.provideWidgetClass('TickListWidget', {
  attributes: {
    items: ['widgetlist', { only: 'TickListItemWidget' }],
  },
});

registerTextExtract('TickListWidget', [
  { attribute: 'items', type: 'widgetlist' },
]);

export default TickListWidget;
