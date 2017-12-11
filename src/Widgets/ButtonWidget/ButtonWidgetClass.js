const ButtonWidget = Scrivito.provideWidgetClass('ButtonWidget', {
  attributes: {
    target: 'link',
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
  },
});

export default ButtonWidget;
