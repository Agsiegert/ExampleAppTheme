const Footer = Scrivito.createComponent(() => {
  const root = Scrivito.Obj.root();
  return (
    <section className="footer">
      <Scrivito.React.Content content={ root } attribute="footer" />
      <Scrivito.React.Content content={ root } attribute="socialButtons" />
    </section>
  );
});

export default Footer;
