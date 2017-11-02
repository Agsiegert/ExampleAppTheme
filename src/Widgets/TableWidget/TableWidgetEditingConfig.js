import tableWidgetIcon from 'assets/images/table_widget.svg';

Scrivito.provideEditingConfig('TableWidget', {
  title: 'Table',
  description: 'A table widget.',
  thumbnail: `/${tableWidgetIcon}`,
  attributesConfig: {
    currency: {
      title: 'Currency symbol',
      description: 'The symbol of the currency. E.g. € or $.',
    },
    rows: {
      title: 'Rows',
      description: 'Rows of the table describing each one feature and its availability in plans.',
    },
  },
  generalProperties: [
    'currency',
    'rows',
  ],
});
