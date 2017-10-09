import SearchResultItem from './search_results/search_result_item';

const SearchResults = Scrivito.createObjClass({
  name: 'SearchResults',
  attributes: {
    navigationBackgroundImage: 'reference',
  },
});

Scrivito.provideEditingConfig(SearchResults, {
  title: 'Search Results',
  description: 'A search results page',
  attributesConfig: {
    navigationBackgroundImage: {
      title: 'Navigation Background Image',
      description: 'The background image of the navigation',
    },
  },
});

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      q: props.params.q,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.q !== nextProps.params.q) {
      this.setState({ q: nextProps.params.q });
    }
  }

  render() {
    return (
      <section className="bg-nav-content">
        <div className="container">
          <div className="nav-centered">
            <form onSubmit={ e => this.handleSubmit(e) } >
              <div className="input-group">
                <input
                  className="form-control"
                  placeholder="Search for..."
                  value={ this.state.q }
                  onChange={ e => this.handleChange(e) }
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-primary"
                    type="submit"
                  >
                    <span className="hidden-xs">Search again</span>
                    <i className="fa fa-search fa-1" aria-hidden="true" />
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  handleChange(event) {
    this.setState({ q: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    Scrivito.navigateTo(() => Scrivito.currentPage(), { q: this.state.q });
  }
}

class SearchResultsComponent extends React.Component {
  render() {
    const search = Scrivito.Obj.where('*', 'contains', this.props.params.q)
      .andNot('_objClass', 'equals', ['Author', 'Video', 'Image']);

    return (
      <div>
        <SearchInput params={ this.props.params } />

        <section className="bg-white">
          <div className="container">
            <h1 className="h2 border-bottom">XY search results</h1>
            {/* TODO: Tag selection */}
          </div>
        </section>

        <section className="bg-white no-padding">
          <div className="container">
            {
              search.take(10).map((resultItem, index) =>
                <SearchResultItem
                  resultItem={ resultItem }
                  q={ this.props.params.q }
                  key={ index }
                />
              )
            }
          </div>
        </section>
      </div>
    );
  }
}

Scrivito.provideComponent(SearchResults, SearchResultsComponent);

export default SearchResults;
