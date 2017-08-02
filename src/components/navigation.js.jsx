import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import Logo from './navigation/logo';
import Navbar from './navigation/navbar';
import NavigationSection from './navigation/navigation_section';
import { SearchBox, SearchIcon } from './navigation/search';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      showSearch: false,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // see https://stackoverflow.com/q/28633221/881759 for discussion about pageYOffset
    const scrollTop = event.currentTarget.pageYOffset;
    const scrolledToBe = scrollTop !== 0;

    if (this.state.scrolled !== scrolledToBe) {
      // only set state, if needed. Otherwise a render will be triggered on _every_ scroll.
      this.setState({ scrolled: scrolledToBe });
    }
  }

  toggleSearch() {
    this.setState({ showSearch: !this.state.showSearch });
  }

  render() {
    const {
      navigationStyle,
      backgroundImage,
      heigthClassName,
    } = currentPageNavigationOptions();

    const topSectionClassNames = ['navbar-fixed'];
    if (this.state.scrolled) {
      topSectionClassNames.push('scrolled');
    }

    if (navigationStyle === 'transparentDark') {
      topSectionClassNames.push('bg-dark-image');
    } else {
      topSectionClassNames.push('bg-white');
    }

    const bootstrapNavbarClassNames = [];
    if (this.state.showSearch) {
      bootstrapNavbarClassNames.push('show-search');
    }
    if (navigationStyle === 'transparentDark') {
      bootstrapNavbarClassNames.push('navbar-transparent');
    }

    const topSectionStyle = {};
    if (navigationStyle === 'transparentDark') {
      if (backgroundImage) {
        const backgroundUrl = fullWidthTransformedUrl(backgroundImage);
        topSectionStyle.background = [
          'linear-gradient(rgba(46, 53, 60, 0.7)',
          'rgba(46, 53, 60, 0.7))',
          `url(${backgroundUrl}) no-repeat center / cover`,
        ].join(', ');
      }
      if (heigthClassName) {
        topSectionClassNames.push(heigthClassName);
      }
    }

    return (
      <section className={ topSectionClassNames.join(' ') } style={ topSectionStyle }>
        <BootstrapNavbar collapseOnSelect fixedTop
            className={ bootstrapNavbarClassNames.join(' ') }>
          <SearchBox toggleSearch={ this.toggleSearch } />

          <BootstrapNavbar.Header>
            <BootstrapNavbar.Toggle />
            <Logo scrolled={ this.state.scrolled } navigationStyle={ navigationStyle } />
            <SearchIcon toggleSearch={ this.toggleSearch } />
          </BootstrapNavbar.Header>

          <BootstrapNavbar.Collapse>
            <Navbar />
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
        <NavigationSection />
      </section>
    );
  }
}

function currentPageNavigationOptions() {
  if (Scrivito.currentPage()) {
    if (Scrivito.currentPage().navigationOptions) {
      return Scrivito.currentPage().navigationOptions();
    }
  }

  return {
    navigationStyle: 'solidWhite',
    backgroundImage: null,
    heigthClassName: null,
  };
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

export default Scrivito.React.connect(Navigation);
