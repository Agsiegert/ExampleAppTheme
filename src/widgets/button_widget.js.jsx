const ButtonWidget = Scrivito.createWidgetClass({
  name: 'ButtonWidget',
  attributes: {
    target: 'link',
    alignment: ['enum', { validValues: ['left', 'center', 'right'] }],
    style: ['enum', { validValues: ['btn-primary', 'btn-clear'] }],
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
    alignment: {
      title: 'Alignment',
      description: 'How should this button be aligned? Default: left',
    },
    style: {
      title: 'Style',
      description: 'What style should this button have? Default: btn-primary',
    },
  },
});

const ButtonWidgetComponent = Scrivito.React.connect(({ widget }) => {
  const target = widget.get('target');
  const text = target && target.title();

  const classNames = ['btn'];
  classNames.push(widget.get('style') || 'btn-primary');

  return (
    <Scrivito.React.Link to={ target } className={ classNames.join(' ') }>
      { text }<i className="fa fa-angle-right fa-4" aria-hidden="true"></i>
    </Scrivito.React.Link>
  );
});

Scrivito.provideComponent(ButtonWidget, ({ widget }) => {
  if (['center', 'right'].includes(widget.get('alignment'))) {
    return (
      <div className={ `text-${widget.get('alignment')}` }>
        <ButtonWidgetComponent widget={ widget } />
      </div>
    );
  }

  return <ButtonWidgetComponent widget={ widget } />;
});

export default ButtonWidget;
