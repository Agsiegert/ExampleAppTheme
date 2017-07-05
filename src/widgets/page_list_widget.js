const PageListWidget = Scrivito.createWidgetClass({
  name: 'PageListWidget',
  attributes: {
    headline: 'string',
    pages: 'referencelist',
  },
});

Scrivito.provideUiConfig(PageListWidget, {
  title: 'Page List',
  description: 'A widget which lists pages',
  attributes: {
    headline: {
      title: 'Headline',
      description: 'The headline of list',
    },
    pages: {
      title: 'Pages',
      description: 'The pages to list',
    },
  },
});

Scrivito.provideComponent(PageListWidget, {
  render() {
    const widget = this.props.widget;
    const pages = widget.get('pages');

    if (pages.size === 0) {
      return <div></div>;
    }

    return <div className="PageListWidget">
      <b>{ widget.get('headline').toUpperCase() }</b>
      <ul>
        {
          pages.map(page => <li key={ page.id }>
             <Scrivito.React.Link to={ page }>
               { page.get('title') }
             </Scrivito.React.Link>
          </li>)
        }
      </ul>
    </div>;
  },
});

export default PageListWidget;
