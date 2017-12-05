import PageObjIcon from 'assets/images/page_obj.svg';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';
import {
  defaultGeneralProperties,
  defaultInitialContent,
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
  initialContent: {
    ...defaultInitialContent,
  },
  titleForContent: obj => obj.get('title'),
});
