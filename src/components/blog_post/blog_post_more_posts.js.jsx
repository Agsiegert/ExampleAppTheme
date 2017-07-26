const BlogPostMorePosts = Scrivito.createComponent(({ author }) => {
  if (!author) { return null; }
  if (author.objClass !== 'Author') { return null; }

  return (
    <section className="bg-white">
      <div className="container gutter0">
        <h1 className="h2 border-bottom">More great blog posts from { author.get('name') }</h1>
      </div>
    </section>
  );
});

export default BlogPostMorePosts;
