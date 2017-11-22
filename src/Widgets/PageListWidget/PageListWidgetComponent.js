import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('PageListWidget', ({ widget }) =>
  <ul className='page-list'>
    <Headline widget={ widget } />
    <PageList widget={ widget } />
  </ul>
);

const Headline = ({ widget }) => {
  const headline = widget.get('headline');

  if (!headline) { return null; }

  return (
    <li>
      <span className="border-bottom">
        { widget.get('headline') }
      </span>
    </li>
  );
};

const PageList = ({ widget }) => {
  const pages = widget.get('pages');

  if (!pages.length) {
    return (
      <li>
        <InPlaceEditingPlaceholder>
          No pages selected. Select them in the widget properties.
        </InPlaceEditingPlaceholder>
      </li>
    );
  }

  return pages.map((page, index) =>
    <li key={ `${page.id()}${index}` }>
      <Scrivito.LinkTag to={ page }>
        { page.get('title') }
      </Scrivito.LinkTag>
    </li>
  );
};
