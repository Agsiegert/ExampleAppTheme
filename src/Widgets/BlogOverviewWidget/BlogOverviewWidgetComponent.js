import BlogPostPreviewList from 'Components/BlogPost/BlogPostPreviewList';

Scrivito.provideComponent('BlogOverviewWidget', ({ widget }) =>
  <BlogPostPreviewList
    maxItems={ widget.get('maxItems') }
    author={ widget.get('author') }
    tag={ widget.get('tag') || Scrivito.currentPageParams().tag }
  />
);
