import { registerTextExtract } from 'utils/text_extract_registry';
import { socialCardsAttributes, socialCardsCustomGroup } from './_social_cards_attributes';
import {
  defaultGeneralProperties,
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
} from './_default_page_attributes';

const Page = Scrivito.createObjClass({
  name: 'Page',
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    ...socialCardsAttributes,
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
  generalProperties: [
    ...defaultGeneralProperties,
  ],
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(Page, ({ page }) =>
  <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
);

export default Page;
