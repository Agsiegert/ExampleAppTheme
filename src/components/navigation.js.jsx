import { Navbar as BootstrapNavbar } from 'react-bootstrap';

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
        <BootstrapNavbar collapseOnSelect fixedTop>
          <BootstrapNavbar.Header>
            <BootstrapNavbar.Toggle />
            <Scrivito.React.Link to={ Scrivito.Obj.root() } className="navbar-brand">
              <img src={ Scrivito.Obj.root().get('logo').get('blob').url } />
            </Scrivito.React.Link>
            <span className="navbar-search-toggle">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </BootstrapNavbar.Header>

          <BootstrapNavbar.Collapse>
            <Navbar />
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </section>
    );
  },
});

const Navbar = Scrivito.createComponent(() => {
  return (
    <Scrivito.React.ChildList
      className="nav navbar-nav navbar-right"
      parent={ Scrivito.Obj.root() }
      renderChild={ renderChild }
    />
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
