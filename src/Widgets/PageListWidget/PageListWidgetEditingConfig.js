import pageListWidgetIcon from 'assets/images/page_list_widget.svg';

Scrivito.provideEditingConfig('PageListWidget', {
  title: 'Page List',
  description: 'A widget which lists pages.',
  thumbnail: `/${pageListWidgetIcon}`,
  attributesConfig: {
    headline: {
      title: 'Headline',
    },
    pages: {
      title: 'Pages',
    },
  },
  generalProperties: [
    'headline',
    'pages',
  ],
});
