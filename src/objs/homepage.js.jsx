import textExtractFromWidgetlist from 'utils/text_extract_from_widgetlist';

import {
  defaultNavigationOptions,
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
} from './_default_page_attributes';

const BaseHomepage = Scrivito.createObjClass({
  name: 'Homepage',
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    footer: 'widgetlist',
    logoDark: 'reference',
    logoWhite: 'reference',
    iconButtons: ['widgetlist', { only: 'FontAwesomeIconWidget' }],
  },
});

class Homepage extends BaseHomepage {
  navigationOptions() {
    return defaultNavigationOptions(this);
  }

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

Scrivito.provideUiConfig(Homepage, {
  title: 'Homepage',
  description: 'A Homepage. This class is only intended for Obj.root (aka "_path" "/")',
  attributes: {
    ...defaultPageUiConfigAttributes,
    logoWhite: {
      title: 'Logo White',
      description: 'The logo of your site (white version for dark backgrounds)',
    },
    logoDark: {
      title: 'Logo Dark',
      description: 'The logo of your site (dark version for light backgrounds)',
    },
    iconButtons: {
      title: 'Icon Buttons',
      description: 'The icon buttons, which are shown at the very bottom of the page',
    },
  },
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path}`,
});

Scrivito.provideComponent(Homepage, ({ obj }) =>
  <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
);

export default Homepage;
