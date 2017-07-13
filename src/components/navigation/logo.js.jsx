const Logo = Scrivito.createComponent(() =>
  <Scrivito.React.Link
      to={ Scrivito.Obj.root() }
      className="navbar-brand">
    <img src={ Scrivito.Obj.root().get('logo').get('blob').url } />
  </Scrivito.React.Link>
);

export default Logo;
