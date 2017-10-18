import { registerTextExtract } from 'utils/text_extract_registry';

import {
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
} from './_default_page_attributes';

const Page = Scrivito.createObjClass({
  name: 'Page',
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
  },
});

registerTextExtract('Page', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(Page, {
  title: 'Page',
  description: 'A Basic Page',
  attributesConfig: {
    ...defaultPageUiConfigAttributes,
  },
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path()}`,
});

Scrivito.provideComponent(Page, ({ page }) =>
  <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
);

export default Page;
