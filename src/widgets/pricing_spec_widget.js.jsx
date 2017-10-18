import { registerTextExtract } from 'utils/text_extract_registry';

const PricingSpecWidget = Scrivito.createWidgetClass({
  onlyInside: 'PricingWidget',
  name: 'PricingSpecWidget',
  attributes: {
    variable: 'string',
    unit: 'string',
  },
});

registerTextExtract('PricingSpecWidget', [
  { attribute: 'variable', type: 'string' },
  { attribute: 'unit', type: 'string' },
]);

Scrivito.provideEditingConfig(PricingSpecWidget, {
  title: 'PricingSpec',
  description: 'A Pricing Spec - Can only live inside a PricingWidget.',
});

Scrivito.provideComponent(PricingSpecWidget, ({ widget }) =>
  <div className="spec">
    <Scrivito.ContentTag
      content={ widget }
      attribute="variable"
      className="variable"
      tag="span"
    />
    <Scrivito.ContentTag content={ widget } attribute="unit" tag="span" />
  </div>
);

export default PricingSpecWidget;
