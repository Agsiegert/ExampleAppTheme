const FontAwesomeIconWidget = Scrivito.createWidgetClass({
  name: 'FontAwesomeIconWidget',
  attributes: {
    icon: 'string',
    link: 'link',
  },
});

Scrivito.provideUiConfig(FontAwesomeIconWidget, {
  title: 'Font Awesome Icon',
  description: 'A widget with a font awesome icon. See http://fontawesome.io/icons/ for all icons.',
  attributes: {
    icon: {
      title: 'Icon',
      description: 'The name of the icon. E.g. "fa-address-book"',
    },
    link: {
      title: 'Link',
      description: 'The link where this icon should lead (optional)',
    },
  },
});

Scrivito.provideComponent(FontAwesomeIconWidget, {
  render() {
    const widget = this.props.widget;
    const icon = widget.get('icon') || 'fa-coffee';
    const link = widget.get('link');
    if (!link) {
      return <i className= { ['fa', icon].join(' ') } aria-hidden="true"></i>;
    }

    const title = link.title || '';

    return <Scrivito.React.Link to={ link }>
      <i className= { ['fa', icon].join(' ') } aria-hidden="true" title={ title }></i>
    </Scrivito.React.Link>;
  },
});

export default FontAwesomeIconWidget;
