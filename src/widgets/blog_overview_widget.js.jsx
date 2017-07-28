import BlogPostPreviewList from 'components/blog_post/blog_post_preview_list';

const BlogOverviewWidget = Scrivito.createWidgetClass({
  name: 'BlogOverviewWidget',
});

Scrivito.provideUiConfig(BlogOverviewWidget, {
  title: 'Blog Overview',
  description: 'A widget with up to four blog posts',
});

Scrivito.provideComponent(BlogOverviewWidget, () => <BlogPostPreviewList maxItems={ 5 }/>);

export default BlogOverviewWidget;
