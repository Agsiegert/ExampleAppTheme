import twoDigitNumber from 'utils/two_digit_number';

function BlogPostDate({ post }) {
  const date = post.get('publishedAt');

  if (!date) { return null; }
  const month = date.getMonth() + 1; // getMonth return 0 to 11.
  const dayOfMonth = date.getDate(); // getDate returns 1 to 31.

  return (
    <time className="timeline-badge" dateTime={ date.toISOString() }>
      { twoDigitNumber(month) }/{ twoDigitNumber(dayOfMonth) }
    </time>
  );
}

export default Scrivito.React.connect(BlogPostDate);
