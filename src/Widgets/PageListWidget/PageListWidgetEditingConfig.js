import pageListWidgetIcon from 'assets/images/page_list_widget.svg';

Scrivito.provideEditingConfig('PageListWidget', {
  title: 'Page List',
  description: 'A widget which lists pages.',
  thumbnail: `/${pageListWidgetIcon}`,
  attributes: {
    headline: {
      title: 'Headline',
      description: 'Leave empty to not show a headline.',
    },
    pages: {
      title: 'Pages',
    },
  },
  properties: [
    'headline',
    'pages',
  ],
});
