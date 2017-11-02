Scrivito.provideEditingConfig('TickListItemWidget', {
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
