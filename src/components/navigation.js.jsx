import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import Navbar from './navigation/navbar';
import Logo from './navigation/logo';
import { SearchBox, SearchIcon } from './navigation/search';

const Navigation = Scrivito.createComponent({
  getInitialState() {
    return {
      scrolled: false,
      showSearch: false,
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

  toggleSearch() {
    this.setState({ showSearch: !this.state.showSearch });
  },

  render() {
    let topSectionClassName = 'navbar-fixed';
    if (this.state.scrolled) {
      topSectionClassName += ' scrolled';
    }
    const { transparent, bgColor } = currentPageNavigationStyle();

    if (transparent) {
      topSectionClassName += ' bg-dark-image full-height-center';
    } else {
      topSectionClassName += ' bg-white';
    }

    return (
      <section className={ topSectionClassName }>
        <BootstrapNavbar collapseOnSelect fixedTop
            className={ this.state.showSearch && 'show-search' }>
          <SearchBox toggleSearch={ this.toggleSearch } />

          <BootstrapNavbar.Header>
            <BootstrapNavbar.Toggle />
            <Logo scrolled={ this.state.scrolled } bgColor={ bgColor } />
            <SearchIcon toggleSearch={ this.toggleSearch } />
          </BootstrapNavbar.Header>

          <BootstrapNavbar.Collapse>
            <Navbar />
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </section>
    );
  },
});

function currentPageNavigationStyle() {
  let currentNavigationStyle;

  if (Scrivito.currentPage()) {
    currentNavigationStyle = Scrivito.currentPage().get('navigationStyle');
  }

  switch (currentNavigationStyle) {
    case 'solidWhite': return { transparent: false, bgColor: 'white' };
    case 'transparentDark': return { transparent: true, bgColor: 'dark' };
    default: return { transparent: false, bgColor: 'white' };
  }
}

export default Navigation;
