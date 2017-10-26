import { registerTextExtract } from 'utils/text_extract_registry';
import { socialCardsAttributes, socialCardsCustomGroup } from './_social_cards_attributes';
import {
  defaultGeneralProperties,
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
} from './_default_page_attributes';

const LandingPage = Scrivito.createObjClass({
  name: 'LandingPage',
  attributes: {
    ...defaultPageAttributes,
    ...socialCardsAttributes,
  },
});

registerTextExtract('LandingPage', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(LandingPage, {
  title: 'LandingPage',
  description: 'A Landing Page',
  attributesConfig: {
    ...defaultPageUiConfigAttributes,
  },
  generalProperties: [
    ...defaultGeneralProperties,
  ],
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(LandingPage, ({ page }) =>
  <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
);

export default LandingPage;
