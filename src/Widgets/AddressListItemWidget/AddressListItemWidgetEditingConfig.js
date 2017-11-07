import textExtractFromHtml from 'utils/text_extract_from_html';
import truncate from 'lodash/truncate';

Scrivito.provideEditingConfig('AddressListItemWidget', {
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
