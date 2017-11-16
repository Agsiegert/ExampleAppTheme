import iconListWidgetIcon from 'assets/images/icon_list_widget.svg';

Scrivito.provideEditingConfig('IconContainerWidget', {
  title: 'Icon List',
  description: 'A list of icons.',
  thumbnail: `/${iconListWidgetIcon}`,
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
