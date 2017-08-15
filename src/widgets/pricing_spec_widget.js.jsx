const PricingSpecWidget = Scrivito.createWidgetClass({
  onlyInside: 'PricingWidget',
  name: 'PricingSpecWidget',
  attributes: {
    variable: 'string',
    unit: 'string',
  },
});

Scrivito.provideUiConfig(PricingSpecWidget, {
  title: 'PricingSpec',
  description: 'A Pricing Spec - Can only live inside a PricingWidget',
  attributes: {
    variable: {
      title: 'Variable',
      description: 'The variable of the spec (e.g. 10 or 24/7)',
    },
    unit: {
      title: 'Unit',
      description: 'The unit of the variable (e.g. projects or images)',
    },
  },
});

Scrivito.provideComponent(PricingSpecWidget, widget =>
  <div className="spec">
    <Scrivito.React.Content
      content={ widget }
      attribute="variable"
      className="variable"
      tag="span"
    />
    <Scrivito.React.Content content={ widget } attribute="unit" tag="span" />
  </div>
);

export default PricingSpecWidget;
