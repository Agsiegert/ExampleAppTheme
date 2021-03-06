
Scrivito.provideComponent('PricingSpecWidget', ({ widget }) =>
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
