import buttonWidgetIcon from 'assets/images/button_widget.svg';

Scrivito.provideEditingConfig('ButtonWidget', {
  title: 'Button',
  description: 'A widget with a button.',
  thumbnail: `/${buttonWidgetIcon}`,
  attributesConfig: {
    alignment: {
      title: 'Alignment',
      description: 'How should this button be aligned? Default: left',
    },
    style: {
      title: 'Background Color',
      description: 'What background color should this button have? Default: primary color',
      values: [
        { value: 'btn-primary', title: 'primary color' },
        { value: 'btn-clear', title: 'transparent' },
      ],
    },
    target: {
      title: 'Target',
      description: 'The target and text of the button.',
    },
  },
  generalProperties: [
    'target',
    'alignment',
    'style',
  ],
});
