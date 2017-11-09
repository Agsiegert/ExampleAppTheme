import { registerTextExtract } from 'utils/textExtractRegistry';

const TableRowWidget = Scrivito.provideWidgetClass('TableRowWidget', {
  attributes: {
    feature: 'string',
    basicFeature: ['widgetlist', { only: ['IconWidget', 'TextWidget'] }],
    teamFeature: ['widgetlist', { only: ['IconWidget', 'TextWidget'] }],
    corporateFeature: ['widgetlist', { only: ['IconWidget', 'TextWidget'] }],
  },
  onlyInside: 'TableWidget',
});

registerTextExtract('TableRowWidget', [
  { attribute: 'feature', type: 'string' },
  { attribute: 'basicFeature', type: 'widgetlist' },
  { attribute: 'teamFeature', type: 'widgetlist' },
  { attribute: 'corporateFeature', type: 'widgetlist' },
]);

export default TableRowWidget;
