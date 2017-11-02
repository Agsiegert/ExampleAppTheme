Scrivito.provideComponent('PageListWidget', ({ widget }) => {
  const pages = widget.get('pages');

  if (pages.size === 0) {
    return <div></div>;
  }

  return (<ul className='page-list'>
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
