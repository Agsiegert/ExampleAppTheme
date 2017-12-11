import buttonWidgetIcon from 'assets/images/button_widget.svg';

Scrivito.provideEditingConfig('ButtonWidget', {
  title: 'Button',
  description: 'A widget with a button.',
  thumbnail: `/${buttonWidgetIcon}`,
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
    target: {
      title: 'Target',
      description: 'The target and text of the button.',
    },
  },
  properties: [
    'target',
    'alignment',
  ],
});
