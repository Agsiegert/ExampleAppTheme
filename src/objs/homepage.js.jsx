import textExtractFromWidgetlist from 'utils/text_extract_from_widgetlist';

import {
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
} from './_default_page_attributes';

const BaseHomepage = Scrivito.createObjClass({
  name: 'Homepage',
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    footer: ['widgetlist', { only: 'SectionWidget' }],
    logoDark: 'reference',
    logoWhite: 'reference',
    facebookID: 'string',
    twitterID: 'string',
  },
});

class Homepage extends BaseHomepage {
  textExtract() {
    return [
      'navigationSection',
      'body',
    ].map(
      attributeName => textExtractFromWidgetlist(this.get(attributeName))
    ).join(' ');
  }
}

Scrivito.registerClass('Homepage', Homepage);

Scrivito.provideEditingConfig(Homepage, {
  title: 'Homepage',
  description: 'A Homepage. This class is only intended for Obj.root() (aka "_path" "/")',
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
    facebookID: {
      title: 'Facebook App ID',
      description: 'A Facebook App ID, https://developers.facebook.com/docs/apps/register',
    },
    twitterID: {
      title: 'Twitter Site ID',
      description: 'Registered Twitter account for this site, needs to be approved at https://cards-dev.twitter.com/validator',
    },
  },
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path()}`,
});

Scrivito.provideComponent(Homepage, ({ page }) =>
  <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
);

export default Homepage;
