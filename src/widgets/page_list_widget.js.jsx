const PageListWidget = Scrivito.createWidgetClass({
  name: 'PageListWidget',
  attributes: {
    headline: 'string',
    pages: 'referencelist',
  },
});

Scrivito.provideEditingConfig(PageListWidget, {
  title: 'Page List',
  description: 'A widget which lists pages.',
  attributesConfig: {
    headline: {
      title: 'Headline',
      description: 'The headline of list.',
    },
    pages: {
      title: 'Pages',
      description: 'The pages to list.',
    },
  },
});

Scrivito.provideComponent(PageListWidget, ({ widget }) => {
  const pages = widget.get('pages');

  if (pages.size === 0) {
    return <div></div>;
  }

  return (<ul>
    <li>
      <span className="border-bottom">
        { widget.get('headline') }
      </span>
    </li>
    {
      pages.map(page => <li key={ page.id() }>
        <Scrivito.LinkTag to={ page }>
          { page.get('title') }
        </Scrivito.LinkTag>
      </li>)
    }
  </ul>);
});

export default PageListWidget;
