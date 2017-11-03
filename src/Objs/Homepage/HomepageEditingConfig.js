import homepageObjIcon from 'assets/images/homepage_obj.svg';
import {
  defaultGeneralProperties,
  defaultPageUiConfigAttributes,
} from '../_default_page_attributes';
import { socialCardsCustomGroup } from '../_social_cards_attributes';

Scrivito.provideEditingConfig('Homepage', {
  title: 'Homepage',
  description: 'A Homepage. This class is only intended for Obj.root() (aka "_path" "/")',
  thumbnail: `/${homepageObjIcon}`,
  attributesConfig: {
    ...defaultPageUiConfigAttributes,
    logoWhite: {
      title: 'Logo White',
      description: 'The logo of your site (white version for dark backgrounds)',
    },
    logoDark: {
      title: 'Logo Dark',
      description: 'The logo of your site (dark version for light backgrounds)',
    },
    facebookId: {
      title: 'Facebook App ID',
      description: 'A Facebook App ID, https://developers.facebook.com/docs/apps/register',
    },
    twitterId: {
      title: 'Twitter Site ID',
      description: 'Registered Twitter account for this site, needs to be approved at https://cards-dev.twitter.com/validator',
    },
  },
  generalProperties: [
    ...defaultGeneralProperties,
  ],
  propertiesGroups: [
    {
      title: 'Global Content',
      properties: [
        'logoWhite',
        'logoDark',
        'facebookId',
        'twitterId',
      ],
    },
    socialCardsCustomGroup,
  ],
  titleForContent: obj => obj.get('title'),
});
