const ImageWidget = Scrivito.provideWidgetClass('ImageWidget', {
  attributes: {
    image: 'reference',
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
  },
});

export default ImageWidget;
