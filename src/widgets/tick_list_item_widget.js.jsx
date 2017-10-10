const TickListItemWidget = Scrivito.createWidgetClass({
  name: 'TickListItemWidget',
  attributes: {
    statement: 'string',
  },
  onlyInside: 'TickListWidget',
});

Scrivito.provideEditingConfig(TickListItemWidget, {
  title: 'Tick List Widget Item',
  description: 'A tick list item',
  attributesConfig: {
    statement: {
      title: 'Statement',
      description: 'The statement of this tick list item.',
    },
  },
  titleForContent: widget => widget.get('statement'),
});

export default TickListItemWidget;
