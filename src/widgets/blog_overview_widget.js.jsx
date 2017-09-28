import BlogPostPreviewList from 'components/blog_post/blog_post_preview_list';

const BlogOverviewWidget = Scrivito.createWidgetClass({
  name: 'BlogOverviewWidget',
  attributes: {
    maxItems: 'integer',
    author: 'reference',
    tag: 'string',
  },
});

Scrivito.provideEditingConfig(BlogOverviewWidget, {
  title: 'Blog Overview',
  description: 'A widget with up to four blog posts',
  attributes: {
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
});

Scrivito.provideComponent(BlogOverviewWidget, ({ widget }) =>
  <BlogPostPreviewList
    maxItems={ widget.get('maxItems') }
    author={ widget.get('author') }
    tag={ widget.get('tag') }
  />
);

export default BlogOverviewWidget;
