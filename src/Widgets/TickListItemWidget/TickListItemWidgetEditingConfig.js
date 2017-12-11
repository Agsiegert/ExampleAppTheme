Scrivito.provideEditingConfig('TickListItemWidget', {
  title: 'Tick List Item',
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
