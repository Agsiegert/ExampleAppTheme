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

    // TODO: replace with faster method,
    // once https://github.com/infopark/rails_connector/issues/3482 is resolved
    const totalCount = [...search].length;

    return (
      <div>
        <SearchInput params={ this.props.params } />

        <section className="bg-white">
          <div className="container">
            <h1 className="h2 border-bottom">{ totalCount } search results</h1>
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
