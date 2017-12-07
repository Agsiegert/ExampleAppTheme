import { registerTextExtract } from 'utils/textExtractRegistry';

const TableWidget = Scrivito.provideWidgetClass('TableWidget', {
  attributes: {
    rows: ['widgetlist', { only: 'TableRowWidget' }],
    summaryRows: ['widgetlist', { only: 'TableRowWidget' }],
    featureHeadline: 'string',
    basicPlanHeadline: 'string',
    teamPlanHeadline: 'string',
    corporatePlanHeadline: 'string',
  },
});

registerTextExtract('TableWidget', [
  { attribute: 'rows', type: 'widgetlist' },
]);

export default TableWidget;
