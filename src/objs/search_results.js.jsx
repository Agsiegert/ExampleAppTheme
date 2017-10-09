import SearchInput from './search_results/search_input';
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
