const ButtomWidget = Scrivito.createWidgetClass({
  name: 'ButtomWidget',
  attributes: {
    text: 'string',
    target: 'reference',
  },
});

Scrivito.provideUiConfig(ButtomWidget, {
  title: 'Buttom',
  description: 'A widget with a buttom',
  attributes: {
    text: {
      title: 'Text',
      description: 'The text of the buttom',
    },
    target: {
      title: 'Target',
      description: 'The target of the buttom',
    },
  },
});

Scrivito.provideComponent(ButtomWidget, widget =>
  <Scrivito.React.Link to={ widget.get('target') } className="btn btn-primary">
    { widget.get('text') }<i className="fa fa-angle-right fa-4" aria-hidden="true"></i>
  </Scrivito.React.Link>);

export default ButtomWidget;
