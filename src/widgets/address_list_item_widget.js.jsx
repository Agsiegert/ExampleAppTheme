const AddressListItemWidget = Scrivito.createWidgetClass({
  name: 'AddressListItemWidget',
  onlyInside: 'AddressWidget',
  attributes: {
    key: 'string',
    value: 'html',
  },
});

Scrivito.provideEditingConfig(AddressListItemWidget, {
  title: 'Address List Item',
  description: 'A address list item',
  attributesConfig: {
    key: {
      title: 'Key',
      description: 'E.g. Phone:',
    },
    value: {
      title: 'Value',
      description: 'E.g. <a href="tel:+8001233567">800 123 3567</a>',
    },
  },
});

export default AddressListItemWidget;