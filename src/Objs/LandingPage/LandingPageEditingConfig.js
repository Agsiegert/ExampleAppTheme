import { socialCardsCustomGroup } from '../_social_cards_attributes';
import {
  defaultGeneralProperties,
  defaultPageUiConfigAttributes,
} from '../_default_page_attributes';

Scrivito.provideEditingConfig('LandingPage', {
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
