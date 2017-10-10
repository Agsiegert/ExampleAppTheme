/* eslint no-console: 0 */

import { decode } from 'ent';
import striptags from 'striptags';
import { lookupTextExtract } from 'utils/text_extract_registry';

function textExtractFromObj(obj) {
  return textExtractFromItem(obj);
}

function textExtractFromItem(objOrWidget) {
  const attributes = lookupTextExtract(objOrWidget.objClass());

  if (!attributes || !attributes.length) {
    return '';
  }

  const textExtractValues = attributes.map(({ attribute, type }) => {
    const value = objOrWidget.get(attribute);

    switch (type) {
      case 'html': return textExtractFromHtml(value);
      case 'string': return value;
      case 'widgetlist': return textExtractFromWidgetlist(value);
      default: {
        console.warn('[textExtractFromObj] type is not (yet?) support:', type);
        return '';
      }
    }
  });

  return arrayToString(textExtractValues);
}

function textExtractFromHtml(html) {
  return decode(striptags(html));
}

function textExtractFromWidgetlist(widgetlist) {
  const textExtractValues = widgetlist.map(widget => textExtractFromItem(widget));
  return arrayToString(textExtractValues);
}

function arrayToString(array) {
  return array
    .map(value => value.trim())
    .filter(value => value)
    .join('\n');
}

export default textExtractFromObj;
