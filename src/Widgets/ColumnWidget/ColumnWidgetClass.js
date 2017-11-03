import { registerTextExtract } from 'utils/text_extract_registry';

const ColumnWidget = Scrivito.provideWidgetClass('ColumnWidget', {
  onlyInside: 'ColumnContainerWidget',
  attributes: {
    colSize: 'integer',
    content: 'widgetlist',
  },
});

registerTextExtract('ColumnWidget', [
  { attribute: 'content', type: 'widgetlist' },
]);

export default ColumnWidget;
