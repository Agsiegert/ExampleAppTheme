const ImageWidget = Scrivito.createWidgetClass({
  name: 'ImageWidget',
  attributes: {
    image: 'reference',
  },
});

Scrivito.provideUiConfig(ImageWidget, {
  title: 'Image',
  description: 'A widget with an image.',
  // TODO: Remove "image" attribute from widget properties,
  // once https://github.com/infopark/rails_connector/issues/3207 is fixed.
  attributes: {
    image: {
      title: 'Image',
      description: 'The image',
    },
  },
});

Scrivito.provideComponent(ImageWidget, widget =>
  <Scrivito.React.Image src={ widget } attribute="image" />);

export default ImageWidget;
