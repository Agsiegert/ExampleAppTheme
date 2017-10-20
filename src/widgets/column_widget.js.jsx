import { registerTextExtract } from 'utils/text_extract_registry';

const ColumnWidget = Scrivito.createWidgetClass({
  name: 'ColumnWidget',
  onlyInside: 'ColumnsWidget',
  attributes: {
    colSize: 'integer',
    content: 'widgetlist',
  },
});

registerTextExtract('ColumnWidget', [
  { attribute: 'content', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(ColumnWidget, {
  title: 'Column',
  description: 'A column widget.',
  attributesConfig: {
    colSize: {
      title: 'Column Size',
      description: 'How big is this column?',
    },
  },
  generalProperties: [
    'colSize',
  ],
});

export default ColumnWidget;
