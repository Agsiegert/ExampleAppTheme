import BlogPostAuthor from 'Components/BlogPost/blog_post_author';
import BlogPostMorePosts from 'Components/BlogPost/blog_post_more_posts';
import BlogPostNavigation from 'Components/BlogPost/blog_post_navigation';
import BlogPostTagList from 'Components/BlogPost/blog_post_tag_list';

Scrivito.provideComponent('BlogPost', ({ page }) =>
  <div>
    <BlogPostNavigation currentPost={ page }/>
    <section className='bg-white'>
      <div className='container'>
        <Scrivito.ContentTag tag="h1" className="h2" content={ page } attribute="title" />
        <Scrivito.ContentTag tag="h2" className="h4" content={ page } attribute="subtitle" />
      </div>
    </section>
    <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
    <BlogPostAuthor author={ page.get('author') } />
    <BlogPostTagList tags={ page.get('tags') } />
    <BlogPostMorePosts author={ page.get('author') } />
  </div>
);
