import { registerTextExtract } from 'utils/text_extract_registry';

const ColumnContainerWidget = Scrivito.provideWidgetClass('ColumnContainerWidget', {
  attributes: {
    columns: ['widgetlist', { only: 'ColumnWidget' }],
    verticallyAligned: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('ColumnContainerWidget', [
  { attribute: 'columns', type: 'widgetlist' },
]);

export default ColumnContainerWidget;
