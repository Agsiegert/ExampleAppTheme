import { registerTextExtract } from 'utils/text_extract_registry';
import textExtractFromHtml from 'utils/text_extract_from_html';
import truncate from 'lodash.truncate';

const AddressListItemWidget = Scrivito.createWidgetClass({
  name: 'AddressListItemWidget',
  onlyInside: 'AddressWidget',
  attributes: {
    key: 'string',
    value: 'html',
  },
});

registerTextExtract('AddressListItemWidget', [
  { attribute: 'key', type: 'string' },
  { attribute: 'value', type: 'html' },
]);


Scrivito.provideEditingConfig(AddressListItemWidget, {
  title: 'Address List Item',
  description: 'List Items for an Address Widget.',
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
  generalProperties: [
    'key',
    'value',
  ],
  titleForContent:
    widget => `${widget.get('key')} ${truncate(textExtractFromHtml(widget.get('value')))}`,
});

export default AddressListItemWidget;
