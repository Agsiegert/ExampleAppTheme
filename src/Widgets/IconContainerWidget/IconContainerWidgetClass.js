const IconContainerWidget = Scrivito.provideWidgetClass('IconContainerWidget', {
  attributes: {
    iconList: ['widgetlist', { only: 'IconListItemWidget' }],
  },
});

export default IconContainerWidget;
