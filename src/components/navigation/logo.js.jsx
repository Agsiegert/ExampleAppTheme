function logoStyle({ scrolled, navigationStyle }) {
  let logoVersion;
  if (scrolled) {
    logoVersion = 'logoDark';
  } else if (navigationStyle === 'transparentDark') {
    logoVersion = 'logoWhite';
  } else {
    logoVersion = 'logoDark';
  }

  const logoObj = Scrivito.Obj.root().get(logoVersion);
  if (!logoObj) { return {}; }

  const logoUrl = logoObj.get('blob').url();

  return {
    background: `rgba(0, 0, 0, 0) url(${logoUrl}) no-repeat scroll center center / contain`,
  };
}

function Logo({ scrolled, navigationStyle }) {
  if (!Scrivito.Obj.root()) { return null; }

  return (
    <Scrivito.React.Link
        to={ Scrivito.Obj.root() }
        className="navbar-brand"
        style={ logoStyle({ scrolled, navigationStyle }) }>
    </Scrivito.React.Link>
  );
}

export default Scrivito.React.connect(Logo);
