import imageWidgetIcon from 'assets/images/image_widget.svg';

const ImageWidget = Scrivito.provideWidgetClass('ImageWidget', {
  attributes: {
    image: 'reference',
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
  },
});

Scrivito.provideEditingConfig('ImageWidget', {
  title: 'Image',
  description: 'A widget with an image.',
  thumbnail: `/${imageWidgetIcon}`,
  attributesConfig: {
    alignment: {
      title: 'Alignment',
      description: 'How should this image be aligned? Default: left',
    },
  },
  generalProperties: [
    'alignment',
  ],
});

Scrivito.provideComponent('ImageWidget', ({ widget }) => {
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
