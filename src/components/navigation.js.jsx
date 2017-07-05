import { NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = Scrivito.createComponent(() => {
  return (
    <header>
      <Scrivito.React.Link to={ Scrivito.Obj.root() } className="logo">
        <img src={ Scrivito.Obj.root().get('logo').get('blob').url } />
      </Scrivito.React.Link>
      <Scrivito.React.ChildList
        className="nav nav-pills"
        parent={ Scrivito.Obj.root() }
        renderChild={ renderChild }
      />
    </header>
  );
});

function uppercaseTitle(child) {
  return child.get('title').toUpperCase();
}

function renderChild(child) {
  if (child.children.length > 0) {
    return <ChildrenDropdown page= { child } />;
  }

  return <li className={ isActiveSection(child) && 'active' }>
    <Scrivito.React.Link to={ child }>
      { uppercaseTitle(child) }
    </Scrivito.React.Link>
  </li>;
}

function isActiveSection(page) {
  if (!Scrivito.currentPage()) { return false; }

  const currentPath = Scrivito.currentPage().path;
  if (!currentPath || currentPath === '/') { return false; }

  return currentPath.startsWith(page.path);
}

function isActive(page) {
  if (!Scrivito.currentPage()) { return false; }

  return Scrivito.currentPage().id === page.id;
}

const ChildrenDropdown = Scrivito.createComponent(({ page }) => {
  return <NavDropdown
      title={ uppercaseTitle(page) }
      id="nav-dropdown"
      className={ isActiveSection(page) && 'active' }>
    <DropdownItem page={ page } key={ page.id } />
    {
      page.children.map(grandchild => {
        return <DropdownItem page={ grandchild } key={ grandchild.id } />;
      })
    }
  </NavDropdown>;
});

const DropdownItem = Scrivito.createComponent(({ page, ...props }) => {
  const onClick = () => Scrivito.navigateTo(() => page);

  return <MenuItem { ...props } onClick={ onClick } className={ isActive(page) && 'active' }>
    { page.get('title') }
  </MenuItem>;
});

export default Navigation;
