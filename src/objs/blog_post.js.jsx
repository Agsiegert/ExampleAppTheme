import BlogPostAuthor from 'components/blog_post/blog_post_author';
import BlogPostMorePosts from 'components/blog_post/blog_post_more_posts';
import BlogPostNavigation from 'components/blog_post/blog_post_navigation';
import BlogPostTagList from 'components/blog_post/blog_post_tag_list';
import { registerTextExtract } from 'utils/text_extract_registry';
import { socialCardsAttributes, socialCardsCustomGroup } from './_social_cards_attributes';

const BlogPost = Scrivito.createObjClass({
  name: 'BlogPost',
  attributes: {
    author: 'reference',
    body: ['widgetlist', { only: 'SectionWidget' }],
    publishedAt: 'date',
    subtitle: 'string',
    tags: 'stringlist',
    title: 'string',
    titleImage: 'reference',
    ...socialCardsAttributes,
  },
});

registerTextExtract('BlogPost', [
  { attribute: 'body', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(BlogPost, {
  title: 'BlogPost',
  description: 'A Blog Post',
  attributesConfig: {
    author: {
      title: 'Author',
      description: 'The author of the blog post.',
    },
    publishedAt: {
      title: 'Published At',
      description: 'When will this blog post be published.',
    },
    titleImage: {
      title: 'Title image',
      description: 'The title image of the blog post.',
    },
    tags: {
      title: 'Tags',
      description: 'The tags of the blog post.',
    },
  },
  titleForContent: obj => obj.get('title'),
  propertiesGroups: [socialCardsCustomGroup],
});

Scrivito.provideComponent(BlogPost, ({ page }) =>
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

export default BlogPost;
