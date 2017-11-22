import pageListWidgetIcon from 'assets/images/page_list_widget.svg';

Scrivito.provideEditingConfig('PageListWidget', {
  title: 'Page List',
  description: 'A widget which lists pages.',
  thumbnail: `/${pageListWidgetIcon}`,
  attributesConfig: {
    headline: {
      title: 'Headline',
      description: 'Leave the headline empty, to not show a headline at all.',
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
