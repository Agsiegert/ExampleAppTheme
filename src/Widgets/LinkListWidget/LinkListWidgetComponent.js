import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('LinkListWidget', ({ widget }) =>
  <ul className='page-list'>
    <Headline widget={ widget } />
    <LinkList widget={ widget } />
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

const LinkList = ({ widget }) => {
  const pages = widget.get('pages');

  if (!pages.length) {
    return (
      <li>
        <InPlaceEditingPlaceholder>
          Select pages in the widget properties.
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
