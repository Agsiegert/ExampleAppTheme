import PageObjIcon from 'assets/images/page_obj.svg';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';
import {
  defaultGeneralProperties,
  defaultPageUiConfigAttributes,
} from '../_defaultPageAttributes';

Scrivito.provideEditingConfig('Page', {
  title: 'Page',
  description: 'A Basic Page',
  thumbnail: `/${PageObjIcon}`,
  attributes: {
    ...defaultPageUiConfigAttributes,
  },
  properties: [
    ...defaultGeneralProperties,
  ],
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});
