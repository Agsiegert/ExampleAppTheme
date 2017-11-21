import columnContainerWidgetIcon from 'assets/images/column_container_widget.svg';

Scrivito.provideEditingConfig('ColumnContainerWidget', {
  title: 'Columns',
  description: 'A widget with up to 4 columns.',
  thumbnail: `/${columnContainerWidgetIcon}`,
  propertiesGroups: [
    {
      title: 'Columns layout',
      component: 'ColumnsEditorTab',
    },
  ],
});
