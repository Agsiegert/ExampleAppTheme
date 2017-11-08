import navigateToBlogWithTag from 'utils/navigate_to_blog_with_tag';

function BlogPostTagList({ tags }) {
  return (
    <section>
      <div className="container">
        <div className="nav-centered">
          <ul className="nav nav-pills">
            {
              tags.map(tag =>
                <li key={ tag }>
                  <a
                    href="#"
                    onClick={
                      e => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigateToBlogWithTag(tag);
                      }
                    }
                  >
                    { tag }
                  </a>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Scrivito.connect(BlogPostTagList);
