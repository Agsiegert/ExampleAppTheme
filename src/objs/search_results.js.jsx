import ShowMoreButton from './search_results/show_more_button';
import SearchInput from './search_results/search_input';
import SearchResultItem from './search_results/search_result_item';
import SearchResultsTagList from './search_results/search_results_tag_list';

const blacklistObjClasses = [
  'Author',
  'Download',
  'Image',
  'SearchResults',
  'Video',
];

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

function globalSearch(q) {
  return Scrivito.Obj.where('*', 'contains', q)
    .andNot('_objClass', 'equals', blacklistObjClasses);
}

class SearchResultsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxItems: 10 };

    this.incrementMaxItems = this.incrementMaxItems.bind(this);
  }

  render() {
    let search = globalSearch(this.props.params.q);

    // make sure, that tags are calculated _before_ limiting to specific tag.
    const tags = search.facet('tags').map(tag => tag.name());

    if (this.props.params.tag) {
      search = search.and('tags', 'equals', this.props.params.tag);
    }

    // TODO: replace with faster method,
    // once https://github.com/infopark/rails_connector/issues/3482 is resolved
    const totalCount = [...search].length;

    return (
      <div>
        <SearchInput params={ this.props.params } />

        <section className="bg-white">
          <div className="container">
            <h1 className="h2 border-bottom">
              { totalCount } search result{ totalCount !== 1 && 's' }
            </h1>
            <SearchResultsTagList tags={ tags } params={ this.props.params } />
          </div>
        </section>

        <section className="bg-white no-padding">
          <div className="container">
            {
              search.take(this.state.maxItems).map((resultItem, index) =>
                <SearchResultItem
                  resultItem={ resultItem }
                  q={ this.props.params.q }
                  key={ index }
                />
              )
            }
          </div>
          <ShowMoreButton
            totalCount={ totalCount }
            currentMaxItems={ this.state.maxItems }
            onClick={ this.incrementMaxItems }
          />
          <br />
          <br />
        </section>
      </div>
    );
  }

  incrementMaxItems() {
    this.setState({ maxItems: this.state.maxItems + 10 });
  }
}

Scrivito.provideComponent(SearchResults, SearchResultsComponent);

export default SearchResults;
