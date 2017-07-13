const SearchBox = Scrivito.createComponent(({ toggleSearch }) =>
  <div className="search-box">
    <div className="input-group">
      <input className="form-control" placeholder="Search..." />
      <div className="input-group-btn">
        <button type="button" className="btn btn-search">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        <button type="button" className="btn btn-clear-white" onClick={ toggleSearch }>
          <i className="fa fa-times-circle " aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
);

const SearchIcon = Scrivito.createComponent(({ toggleSearch }) =>
  <span className="navbar-search-toggle" onClick={ toggleSearch }>
    <i className="fa fa-search" aria-hidden="true"></i>
  </span>
);

export { SearchBox, SearchIcon };
