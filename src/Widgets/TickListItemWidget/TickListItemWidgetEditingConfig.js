Scrivito.provideEditingConfig('TickListItemWidget', {
  title: 'Tick List Widget Item',
  description: 'A tick list item',
  attributes: {
    statement: {
      title: 'Statement',
    },
  },
  properties: [
    'statement',
  ],
  titleForContent: widget => widget.get('statement'),
});
