import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('TickListWidget', ({ widget }) => {
  const items = widget.get('items');

  if (!items.length) {
    return (
      <InPlaceEditingPlaceholder>
        No statements provided. Provide them in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <ul className="tick-list">
      {
        items.map((itemWidget, index) =>
          <Scrivito.ContentTag
            key={ `${itemWidget.id()}${index}` }
            content={ itemWidget }
            attribute="statement"
            tag="li"
          />
        )
      }
    </ul>
  );
});
