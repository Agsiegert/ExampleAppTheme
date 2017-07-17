const ImageWidget = Scrivito.createWidgetClass({
  name: 'ImageWidget',
  attributes: {
    image: 'reference',
    cssClass: 'string',
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
    cssClass: {
      title: 'CSS Class',
      description: 'Optional css class for the img tag',
    },
  },
});

Scrivito.provideComponent(ImageWidget, widget =>
  <Scrivito.React.Image src={ widget } attribute="image" className={ widget.get('cssClass') } />);

export default ImageWidget;
