const Homepage = Scrivito.createObjClass({
  name: 'Homepage',
  attributes: {
    body: 'widgetlist',
    childOrder: 'referencelist',
    footer: 'widgetlist',
    socialButtons: ['widgetlist', { only: 'FontAwesomeIconWidget' }],
    logo: 'reference',
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
    logo: {
      title: 'Logo',
      description: 'The logo of your site',
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
  <div>
    <Scrivito.React.Content tag="h1" content={ obj } attribute="title" />
    <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
  </div>
);

export default Homepage;
