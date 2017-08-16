function BlogPostTagList({ tags }) {
  return (
    <section>
      <div className="container">
        <div className="nav-centered">
          <ul className="nav nav-pills">
            {
              tags.map(tag => <li key={ tag }><a href="#">{ tag }</a></li>)
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Scrivito.React.connect(BlogPostTagList);
