import Homepage from './Homepage';

export default Scrivito.provideComponent(Homepage, ({ page }) =>
  <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
);
