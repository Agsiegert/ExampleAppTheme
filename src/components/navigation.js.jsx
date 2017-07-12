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
            <div id="navbar" className="collapse navbar-collapse">
              <Scrivito.React.ChildList
                className="nav navbar-nav navbar-right"
                parent={ Scrivito.Obj.root() }
                renderChild={ renderChild }
              />
            </div>
          </div>
        </nav>
      </section>
    );
  },
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
