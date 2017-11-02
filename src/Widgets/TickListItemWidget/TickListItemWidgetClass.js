import { registerTextExtract } from 'utils/text_extract_registry';

const TickListItemWidget = Scrivito.provideWidgetClass('TickListItemWidget', {
  attributes: {
    statement: 'string',
  },
  onlyInside: 'TickListWidget',
});

registerTextExtract('TickListItemWidget', [
  { attribute: 'statement', type: 'string' },
]);

export default TickListItemWidget;
