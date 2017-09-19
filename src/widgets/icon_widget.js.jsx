import IconComponent from 'components/icon';

const IconWidget = Scrivito.createWidgetClass({
  name: 'IconWidget',
  attributes: {
    icon: 'string',
    size: ['enum', { validValues: ['fa-lg', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x'] }],
    alignment: ['enum', { validValues: ['left', 'center', 'right'] }],
    link: 'link',
  },
});

Scrivito.provideUiConfig(IconWidget, {
  title: 'Icon',
  description: 'A widget with a font awesome icon. See http://fontawesome.io/icons/ for all icons.',
  attributes: {
    icon: {
      title: 'Icon',
      description: 'The name of the icon. E.g. "fa-address-book"',
    },
    size: {
      title: 'Size',
      description: 'Size of the icon',
    },
    alignment: {
      title: 'Alignment',
      description: 'How should this icon be aligned? Default: left',
    },
    link: {
      title: 'Link',
      description: 'The link where this icon should lead (optional)',
    },
  },
  titleForContent: widget => widget.get('icon'),
});

Scrivito.provideComponent(IconWidget, ({ widget }) => {
  const icon = widget.get('icon');
  const link = widget.get('link');
  const size = widget.get('size');

  if (['center', 'right'].includes(widget.get('alignment'))) {
    return (
      <div className={ `text-${widget.get('alignment')}` }>
        <IconComponent icon={ icon } size={ size } link={ link } />
      </div>
    );
  }

  return <IconComponent icon={ icon } size={ size } link={ link } />;
});

export default IconWidget;
