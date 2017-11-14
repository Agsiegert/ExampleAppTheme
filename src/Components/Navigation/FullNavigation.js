import BootstrapNavbar from 'react-bootstrap/lib/Navbar';
import Logo from './Logo';
import Navbar from './Navbar';
import { SearchBox, SearchIcon } from './Search';

function FullNavigation(
  { bootstrapNavbarClassNames, toggleSearch, scrolled, navigationStyle, showSearch }
) {
  return (
    <BootstrapNavbar
      collapseOnSelect
      fixedTop
      className={ bootstrapNavbarClassNames.join(' ') }
    >
      <SearchBox toggleSearch={ toggleSearch } showSearch={ showSearch } />

      <BootstrapNavbar.Header>
        <BootstrapNavbar.Toggle />
        <Logo scrolled={ scrolled } navigationStyle={ navigationStyle } />
        <SearchIcon toggleSearch={ toggleSearch } />
      </BootstrapNavbar.Header>

      <BootstrapNavbar.Collapse>
        <Navbar />
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}


export default FullNavigation;
