import iconContainerWidgetIcon from 'assets/images/icon_container_widget.svg';

Scrivito.provideEditingConfig('IconContainerWidget', {
  title: 'Icon List',
  description: 'A list of icons.',
  thumbnail: `/${iconContainerWidgetIcon}`,
  attributesConfig: {
    iconList: {
      title: 'Icon list',
      description: 'The icon list.',
    },
  },
  generalProperties: [
    'iconList',
  ],
});
