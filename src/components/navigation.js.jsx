import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import Logo from './navigation/logo';
import Navbar from './navigation/navbar';
import NavigationSection from './navigation/navigation_section';
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
    const { transparent, bgColor } = currentPageNavigationStyle();

    const topSectionClassNames = ['navbar-fixed'];
    if (this.state.scrolled) {
      topSectionClassNames.push('scrolled');
    }

    if (transparent) {
      topSectionClassNames.push('bg-dark-image');
    } else {
      topSectionClassNames.push('bg-white');
    }

    const bootstrapNavbarClassNames = [];
    if (this.state.showSearch) {
      bootstrapNavbarClassNames.push('show-search');
    }
    if (bgColor === 'dark') {
      bootstrapNavbarClassNames.push('navbar-transparent-dark');
    }

    const topSectionStyle = {};
    if (transparent) {
      const navigationBackgroundImage = Scrivito.currentPage().get('navigationBackgroundImage');
      if (navigationBackgroundImage) {
        topSectionClassNames.push('full-height-center');
        const backgroundUrl = fullWidthTransformedUrl(navigationBackgroundImage);
        topSectionStyle.background = [
          'linear-gradient(rgba(46, 53, 60, 0.7)',
          'rgba(46, 53, 60, 0.7))',
          `url(${backgroundUrl}) no-repeat center / cover`,
        ].join(', ');
      }
    }

    return (
      <section className={ topSectionClassNames.join(' ') } style={ topSectionStyle }>
        <BootstrapNavbar collapseOnSelect fixedTop
            className={ bootstrapNavbarClassNames.join(' ') }>
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
        <NavigationSection show={ transparent } />
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

function devicePixelRatio() {
  return window.devicePixelRatio || 1;
}

function fullScreenWidthPixels() {
  const screenWidth = window.screen.width;

  return screenWidth * devicePixelRatio();
}

function fullWidthTransformedUrl(obj) {
  const binary = obj.get('blob');
  // The binary service never scales up, so we transform all images, regardless of their width.
  const transformedBinary = binary.transform({ width: fullScreenWidthPixels() });

  return transformedBinary.url;
}

export default Navigation;
