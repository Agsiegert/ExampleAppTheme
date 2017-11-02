import addressWidgetIcon from 'assets/images/address_widget.svg';

Scrivito.provideEditingConfig('AddressWidget', {
  title: 'Address',
  description: 'A widget, which shows an address.',
  thumbnail: `/${addressWidgetIcon}`,
  attributesConfig: {
    address: {
      title: 'Address',
      description: 'The actual address.',
    },
    listItems: {
      title: 'Address List Items',
      description: 'E.g. phone numbers.',
    },
    showBorderBottom: {
      title: 'Border Bottom',
      description: 'Should a border be shown at the bottom? Default: no.',
    },
    showLogo: {
      title: 'Show Logo',
      description: 'Should the logo be shown? Default: yes',
    },
  },
  generalProperties: [
    'showLogo',
    'address',
    'listItems',
    'showBorderBottom',
  ],
});
