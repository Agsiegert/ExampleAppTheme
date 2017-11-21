Scrivito.provideEditingConfig('TickListItemWidget', {
  title: 'Tick List Widget Item',
  description: 'A tick list item',
  attributesConfig: {
    statement: {
      title: 'Statement',
    },
  },
  generalProperties: [
    'statement',
  ],
  titleForContent: widget => widget.get('statement'),
});
