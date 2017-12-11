const ImageIconWidget = Scrivito.provideWidgetClass('ImageIconWidget', {
  attributes: {
    icon: 'string',
    image: 'reference',
    headline: 'string',
    content: 'string',
    link: 'link',
    alignment: ['enum', { values: ['left', 'right'] }],
  },
});

export default ImageIconWidget;
