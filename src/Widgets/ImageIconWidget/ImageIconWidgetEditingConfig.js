Scrivito.provideEditingConfig('ImageIconWidget', {
  title: 'Image with icon overlay',
  description: 'A widget with an image.',
  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'Default: Left',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' },
      ],
    },
    image: {
      title: 'Image',
    },
    icon: {
      title: 'Font awesome icon',
      description: 'E.g. "fa-address-book". See http://fontawesome.io/icons/ for all icons.',
    },
    link: {
      title: 'Link (optional)',
      description: 'The link where this icon should lead.',
    },
  },
  properties: [
    'alignment',
    'image',
    'icon',
    'link',
  ],
  titleForContent: widget => widget.get('headline'),
});
