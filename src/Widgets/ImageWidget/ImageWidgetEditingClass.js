import imageWidgetIcon from 'assets/images/image_widget.svg';

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
