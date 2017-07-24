const ButtonWidget = Scrivito.createWidgetClass({
  name: 'ButtonWidget',
  attributes: {
    text: 'string',
    target: 'reference',
    centered: ['enum', { validValues: ['yes', 'no'] }],
  },
});

Scrivito.provideUiConfig(ButtonWidget, {
  title: 'Button',
  description: 'A widget with a button',
  attributes: {
    text: {
      title: 'Text',
      description: 'The text of the button',
    },
    centered: {
      title: 'Centered',
      description: 'Should this button be centered?',
    },
    target: {
      title: 'Target',
      description: 'The target of the button',
    },
  },
});

const ButtonWidgetComponent = Scrivito.createComponent(({ widget }) =>
  <Scrivito.React.Link to={ widget.get('target') } className="btn btn-primary">
    { widget.get('text') }<i className="fa fa-angle-right fa-4" aria-hidden="true"></i>
  </Scrivito.React.Link>
);

Scrivito.provideComponent(ButtonWidget, widget => {
  if (widget.get('centered') === 'yes') {
    return (
      <div className='text-center'>
        <ButtonWidgetComponent widget={ widget } />
      </div>
    );
  }

  return <ButtonWidgetComponent widget={ widget } />;
});

export default ButtonWidget;
