import iconWidgetIcon from 'assets/images/icon_widget.svg';

Scrivito.provideEditingConfig('IconWidget', {
  title: 'Icon',
  description: 'A widget with a Font Awesome icon.',
  thumbnail: `/${iconWidgetIcon}`,
  attributesConfig: {
    icon: {
      title: 'Icon',
      description: 'The name of the icon. E.g. "fa-address-book"'
        + ' See http://fontawesome.io/icons/ for all icons.',
    },
    size: {
      title: 'Size',
      description: 'Size of the icon.',
    },
    alignment: {
      title: 'Alignment',
      description: 'How should this icon be aligned? Default: left',
    },
    link: {
      title: 'Link',
      description: 'The link where this icon should lead (optional).',
    },
  },
  generalProperties: [
    'icon',
    'size',
    'alignment',
    'link',
  ],
  titleForContent: widget => widget.get('icon'),
});
