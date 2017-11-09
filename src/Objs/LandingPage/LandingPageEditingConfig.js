import landingPageObjIcon from 'assets/images/landing_page_obj.svg';
import { socialCardsCustomGroup } from '../_social_cards_attributes';
import {
  defaultGeneralProperties,
  defaultPageUiConfigAttributes,
} from '../_defaultPageAttributes';

Scrivito.provideEditingConfig('LandingPage', {
  title: 'LandingPage',
  description: 'A Landing Page',
  thumbnail: `/${landingPageObjIcon}`,
  attributesConfig: {
    ...defaultPageUiConfigAttributes,
  },
  generalProperties: [
    ...defaultGeneralProperties,
  ],
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});
