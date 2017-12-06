import homepageObjIcon from 'assets/images/homepage_obj.svg';
import {
  defaultGeneralProperties,
  defaultPageUiConfigAttributes,
} from '../_defaultPageAttributes';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('Homepage', {
  title: 'Homepage',
  description: 'A Homepage. This class is only intended for Obj.root() (aka "_path" "/")',
  thumbnail: `/${homepageObjIcon}`,
  attributes: {
    ...defaultPageUiConfigAttributes,
    image1: {
      title: 'Image1',
    },
    image2: {
      title: 'Image2',
    },
    image3: {
      title: 'Image3',
    },
    logoDark: {
      title: 'Dark logo',
      description: 'Used with light backgrounds',
    },
    logoWhite: {
      title: 'Light logo',
      description: 'Used with dark backgrounds',
    },
    dividerLogo: {
      title: 'Divider logo',
      description: 'Used in the divider widget',
    },
    facebookId: {
      title: 'Facebook app ID',
      description: 'Register at https://developers.facebook.com/docs/apps/register',
    },
    twitterId: {
      title: 'Twitter site ID',
      description: 'Needs to be approved at https://cards-dev.twitter.com/validator',
    },
  },
  properties: [
    'image1',
    'image2',
    'image3',
    ...defaultGeneralProperties,
  ],
  propertiesGroups: [
    {
      title: 'Site settings',
      properties: [
        'logoDark',
        'logoWhite',
        'dividerLogo',
        'facebookId',
        'twitterId',
      ],
    },
    socialCardsCustomGroup,
  ],
  titleForContent: obj => obj.get('title'),
});
