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
  initialContent: {
    statement: 'Lorem ipsum',
  },
  titleForContent: widget => widget.get('statement'),
});
