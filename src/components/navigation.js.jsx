const Navigation = Scrivito.createComponent({
  getInitialState() {
    return {
      scrolled: false,
    };
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll(event) {
    const scrollTop = event.srcElement.body.scrollTop;
    const scrolledToBe = scrollTop !== 0;

    if (this.state.scrolled !== scrolledToBe) {
      // only set state, if needed. Otherwise a render will be triggered on _every_ scroll.
      this.setState({ scrolled: scrolledToBe });
    }
  },

  render() {
    let topSectionClassName = 'bg-white navbar-fixed';
    if (this.state.scrolled) {
      topSectionClassName += ' scrolled';
    }

    return (
      <section className={ topSectionClassName }>
        <nav className="navbar navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Scrivito.React.Link to={ Scrivito.Obj.root() } className="navbar-brand">
                <img src={ Scrivito.Obj.root().get('logo').get('blob').url } />
              </Scrivito.React.Link>
              <span className="navbar-search-toggle">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
            <NavBar />
          </div>
        </nav>
      </section>
    );
  },
});

const NavBar = Scrivito.createComponent(() => {
  return (
    <div id="navbar" className="collapse navbar-collapse">
      <Scrivito.React.ChildList
        className="nav navbar-nav navbar-right"
        parent={ Scrivito.Obj.root() }
        renderChild={ renderChild }
      />
    </div>
  );
});


function renderChild(child) {
  if (child.children.length === 0) {
    return renderSingleChild(child);
  }

  return (
    <li className="dropdown">
      <Scrivito.React.Link
          to={ child }
          className="dropdown-toggle"
          role="button"
          aria-haspopup="true"
          aria-expanded="false">
        { child.get('title') }<span className="caret"></span>
      </Scrivito.React.Link>
      <span className="mobile-toggle">
        <i className="fa fa-angle-down" aria-hidden="true"></i>
      </span>
      <Scrivito.React.ChildList
        className="dropdown-menu"
        parent={ child }
        renderChild={ renderSingleChild }
      />
    </li>
  );
}

function renderSingleChild(child) {
  return (<li>
    <Scrivito.React.Link to={ child }>
      { child.get('title') }
    </Scrivito.React.Link>
  </li>);
}

export default Navigation;
