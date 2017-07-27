function twoDigitNumber(number) {
  return (`0${number}`).slice(-2);
}

const BlogPostDate = Scrivito.createComponent(({ date }) => {
  if (!date) { return null; }
  const month = date.getMonth() + 1; // getMonth return 0 to 11.
  const dayOfMonth = date.getDate(); // getDate returns 1 to 31.

  return (
    <time dateTime={ date.toISOString() }>
      { twoDigitNumber(month) }/{ twoDigitNumber(dayOfMonth) }
    </time>
  );
});

export default BlogPostDate;
