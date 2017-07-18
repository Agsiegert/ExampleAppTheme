const ButtomWidget = Scrivito.createWidgetClass({
  name: 'ButtomWidget',
  attributes: {
    text: 'string',
    target: 'reference',
    centered: ['enum', { validValues: ['yes', 'no'] }],
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
    centered: {
      title: 'Centered',
      description: 'Should this buttom be centered?',
    },
    target: {
      title: 'Target',
      description: 'The target of the buttom',
    },
  },
});

const ButtomWidgetComponent = Scrivito.createComponent(({ widget }) =>
  <Scrivito.React.Link to={ widget.get('target') } className="btn btn-primary">
    { widget.get('text') }<i className="fa fa-angle-right fa-4" aria-hidden="true"></i>
  </Scrivito.React.Link>
);

Scrivito.provideComponent(ButtomWidget, widget => {
  if (widget.get('centered') === 'yes') {
    return (
      <div className='text-center'>
        <ButtomWidgetComponent widget={ widget } />
      </div>
    );
  }

  return <ButtomWidgetComponent widget={ widget } />;
});

export default ButtomWidget;
