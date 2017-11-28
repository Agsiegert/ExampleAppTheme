import Fuse from 'fuse.js';
import fontAwesomeIcons from './fontAwesomeIcons';
import SingleIcon from './SingleIcon';

function IconSearchResults({ searchValue, setWidgetIcon, currentIcon }) {
  if (!searchValue.length) { return null; }

  const results = fuse.search(searchValue);

  return (
    <div id="search-results">
      <div key="label" className="scrivito_detail_label">
        <span>
          { `Search for '${searchValue}'` }
        </span>
      </div>
      <div className="row">
        {
          results.map((result, index) => {
            const icon = result.item;

            return <SingleIcon
              key={ `${icon.id}${index}` }
              icon={ icon }
              currentIcon={ currentIcon }
              setWidgetIcon={ setWidgetIcon }
            />;
          })
        }
      </div>
    </div>
  );
}

const fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 35,
  minMatchCharLength: 1,
  keys: [
    'name',
    'id',
    'filter',
    'aliases',
  ],
};
const fuse = new Fuse(fontAwesomeIcons, fuseOptions);

export default IconSearchResults;
