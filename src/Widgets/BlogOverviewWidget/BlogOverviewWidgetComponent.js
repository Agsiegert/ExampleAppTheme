import BlogPostPreviewList from 'components/blog_post/blog_post_preview_list';

Scrivito.provideComponent('BlogOverviewWidget', ({ widget }) =>
  <BlogPostPreviewList
    maxItems={ widget.get('maxItems') }
    author={ widget.get('author') }
    tag={ widget.get('tag') || Scrivito.currentPageParams().tag }
  />
);
