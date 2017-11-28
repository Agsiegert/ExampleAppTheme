import Fuse from 'fuse.js';
import IconComponent from 'Components/Icon';
import fontAwesomeIcons from './fontAwesomeIcons.json';

class IconEditorTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchIcon: '',
    };

    this.updateSearchIcon = this.updateSearchIcon.bind(this);
  }

  updateSearchIcon(searchIcon) {
    if (this.state.searchIcon !== searchIcon) {
      this.setState({ searchIcon });
    }
  }

  render() {
    const widget = this.props.widget;

    return (
      <div className="icon-editor-tab">
        <div className="scrivito_detail_content">
          <IconPreview
            widget={ widget }
          />
          <div
            key="label"
            className="scrivito_detail_label"
          >
            <span>Icon</span>
          </div>
          <IconSearch
            searchIcon={ this.state.searchIcon }
            updateSearchIcon={ this.updateSearchIcon }
          />
          <IconSearchResults
            widget={ widget }
            searchIcon={ this.state.searchIcon }
          />
          <AllIcons
            widget={ widget }
            hide={ this.state.searchIcon.length }
          />
        </div>
      </div>
    );
  }
}

Scrivito.registerComponent('IconEditorTab', IconEditorTab);

const IconPreview = Scrivito.connect(({ widget }) => {
  return [
    <div key="label" className="scrivito_detail_label">
      <span>Preview</span>
    </div>,
    <IconComponent
      key="thePreviewIcon"
      icon={ widget.get('icon') }
      size={ widget.get('size') }
    />,
  ];
});

const IconSearch = ({ updateSearchIcon, searchIcon }) => {
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
        value={ searchIcon }
        onChange={ e => updateSearchIcon(e.target.value) }
      />
      <ClearSearchButton updateSearchIcon={ updateSearchIcon } searchIcon={ searchIcon } />
  </div>
  );
};

const ClearSearchButton = ({ updateSearchIcon, searchIcon }) => {
  if (!searchIcon.length) { return null; }

  return (
    <a
      id="search-clear"
      href="#"
      className="fa fa-times-circle"
      aria-hidden="true"
      onClick={
        e => {
          e.preventDefault();
          e.stopPropagation();
          updateSearchIcon('');
        }
      }
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

const IconSearchResults = ({ searchIcon, widget }) => {
  if (!searchIcon.length) { return null; }

  const results = fuse.search(searchIcon);

  return (
    <div id="search-results">
      <div key="label" className="scrivito_detail_label">
        <span>
          { `Search for '${searchIcon}'` }
        </span>
      </div>
      <div className="row">
        {
          results.map((result, index) => {
            const icon = result.item;

            return <SingleIcon
              key={ `${icon.id}${index}` }
              icon={ icon }
              widget={ widget }
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

const AllIcons = ({ widget, hide }) => {
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
                    widget={ widget }
                  />)
              }
            </div>
          </section>
        )
      }
    </div>
  );
};

const SingleIcon = Scrivito.connect(({ icon, widget }) => {
  const cssIcon = `fa-${icon.id}`;
  const aClassNames = [];
  if (widget.get('icon') === `fa-${icon.id}`) {
    aClassNames.push('active');
  }

  return (
    <div className="fa-hover col-md-3 col-sm-4">
      <a
        href="#"
        className={ aClassNames.join(' ') }
        onClick={
          e => {
            e.preventDefault();
            e.stopPropagation();
            widget.update({ icon: cssIcon });
          }
        }
      >
        <IconComponent icon={ cssIcon } />
        <span className="sr-only">Example of </span>
        { icon.name }
      </a>
    </div>
  );
});
