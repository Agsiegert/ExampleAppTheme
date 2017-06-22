import { NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = Scrivito.createComponent(() => {
  return <Scrivito.React.ChildList
    className="nav nav-pills"
    parent={ Scrivito.Obj.root() }
    render={ renderChild }
  />;
});

function renderChild(child) {
  if (child.children.length > 0) {
    return <ChildrenDropdown page= { child } />;
  }

  return <li className={ isActive(child) ? 'active' : '' }>
    <Scrivito.React.Link to={ child }>
      { child.get('title') }
    </Scrivito.React.Link>
  </li>;
}

function isActive(child) {
  const currentId = (Scrivito.currentPage() || {}).id;

  return currentId === child.id;
}

const ChildrenDropdown = Scrivito.createComponent(({ page }) => {
  return <NavDropdown
      title={ page.get('title') }
      id="nav-dropdown"
      className={ isActive(page) && 'active' }>
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

  return <MenuItem { ...props } onClick={ onClick }>
    { page.get('title') }
  </MenuItem>;
});

export default Navigation;
