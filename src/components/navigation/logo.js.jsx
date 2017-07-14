function logoStyle({ scrolled, bgColor }) {
  let logoVersion;
  if (scrolled) {
    logoVersion = 'logoDark';
  } else if (bgColor === 'dark') {
    logoVersion = 'logoWhite';
  } else {
    logoVersion = 'logoDark';
  }

  const logoUrl = Scrivito.Obj.root().get(logoVersion).get('blob').url;

  return {
    background: `rgba(0, 0, 0, 0) url(${logoUrl}) no-repeat scroll center center / contain`,
  };
}

const Logo = Scrivito.createComponent(({ scrolled, bgColor }) =>
  <Scrivito.React.Link
      to={ Scrivito.Obj.root() }
      className="navbar-brand"
      style={ logoStyle({ scrolled, bgColor }) }>
  </Scrivito.React.Link>
);

export default Logo;
