const ImageWidget = Scrivito.createWidgetClass({
  name: 'ImageWidget',
  attributes: {
    image: 'reference',
    alignment: ['enum', { validValues: ['left', 'center', 'right'] }],
  },
});

Scrivito.provideEditingConfig(ImageWidget, {
  title: 'Image',
  description: 'A widget with an image.',
  attributesConfig: {
    alignment: {
      title: 'Alignment',
      description: 'How should this image be aligned? Default: left',
    },
  },
});

Scrivito.provideComponent(ImageWidget, ({ widget }) => {
  const image = <Scrivito.ImageTag content={ widget } attribute="image" />;

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
