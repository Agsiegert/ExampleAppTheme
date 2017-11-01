import { registerTextExtract } from 'utils/text_extract_registry';

const ColumnWidget = Scrivito.createWidgetClass({
  name: 'ColumnWidget',
  onlyInside: 'ColumnContainerWidget',
  attributes: {
    colSize: 'integer',
    content: 'widgetlist',
  },
});

registerTextExtract('ColumnWidget', [
  { attribute: 'content', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig('ColumnWidget', {
  title: 'Column',
  description: 'A column widget.',
});

export default ColumnWidget;
