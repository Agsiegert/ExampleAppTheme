const ImageWidget = Scrivito.createWidgetClass({
  name: 'ImageWidget',
  attributes: {
    image: 'reference',
    cssClass: 'string',
    centered: ['enum', { validValues: ['yes', 'no'] }],
  },
});

Scrivito.provideUiConfig(ImageWidget, {
  title: 'Image',
  description: 'A widget with an image.',
  attributes: {
    cssClass: {
      title: 'CSS Class',
      description: 'Optional css class for the img tag',
    },
    centered: {
      title: 'Centered',
      description: 'Should this image be centered?',
    },
  },
});

Scrivito.provideComponent(ImageWidget, ({ widget }) => {
  const image = <Scrivito.React.Image
    src={ widget }
    attribute="image"
    className={ widget.get('cssClass') }
  />;

  if (widget.get('centered') === 'yes') {
    return (<div className="text-center">{ image }</div>);
  }

  return image;
});

export default ImageWidget;
