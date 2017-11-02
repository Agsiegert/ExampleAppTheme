import blogOverviewWidgetIcon from 'assets/images/blog_overview_widget.svg';

Scrivito.provideEditingConfig('BlogOverviewWidget', {
  title: 'Blog Overview',
  description: 'A widget with up to four blog posts.',
  thumbnail: `/${blogOverviewWidgetIcon}`,
  attributesConfig: {
    maxItems: {
      title: 'Max Items',
      description: 'How many items should be shown? Leave it empty, to show all items.',
    },
    author: {
      title: 'Author',
      description: 'Filter blog posts by author. Leave it empty, to not filter by author.',
    },
    tag: {
      title: 'Tag',
      description: 'Filter blog posts by tag. Leave it empty, to not filter by tags.',
    },
  },
  generalProperties: [
    'maxItems',
    'author',
    'tag',
  ],
});
