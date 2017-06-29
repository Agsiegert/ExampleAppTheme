const Homepage = Scrivito.createObjClass({
  name: 'Homepage',
  attributes: {
    title: 'string',
    body: 'widgetlist',
    childOrder: 'referencelist',
    logo: 'reference',
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
