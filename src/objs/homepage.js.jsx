const Homepage = Scrivito.createObjClass({
  name: 'Homepage',
  attributes: {
    body: 'widgetlist',
    childOrder: 'referencelist',
    footer: 'widgetlist',
    socialButtons: ['widgetlist', { only: 'FontAwesomeIconWidget' }],
    logoWhite: 'reference',
    logoDark: 'reference',
    navigationStyle: ['enum', { validValues: ['solidWhite', 'transparentDark'] }],
    navigationBackgroundImage: 'reference',
    title: 'string',
  },
});

Scrivito.provideUiConfig(Homepage, {
  title: 'Homepage',
  description: 'A Homepage. This class is only intended for Obj.root (aka "_path" "/")',
  attributes: {
    title: {
      title: 'Title',
      description: 'Description of title',
    },
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
    navigationStyle: {
      title: 'Navigation Style',
      description: 'The style of the navigation',
    },
    navigationBackgroundImage: {
      title: 'Navigation Background Image',
      description: 'The background image of the navigation',
    },
  },
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path}`,
});

Scrivito.provideComponent(Homepage, obj =>
  <div>
    <Scrivito.React.Content tag="h1" content={ obj } attribute="title" />
    <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
  </div>
);

export default Homepage;
