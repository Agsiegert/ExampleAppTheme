const Footer = Scrivito.createComponent(() => {
  const root = Scrivito.Obj.root();
  return (
    <footer>
      <Scrivito.React.Content content={ root } attribute="footer" />
      <div className="bg-greydark height-center social-footer">
        <Scrivito.React.Content className="container" content={ root } attribute="socialButtons" />
      </div>
    </footer>
  );
});

export default Footer;
