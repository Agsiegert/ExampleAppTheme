import {
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
} from './_default_page_attributes';

const LandingPage = Scrivito.createObjClass({
  name: 'LandingPage',
  attributes: {
    ...defaultPageAttributes,
  },
});

Scrivito.registerClass('LandingPage', LandingPage);

Scrivito.provideUiConfig(LandingPage, {
  title: 'LandingPage',
  description: 'A landing page.',
  attributes: {
    ...defaultPageUiConfigAttributes,
  },
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(LandingPage, ({ page }) =>
  <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
);

export default LandingPage;
