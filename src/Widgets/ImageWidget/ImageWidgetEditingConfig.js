import imageWidgetIcon from 'assets/images/image_widget.svg';

Scrivito.provideEditingConfig('ImageWidget', {
  title: 'Image',
  thumbnail: `/${imageWidgetIcon}`,
  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'Default: Left',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' },
      ],
    },
  },
  properties: [
    'alignment',
  ],
  initialContent: {
    alignment: 'left',
  },
});
