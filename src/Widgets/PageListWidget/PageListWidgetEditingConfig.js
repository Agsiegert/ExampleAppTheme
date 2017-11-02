import pageListWidgetIcon from 'assets/images/page_list_widget.svg';

Scrivito.provideEditingConfig('PageListWidget', {
  title: 'Page List',
  description: 'A widget which lists pages.',
  thumbnail: `/${pageListWidgetIcon}`,
  attributesConfig: {
    headline: {
      title: 'Headline',
      description: 'The headline of list.',
    },
    pages: {
      title: 'Pages',
      description: 'The pages to list.',
    },
  },
  generalProperties: [
    'headline',
    'pages',
  ],
});
