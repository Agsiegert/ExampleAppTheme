function Footer() {
  const root = Scrivito.Obj.root();

  if (!root) { return null; }

  return (
    <Scrivito.React.Content content={ root } attribute="footer" tag="footer" />
  );
}

export default Scrivito.React.connect(Footer);
