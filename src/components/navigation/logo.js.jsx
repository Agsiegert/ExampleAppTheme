function logoObj({ scrolled, navigationStyle }) {
  let logoVersion;
  if (scrolled) {
    logoVersion = 'logoDark';
  } else if (navigationStyle === 'transparentDark') {
    logoVersion = 'logoWhite';
  } else {
    logoVersion = 'logoDark';
  }

  return Scrivito.Obj.root().get(logoVersion);
}

function Logo({ scrolled, navigationStyle }) {
  if (!Scrivito.Obj.root()) { return null; }

  const logo = logoObj({ scrolled, navigationStyle });
  if (!logo) { return null; }

  return (
    <Scrivito.React.Link to={ Scrivito.Obj.root() } className="navbar-brand">
      <Scrivito.React.Image src={ logo } />
    </Scrivito.React.Link>
  );
}

export default Scrivito.React.connect(Logo);
