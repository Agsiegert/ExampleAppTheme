import LandingPage from './LandingPage';

export default Scrivito.provideComponent(LandingPage, ({ page }) =>
  <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
);
