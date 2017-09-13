function Navbar() {
  return (
    <Scrivito.React.ChildList
      className="nav navbar-nav navbar-right"
      parent={ Scrivito.Obj.root() }
      renderChild={ renderChild }
    />
  );
}

function renderChild(child) {
  if (child.children.length === 0) {
    return renderSingleChild(child);
  }

  return <Dropdown child={ child } />;
}

function renderSingleChild(child) {
  return (<li className={ isActive(child) && 'active' }>
    <Scrivito.React.Link to={ child }>
      { child.get('title') }
    </Scrivito.React.Link>
  </li>);
}

class BaseDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const child = this.props.child;

    const classNames = ['dropdown'];
    if (this.state.open) { classNames.push('open'); }
    if (isActive(child)) { classNames.push('active'); }

    return (
      <li className={ classNames.join(' ') }>
        <Scrivito.React.Link
            to={ child }
            className="dropdown-toggle"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">
          { child.get('title') }<span className="caret"></span>
        </Scrivito.React.Link>
        <span className="mobile-toggle" onClick={ this.toggleOpen }>
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
}

const Dropdown = Scrivito.React.connect(BaseDropdown);

function isActive(page) {
  if (!Scrivito.currentPage()) { return false; }

  const currentPath = Scrivito.currentPage().path();
  if (currentPath) {
    return currentPath.startsWith(page.path());
  }

  if (Scrivito.currentPage().objClass === 'BlogPost') {
    return page.objClass === 'Blog';
  }

  return false;
}

export default Scrivito.React.connect(Navbar);
