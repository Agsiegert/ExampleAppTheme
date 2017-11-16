const IconListItemWidget = Scrivito.provideWidgetClass('IconListItemWidget', {
  onlyInside: 'IconContainerWidget',
  attributes: {
    icon: 'string',
    size: ['enum', { values: ['fa-lg', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x'] }],
    link: 'link',
  },
});

export default IconListItemWidget;
