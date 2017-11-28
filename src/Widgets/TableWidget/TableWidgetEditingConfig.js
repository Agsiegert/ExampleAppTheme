import tableWidgetIcon from 'assets/images/table_widget.svg';

Scrivito.provideEditingConfig('TableWidget', {
  title: 'Table',
  description: 'A table widget.',
  thumbnail: `/${tableWidgetIcon}`,
  attributes: {
    currency: {
      title: 'Currency',
      description: 'E.g. € or $.',
    },
    rows: {
      title: 'Feature rows',
    },
  },
  properties: [
    'currency',
    'rows',
  ],
});
