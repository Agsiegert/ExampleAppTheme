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
    let topSectionClassName = 'bg-white navbar-fixed';
    if (this.state.scrolled) {
      topSectionClassName += ' scrolled';
    }

    return (
      <section className={ topSectionClassName }>
        <BootstrapNavbar collapseOnSelect fixedTop
            className={ this.state.showSearch && 'show-search' }>
          <SearchBox toggleSearch={ this.toggleSearch } />

          <BootstrapNavbar.Header>
            <BootstrapNavbar.Toggle />
            <Logo />
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

export default Navigation;
