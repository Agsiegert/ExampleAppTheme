const Footer = Scrivito.createComponent(() => {
  const root = Scrivito.Obj.root();
  return (
    <Scrivito.React.Content tag="section" className="footer" content={ root } attribute="footer" />
  );
});

export default Footer;
