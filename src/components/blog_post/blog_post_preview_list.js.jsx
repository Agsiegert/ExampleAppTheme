import twoDigitNumber from 'utils/two_digit_number';
import { groupBy } from 'underscore';
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

const BlogPostPreviewList = Scrivito.createComponent(({ blogPosts }) => {
  const posts = Array.from(blogPosts.order('publishedAt', 'desc'));

  const postsByMonth = groupBy(posts, post => {
    const publishedAt = post.get('publishedAt');
    if (!publishedAt) { return 'undated'; }
    return yearMonthCombination(publishedAt);
  });

  return (
    <div>
      {
        Object.values(postsByMonth).map(monthPosts =>
          <BlogPostMonthPreviewList key={ monthPosts[0].id } posts={ monthPosts } />)
      }
    </div>
  );
});

const BlogPostMonthPreviewList = Scrivito.createComponent(({ posts }) => {
  const firstDate = posts[0].get('publishedAt');
  const monthHumanReadable = `${MONTH_MAPPING[firstDate.getMonth()]} ${firstDate.getFullYear()}`;

  return (
    <section className="bg-white no-padding">
      <div className="container gutter0">
        <ul className="timeline">
          <li className="timeline-divider">
            <time dateTime={ yearMonthCombination(firstDate) }>
              { monthHumanReadable }
            </time>
          </li>
          {
            posts.map(post => <BlogPostPreview key={ post.id } post={ post } />)
          }
          <li className="clearfix" style={ { float: 'none' } }></li>
        </ul>
      </div>
    </section>
  );
});

const BlogPostPreview = Scrivito.createComponent(({ post }) => {
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

const BlogPostTitleImage = Scrivito.createComponent(({ post }) => {
  const titleImage = post.get('titleImage');
  if (!titleImage) { return null; }

  const image = titleImage.get('blob').transform({ width: 1000 });

  return (<img src={ image.url } className="img-responsive" />);
});

function yearMonthCombination(date) {
  return `${date.getFullYear()}-${twoDigitNumber(date.getMonth())}`;
}

export default BlogPostPreviewList;
