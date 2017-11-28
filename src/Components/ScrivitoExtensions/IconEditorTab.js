import Fuse from 'fuse.js';
import IconComponent from 'Components/Icon';
import IconWidgetComponent from 'Widgets/IconWidget/IconWidgetComponent';
import fontAwesomeIcons from './fontAwesomeIcons.json';

class IconEditorTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };

    this.setSearchValue = this.setSearchValue.bind(this);
    this.setWidgetIcon = this.setWidgetIcon.bind(this);
  }

  setSearchValue(event, searchValue) {
    event.preventDefault();
    event.stopPropagation();

    if (this.state.searchValue !== searchValue) {
      this.setState({ searchValue });
    }
  }

  setWidgetIcon(event, icon) {
    event.preventDefault();
    event.stopPropagation();

    this.props.widget.update({ icon });
  }

  render() {
    const widget = this.props.widget;
    const currentIcon = widget.get('icon');

    return (
      <div className="icon-editor-tab">
        <div className="scrivito_detail_content">
          <div className="scrivito_detail_label">
            <span>Preview</span>
          </div>
          <IconWidgetComponent key="thePreviewIcon" widget={ widget } />
          <div
            key="label"
            className="scrivito_detail_label"
          >
            <span>Icon</span>
          </div>
          <IconSearch
            searchValue={ this.state.searchValue }
            setSearchValue={ this.setSearchValue }
          />
          <IconSearchResults
            currentIcon={ currentIcon }
            searchValue={ this.state.searchValue }
            setWidgetIcon={ this.setWidgetIcon }
          />
          <AllIcons
            currentIcon={ currentIcon }
            hide={ this.state.searchValue.length }
            setWidgetIcon={ this.setWidgetIcon }
          />
        </div>
      </div>
    );
  }
}

// TODO: Remove Scrivito.connect,
// once https://github.com/infopark/rails_connector/issues/3636 is resolved.
Scrivito.registerComponent('IconEditorTab', Scrivito.connect(IconEditorTab));

const IconSearch = ({ setSearchValue, searchValue }) => {
  return (
    <div id="search">
      <label htmlFor="search-input">
        <i className="fa fa-search" aria-hidden="true"></i>
        <span className="sr-only">Search icons</span>
      </label>
      <input
        id="search-input"
        className="form-control input-lg"
        placeholder="Search icons"
        autoComplete="off"
        spellCheck="false"
        autoCorrect="off"
        tabIndex="1"
        value={ searchValue }
        onChange={ e => setSearchValue(e, e.target.value) }
      />
      <ClearSearchButton setSearchValue={ setSearchValue } searchValue={ searchValue } />
  </div>
  );
};

const ClearSearchButton = ({ setSearchValue, searchValue }) => {
  if (!searchValue.length) { return null; }

  return (
    <a
      id="search-clear"
      href="#"
      className="fa fa-times-circle"
      aria-hidden="true"
      onClick={ e => setSearchValue(e, '') }
    >
      <span className="sr-only">Clear search</span>
    </a>
  );
};

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
  ],
};
const fuse = new Fuse(fontAwesomeIcons, fuseOptions);

const IconSearchResults = ({ searchValue, setWidgetIcon, currentIcon }) => {
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
};

const categoryMap = {};
fontAwesomeIcons.forEach(
  icon => icon.categories.forEach(
    category => {
      categoryMap[category] = categoryMap[category] || new Set();
      categoryMap[category].add(icon);
    }
  )
);

const AllIcons = ({ setWidgetIcon, currentIcon, hide }) => {
  if (hide) { return null; }

  return (
    <div id="icons">
      {
        Object.entries(categoryMap).map(([category, icons], index) =>
          <section key={ `${category}${index}` }>
            <i>{ category }</i>
            <div className="row">
              {
                [...icons].map((icon, innerIndex) =>
                  <SingleIcon
                    key={ `${icon.id}${innerIndex}` }
                    icon={ icon }
                    currentIcon={ currentIcon }
                    setWidgetIcon={ setWidgetIcon }
                  />)
              }
            </div>
          </section>
        )
      }
    </div>
  );
};

function SingleIcon({ icon, setWidgetIcon, currentIcon }) {
  const cssIcon = `fa-${icon.id}`;
  const aClassNames = [];
  if (currentIcon === `fa-${icon.id}`) {
    aClassNames.push('active');
  }

  return (
    <div className="fa-hover col-md-3 col-sm-4">
      <a
        href="#"
        className={ aClassNames.join(' ') }
        onClick={ e => setWidgetIcon(e, cssIcon) }
      >
        <IconComponent icon={ cssIcon } />
        <span className="sr-only">Example of </span>
        { icon.name }
      </a>
    </div>
  );
}
