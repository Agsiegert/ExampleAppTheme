function logoStyle() {
  const logoUrl = Scrivito.Obj.root().get('logo').get('blob').url;

  return {
    background: `rgba(0, 0, 0, 0) url(${logoUrl}) no-repeat scroll center center / contain`,
  };
}

const Logo = Scrivito.createComponent(() =>
  <Scrivito.React.Link
      to={ Scrivito.Obj.root() }
      className="navbar-brand"
      style={ logoStyle() }>
  </Scrivito.React.Link>
);

export default Logo;
