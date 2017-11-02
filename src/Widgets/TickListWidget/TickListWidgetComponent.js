Scrivito.provideComponent('TickListWidget', ({ widget }) =>
  <ul className="tick-list">
    {
      widget.get('items').map((itemWidget, index) =>
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
