import homepageObjIcon from 'assets/images/homepage_obj.svg';
import {
  defaultGeneralProperties,
  defaultInitialContent,
  defaultPageUiConfigAttributes,
} from '../_defaultPageAttributes';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('Homepage', {
  title: 'Homepage',
  thumbnail: `/${homepageObjIcon}`,
  attributes: {
    ...defaultPageUiConfigAttributes,
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
  initialContent: {
    ...defaultInitialContent,
  },
  titleForContent: obj => obj.get('title'),
});
