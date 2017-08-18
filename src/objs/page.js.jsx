import textExtractFromWidgetlist from 'utils/text_extract_from_widgetlist';

import {
  defaultNavigationOptions,
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
} from './_default_page_attributes';

const BasePage = Scrivito.createObjClass({
  name: 'Page',
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
  },
});

class Page extends BasePage {
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

Scrivito.registerClass('Page', Page);

Scrivito.provideUiConfig(Page, {
  title: 'Page',
  description: 'A regular page.',
  attributes: {
    ...defaultPageUiConfigAttributes,
  },
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path}`,
});

Scrivito.provideComponent(Page, ({ obj }) =>
  <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
);

export default Page;
