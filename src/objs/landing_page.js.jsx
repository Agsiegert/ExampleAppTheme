import { registerTextExtract } from 'utils/text_extract_registry';
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

registerTextExtract('LandingPage', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(LandingPage, {
  title: 'LandingPage',
  description: 'A landing page.',
  attributesConfig: {
    ...defaultPageUiConfigAttributes,
  },
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(LandingPage, ({ page }) =>
  <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
);

export default LandingPage;
