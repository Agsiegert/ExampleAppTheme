const ImageIconWidget = Scrivito.provideWidgetClass('ImageIconWidget', {
  attributes: {
    icon: 'string',
    size: ['enum', { values: ['fa-1x', 'fa-lg', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x'] }],
    alignment: ['enum', { values: ['left', 'right'] }],
    link: 'link',
    image: 'reference',
    headline: 'string',
    content: 'string',
  },
});

export default ImageIconWidget;
