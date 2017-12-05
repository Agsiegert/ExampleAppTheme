import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('LinkContainerWidget', ({ widget }) =>
  <ul className='page-list'>
    <Headline widget={ widget } />
    <LinkList widget={ widget } />
  </ul>
);

const Headline = Scrivito.connect(({ widget }) => {
  const headline = widget.get('headline');

  if (!headline) {
    return (
      <InPlaceEditingPlaceholder>
        Optional: Provide a headline in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <li>
      <span className="border-bottom">
        { widget.get('headline') }
      </span>
    </li>
  );
});

const LinkList = Scrivito.connect(({ widget }) => {
  const links = widget.get('links');

  if (!links.length) {
    return (
      <li>
        <InPlaceEditingPlaceholder>
          Select links in the widget properties.
        </InPlaceEditingPlaceholder>
      </li>
    );
  }

  return links.map((link, index) =>
    <li key={ index }>
      <Scrivito.LinkTag to={ link }>
        <LinkTitle link={ link } />
      </Scrivito.LinkTag>
    </li>
  );
});

const LinkTitle = Scrivito.connect(({ link }) => {
  if (link.title()) {
    return link.title();
  }

  if (link.isInternal()) {
    return link.obj().get('title');
  }

  return link.url();
});
