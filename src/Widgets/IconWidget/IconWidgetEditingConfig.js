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
      description: 'The font size of the icon. Default: 100% (normal)',
      values: [
        { value: 'fa-1x', title: '100% (normal)' },
        { value: 'fa-lg', title: '133%' },
        { value: 'fa-2x', title: '200%' },
        { value: 'fa-3x', title: '300%' },
        { value: 'fa-4x', title: '400%' },
        { value: 'fa-5x', title: '500% (biggest)' },
      ],
    },
    alignment: {
      title: 'Alignment',
      description: 'How should this icon be aligned? A icon list widget ignores this setting.' +
        ' Default: left',
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
