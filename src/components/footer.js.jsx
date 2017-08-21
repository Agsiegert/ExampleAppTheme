function Footer() {
  const root = Scrivito.Obj.root();

  if (!root) { return null; }

  return (
    <footer>
      <div className="bg-greywhite">
        <div className="container">
          <Scrivito.React.Content content={ root } attribute="footer" />
        </div>
      </div>
      <div className="bg-greydark height-center social-footer">
        <Scrivito.React.Content content={ root } attribute="footerIconList" className="container" />
      </div>
    </footer>
  );
}

export default Scrivito.React.connect(Footer);
