import { registerTextExtract } from 'utils/text_extract_registry';

const TableWidget = Scrivito.provideWidgetClass('TableWidget', {
  attributes: {
    rows: ['widgetlist', { only: 'TableRowWidget' }],
    featureHeadline: 'string',
    basicPlanHeadline: 'string',
    teamPlanHeadline: 'string',
    corporatePlanHeadline: 'string',
    pricingRow: 'string',
    currency: 'string',
    basicPlanPrice: 'string',
    teamPlanPrice: 'string',
    corporatePlanPrice: 'string',
    basicPlanPeriod: 'string',
    teamPlanPeriod: 'string',
    corporatePlanPeriod: 'string',
  },
});

registerTextExtract('TableWidget', [
  { attribute: 'rows', type: 'widgetlist' },
]);

export default TableWidget;
