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
});

Scrivito.provideComponent(PricingSpecWidget, ({ widget }) =>
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
