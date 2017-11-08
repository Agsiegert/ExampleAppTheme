import BlogPost from 'Objs/BlogPost/BlogPostObjClass';
import navigateToBlogWithTag from 'utils/navigate_to_blog_with_tag';
import TagList from 'Components/tag_list';

Scrivito.provideComponent('Blog', ({ page, params }) => {
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
