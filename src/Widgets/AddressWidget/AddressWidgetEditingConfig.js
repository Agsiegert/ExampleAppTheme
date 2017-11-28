import addressWidgetIcon from 'assets/images/address_widget.svg';

Scrivito.provideEditingConfig('AddressWidget', {
  title: 'Address',
  description: 'A widget, which shows an address.',
  thumbnail: `/${addressWidgetIcon}`,
  attributes: {
    address: {
      title: 'Address',
      description: 'The actual address.',
    },
    listItems: {
      title: 'Address list items',
      description: 'E.g. phone numbers.',
    },
    showBorderBottom: {
      title: 'Show border at the bottom?',
      description: 'Default: No',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
    showLogo: {
      title: 'Show brand logo?',
      description: 'Default: Yes',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
  },
  properties: [
    'showLogo',
    'address',
    'listItems',
    'showBorderBottom',
  ],
});
