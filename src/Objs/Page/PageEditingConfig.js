import { socialCardsCustomGroup } from '../_social_cards_attributes';
import {
  defaultGeneralProperties,
  defaultPageUiConfigAttributes,
} from '../_default_page_attributes';

export default Scrivito.provideEditingConfig('Page', {
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
