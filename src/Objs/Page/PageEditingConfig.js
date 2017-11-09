import PageObjIcon from 'assets/images/page_obj.svg';
import { socialCardsCustomGroup } from '../_social_cards_attributes';
import {
  defaultGeneralProperties,
  defaultPageUiConfigAttributes,
} from '../_defaultPageAttributes';

Scrivito.provideEditingConfig('Page', {
  title: 'Page',
  description: 'A Basic Page',
  thumbnail: `/${PageObjIcon}`,
  attributesConfig: {
    ...defaultPageUiConfigAttributes,
  },
  generalProperties: [
    ...defaultGeneralProperties,
  ],
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});
