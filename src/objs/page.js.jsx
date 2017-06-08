const Page = scrivito.createObjClass({
  name: 'Page',
  attributes: {
    title: 'string',
    body: 'widgetlist',
    childOrder: 'referencelist',
  },
});

scrivito.provideComponent(Page, obj =>
  <div>
    <scrivito.React.Content tag="h1" content={ obj } attribute="title" />
    <scrivito.React.Content tag="div" content={ obj } attribute="body" />
  </div>
);

export default Page;
