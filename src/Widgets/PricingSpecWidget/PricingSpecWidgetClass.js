import { registerTextExtract } from 'utils/text_extract_registry';

const PricingSpecWidget = Scrivito.provideWidgetClass('PricingSpecWidget', {
  onlyInside: 'PricingWidget',
  attributes: {
    variable: 'string',
    unit: 'string',
  },
});

registerTextExtract('PricingSpecWidget', [
  { attribute: 'variable', type: 'string' },
  { attribute: 'unit', type: 'string' },
]);

export default PricingSpecWidget;
