const BlogOverviewWidget = Scrivito.provideWidgetClass('BlogOverviewWidget', {
  attributes: {
    maxItems: 'integer',
    author: 'reference',
    tag: 'string',
  },
});

export default BlogOverviewWidget;
