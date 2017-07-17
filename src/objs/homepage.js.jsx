import { defaultPageAttributes, defaultPageUiConfigAttributes } from './_default_page_attributes';

const Homepage = Scrivito.createObjClass({
  name: 'Homepage',
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    footer: 'widgetlist',
    logoDark: 'reference',
    logoWhite: 'reference',
    socialButtons: ['widgetlist', { only: 'FontAwesomeIconWidget' }],
  },
});

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
    socialButtons: {
      title: 'Social Buttons',
      description: 'All widgets',
    },
  },
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path}`,
});

Scrivito.provideComponent(Homepage, obj =>
  <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
);

export default Homepage;
