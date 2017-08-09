import twoDigitNumber from 'utils/two_digit_number';
import { take } from 'wu';
import BlogPostDate from './blog_post_date';

const MONTH_MAPPING = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const BlogPostPreviewList = Scrivito.React.connect(({ maxItems, author, tag }) => {
  let blogPosts = Scrivito.getClass('BlogPost').all().order('publishedAt', 'desc');
  if (author) {
    blogPosts = blogPosts.and('author', 'refersTo', author);
  }
  if (tag) {
    blogPosts = blogPosts.and('tags', 'equals', tag);
  }

  let posts;
  if (maxItems) {
    posts = [...take(maxItems, blogPosts.batchSize(maxItems))];
  } else {
    posts = [...blogPosts];
  }

  let dateHeadline = null;
  const listElements = [];
  posts.forEach(post => {
    const publishedAt = post.get('publishedAt');
    if (publishedAt && dateHeadline !== humanReadableMonth(publishedAt)) {
      dateHeadline = humanReadableMonth(publishedAt);
      listElements.push(<MonthHeadline date={ publishedAt } key={ publishedAt }/>);
    }

    listElements.push(<BlogPostPreview key={ post.id } post={ post } />);
  });

  return (
    <ul className="timeline">
      { listElements }
      <li className="clearfix" style={ { float: 'none' } }></li>
    </ul>
  );
});

const MonthHeadline = Scrivito.React.connect(({ date }) =>
  <li className="timeline-divider">
    <time dateTime={ yearMonthCombination(date) }>
      { humanReadableMonth(date) }
    </time>
  </li>
);

const BlogPostPreview = Scrivito.React.connect(({ post }) => {
  return (
    <li>
      <BlogPostDate post={ post } />
      <div className="timeline-panel">
        <div className="timeline-body">
          <BlogPostTitleImage post={ post } />
          <h3>
            <Scrivito.React.Link to={ post }>
              { post.get('title') }
            </Scrivito.React.Link>
          </h3>
          <h4>{ post.get('subtitle') }</h4>
          <p>{ post.textExtract().substring(0, 300) }...</p>
        </div>
        <div className="timeline-footer">
          <Scrivito.React.Link to={ post } className="btn btn-clear">
            Read more<i className="fa fa-angle-right fa-4" aria-hidden="true"></i>
          </Scrivito.React.Link>
        </div>
      </div>
    </li>
  );
});

const BlogPostTitleImage = Scrivito.React.connect(({ post }) => {
  const titleImage = post.get('titleImage');
  if (!titleImage) { return null; }

  const image = titleImage.get('blob').transform({ width: 1000 });

  return (<img src={ image.url } className="img-responsive" />);
});

function humanReadableMonth(date) {
  return `${MONTH_MAPPING[date.getMonth()]} ${date.getFullYear()}`;
}

function yearMonthCombination(date) {
  return `${date.getFullYear()}-${twoDigitNumber(date.getMonth())}`;
}

export default BlogPostPreviewList;
