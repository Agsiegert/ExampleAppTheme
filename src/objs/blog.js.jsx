import BlogPost from 'objs/blog_post';
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
      heigthClassName: 'min-height',
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
  </div>
);

const TagList = Scrivito.React.connect(() => {
  const tags = [...BlogPost.all().facet('tags')].map(facet => facet.name);

  return (
    <section className="bg-nav-content">
      <div className="container">
        <div className="nav-centered select-icon">
          <ul className="nav nav-pills hidden-xs">
            <li role="presentation" className="active"><a href="#">All</a></li>
            {
              tags.map(tag =>
                <li role="presentation" key={ tag }>
                  <a href="#">{ tag }</a>
                </li>
              )
            }
          </ul>
          <select className="visible-xs">
            <option value="All">All</option>
            {
              tags.map(tag => <option key={ tag } value={ tag }>{ tag }</option>)
            }
          </select>
        </div>
      </div>
    </section>
  );
});

export default Blog;
