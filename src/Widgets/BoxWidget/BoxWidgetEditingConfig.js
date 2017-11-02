import boxWidgetIcon from 'assets/images/box_widget.svg';

Scrivito.provideEditingConfig('BoxWidget', {
  title: 'Box',
  description: 'A box widget.',
  thumbnail: `/${boxWidgetIcon}`,
  attributesConfig: {
    useOffset: {
      title: 'Use offset?',
      description: 'Should an offset be used? If so, the box will move "up". Default: no',
    },
  },
  generalProperties: [
    'useOffset',
  ],
});
