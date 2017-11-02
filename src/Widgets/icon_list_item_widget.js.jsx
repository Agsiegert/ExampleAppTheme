const IconListItemWidget = Scrivito.provideWidgetClass('IconListItemWidget', {
  onlyInside: 'IconListWidget',
  attributes: {
    icon: 'string',
    size: ['enum', { values: ['fa-lg', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x'] }],
    link: 'link',
  },
});

Scrivito.provideEditingConfig('IconListItemWidget', {
  title: 'IconListItemWidget',
  description: 'A widget with a Font Awesome icon. See http://fontawesome.io/icons/ for all icons.',
  attributesConfig: {
    icon: {
      title: 'Icon',
      description: 'The name of the icon. E.g. "fa-address-book",'
        + ' See http://fontawesome.io/icons/ for all icons.',
    },
    size: {
      title: 'Size',
      description: 'Size of the icon.',
    },
    link: {
      title: 'Link',
      description: 'The link where this icon should lead (optional).',
    },
  },
  generalProperties: [
    'icon',
    'size',
    'link',
  ],
  titleForContent: widget => widget.get('icon'),
});

export default IconListItemWidget;