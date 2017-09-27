const ImageWidget = Scrivito.createWidgetClass({
  name: 'ImageWidget',
  attributes: {
    image: 'reference',
    cssClass: 'string',
    alignment: ['enum', { validValues: ['left', 'center', 'right'] }],
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
    alignment: {
      title: 'Alignment',
      description: 'How should this image be aligned? Default: left',
    },
  },
});

Scrivito.provideComponent(ImageWidget, ({ widget }) => {
  const image = <Scrivito.ImageTag
    content={ widget }
    attribute="image"
    className={ widget.get('cssClass') }
  />;

  if (['center', 'right'].includes(widget.get('alignment'))) {
    return (
      <div className={ `text-${widget.get('alignment')}` }>
        { image }
      </div>
    );
  }

  return image;
});

export default ImageWidget;
