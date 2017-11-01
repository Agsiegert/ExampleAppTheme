import buttonWidgetIcon from 'assets/images/button_widget.svg';

const ButtonWidget = Scrivito.provideWidgetClass('ButtonWidget', {
  attributes: {
    target: 'link',
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    style: ['enum', { values: ['btn-primary', 'btn-clear'] }],
  },
});

Scrivito.provideEditingConfig('ButtonWidget', {
  title: 'Button',
  description: 'A widget with a button.',
  thumbnail: `/${buttonWidgetIcon}`,
  attributesConfig: {
    alignment: {
      title: 'Alignment',
      description: 'How should this button be aligned? Default: left',
    },
    style: {
      title: 'Style',
      description: 'What style should this button have? Default: btn-primary',
    },
    target: {
      title: 'Target',
      description: 'The target and text of the button.',
    },
  },
  generalProperties: [
    'target',
    'alignment',
    'style',
  ],
});

const ButtonWidgetComponent = Scrivito.connect(({ widget }) => {
  const target = widget.get('target');
  const text = target && target.title();

  const classNames = ['btn'];
  classNames.push(widget.get('style') || 'btn-primary');

  return (
    <Scrivito.LinkTag to={ target } className={ classNames.join(' ') }>
      { text }<i className="fa fa-angle-right fa-4" aria-hidden="true" />
    </Scrivito.LinkTag>
  );
});

Scrivito.provideComponent('ButtonWidget', ({ widget }) => {
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
