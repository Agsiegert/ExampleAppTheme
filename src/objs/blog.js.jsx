import BlogPost from 'objs/blog_post';
import navigateToBlogWithTag from 'utils/navigate_to_blog_with_tag';
import TagList from 'components/tag_list';
import { registerTextExtract } from 'utils/text_extract_registry';

const Blog = Scrivito.createObjClass({
  name: 'Blog',
  attributes: {
    title: 'string',
    navigationBackgroundImage: 'reference',
    body: ['widgetlist', { only: 'SectionWidget' }],
  },
});

registerTextExtract('Blog', [
  { attribute: 'body', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(Blog, {
  title: 'Blog',
  description: 'A Blog',
  attributesConfig: {
    title: {
      title: 'Title',
      description: 'Title of the blog. Only used for the navigation.',
    },
    navigationBackgroundImage: {
      title: 'Navigation Background Image',
      description: 'The background image of the navigation.',
    },
  },
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(Blog, ({ page, params }) => {
  const tags = [...BlogPost.all().facet('tags')].map(facet => facet.name());
  const currentTag = params.tag;

  return (
    <div>
      <TagList
        tags={ tags }
        showTags={ true }
        setTag={ navigateToBlogWithTag }
        currentTag={ currentTag }
      />
      <Scrivito.ContentTag className="div" content={ page } attribute="body" />
    </div>
  );
});

export default Blog;
