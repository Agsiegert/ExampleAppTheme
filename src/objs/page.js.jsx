const Page = Scrivito.createObjClass({
  name: 'Page',
  attributes: {
    title: 'string',
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
