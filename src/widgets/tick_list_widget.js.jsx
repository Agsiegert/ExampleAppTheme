const TickListWidget = Scrivito.createWidgetClass({
  name: 'TickListWidget',
  attributes: {
    items: ['widgetlist', { only: 'TickListItemWidget' }],
  },
});

Scrivito.registerClass('TickListWidget', TickListWidget);

Scrivito.provideUiConfig(TickListWidget, {
  title: 'Tick List',
  description: 'A list of checked statements.',
  attributes: {
    items: {
      title: 'Items',
      description: 'The items to display.',
    },
  },
});

Scrivito.provideComponent(TickListWidget, ({ widget }) =>
  <ul className="tick-list">
    {
      widget.get('items').map((itemWidget, index) =>
        <Scrivito.React.Content
          key={ `${itemWidget.id()}${index}` }
          content={ itemWidget }
          attribute="statement"
          tag="li"
        />
      )
    }
  </ul>
);

export default TickListWidget;
