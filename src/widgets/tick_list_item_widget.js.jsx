import { registerTextExtract } from 'utils/text_extract_registry';

const TickListItemWidget = Scrivito.createWidgetClass({
  name: 'TickListItemWidget',
  attributes: {
    statement: 'string',
  },
  onlyInside: 'TickListWidget',
});

registerTextExtract('TickListItemWidget', [
  { attribute: 'statement', type: 'string' },
]);

Scrivito.provideEditingConfig(TickListItemWidget, {
  title: 'Tick List Widget Item',
  description: 'A tick list item',
  attributesConfig: {
    statement: {
      title: 'Statement',
      description: 'The statement of this tick list item.',
    },
  },
  generalProperties: [
    'statement',
  ],
  titleForContent: widget => widget.get('statement'),
});

export default TickListItemWidget;
