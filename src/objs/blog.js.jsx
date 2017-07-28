import BlogPost from 'objs/blog_post';
import BlogPostPreviewList from 'components/blog_post/blog_post_preview_list';
import textExtractFromWidgetlist from 'utils/text_extract_from_widgetlist';

const BaseBlog = Scrivito.createObjClass({
  name: 'Blog',
  attributes: {
    title: 'string',
    navigationBackgroundImage: 'reference',
    body: ['widgetlist', { only: 'SectionWidget' }],
  },
});

class Blog extends BaseBlog {
  navigationOptions() {
    return {
      navigationStyle: 'transparentDark',
      backgroundImage: this.get('navigationBackgroundImage') || null,
      heigthClassName: null,
    };
  }

  textExtract() {
    return textExtractFromWidgetlist(this.get('body'));
  }
}

Scrivito.registerClass('Blog', Blog);

Scrivito.provideUiConfig(Blog, {
  title: 'Blog',
  description: 'A Blog.',
  attributes: {
    title: {
      title: 'Title',
      description: 'Title of the blog. Only used for the navigation',
    },
    navigationBackgroundImage: {
      title: 'Navigation Background Image',
      description: 'The background image of the navigation',
    },
  },
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(Blog, obj =>
  <div>
    <TagList />
    <Scrivito.React.Content className="div" content={ obj } attribute="body" />
    <section className="bg-white no-padding">
      <div className="container gutter0">
        <BlogPostPreviewList />
      </div>
    </section>
  </div>
);

const TagList = Scrivito.createComponent(() => {
  const tags = [...BlogPost.all().facet('tags')].map(facet => facet.name);

  return (
    <section className="bg-nav-content">
      <div className="container">
        <div className="nav-centered">
          <ul className="nav nav-pills">
            <li role="presentation" className="active"><a href="#">All</a></li>
            {
              tags.map(tag =>
                <li role="presentation" key={ tag }>
                  <a href="#">{ tag }</a>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Blog;
