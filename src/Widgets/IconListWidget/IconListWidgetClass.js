const IconListWidget = Scrivito.provideWidgetClass('IconListWidget', {
  attributes: {
    iconList: ['widgetlist', { only: 'IconListItemWidget' }],
  },
});

export default IconListWidget;
