import blogOverviewWidgetIcon from 'assets/images/blog_overview_widget.svg';

Scrivito.provideEditingConfig('BlogOverviewWidget', {
  title: 'Blog Overview',
  description: 'A widget with up to four blog posts.',
  thumbnail: `/${blogOverviewWidgetIcon}`,
  attributesConfig: {
    maxItems: {
      title: 'Maximum number of blog posts',
      description: 'How many blog posts should be shown? Set it to 0, to show all blog posts.',
    },
    author: {
      title: 'Filter author',
      description: 'Filter blog posts by author. Leave it empty, to not filter by author.',
    },
    tags: {
      title: 'Filter tags',
      description: 'Only show blog posts, that have one of the given tags.' +
        ' Leave it empty, to not filter by tags.',
    },
  },
  generalProperties: [
    'maxItems',
    'author',
    'tags',
  ],
});
