import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('LinkContainerWidget', ({ widget }) =>
  <React.Fragment>
    <Headline widget={ widget } />
    <Scrivito.ContentTag
      className="page-list"
      tag="ul"
      content={ widget }
      attribute="links"
    />
  </React.Fragment>
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
    <ul className="page-list">
      <li className="border-bottom">
        { widget.get('headline') }
      </li>
    </ul>
  );
});
