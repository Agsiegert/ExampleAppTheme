const ButtonWidget = Scrivito.createWidgetClass({
  name: 'ButtonWidget',
  attributes: {
    target: 'link',
    centered: ['enum', { validValues: ['yes', 'no'] }],
  },
});

Scrivito.provideUiConfig(ButtonWidget, {
  title: 'Button',
  description: 'A widget with a button',
  attributes: {
    target: {
      title: 'Target',
      description: 'The target of the button',
    },
    centered: {
      title: 'Centered',
      description: 'Should this button be centered?',
    },
  },
});

const ButtonWidgetComponent = Scrivito.React.connect(({ widget }) => {
  const target = widget.get('target');
  const text = target && target.title;

  return (
    <Scrivito.React.Link to={ target } className="btn btn-primary">
      { text }<i className="fa fa-angle-right fa-4" aria-hidden="true"></i>
    </Scrivito.React.Link>
  );
});

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
