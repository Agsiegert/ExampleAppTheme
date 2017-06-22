const Homepage = Scrivito.createObjClass({
  name: 'Homepage',
  attributes: {
    title: 'string',
    body: 'widgetlist',
    childOrder: 'referencelist',
  },
});

Scrivito.provideComponent(Homepage, obj =>
  <div>
    <Scrivito.React.Content tag="h1" content={ obj } attribute="title" />
    <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
  </div>
);

export default Homepage;
