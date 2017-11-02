import tickListWidgetIcon from 'assets/images/tick_list_widget.svg';

Scrivito.provideEditingConfig('TickListWidget', {
  title: 'Tick List',
  description: 'A list of checked statements.',
  thumbnail: `/${tickListWidgetIcon}`,
  attributesConfig: {
    items: {
      title: 'Items',
      description: 'Add tick list items to display.',
    },
  },
  generalProperties: [
    'items',
  ],
});
