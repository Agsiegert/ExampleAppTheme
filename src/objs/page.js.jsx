const Page = Scrivito.createObjClass({
  name: 'Page',
  attributes: {
    title: 'string',
    navigationTitle: 'string',
    body: 'widgetlist',
    childOrder: 'referencelist',
  },
});

Scrivito.provideUiConfig(Page, {
  title: 'Page',
  description: 'A regular page.',
  attributes: {
    title: {
      title: 'Title',
      description: 'Description of title',
    },
    navigationTitle: {
      title: 'Navigation Title',
      description: 'The title of the navigation section',
    },
  },
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path}`,
});

Scrivito.provideComponent(Page, obj =>
  <div>
    <Scrivito.React.Content tag="h1" content={ obj } attribute="title" />
    <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
  </div>
);

export default Page;
