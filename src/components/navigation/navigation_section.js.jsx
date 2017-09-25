function NavigationSection({ heigthClassName }) {
  if (heigthClassName !== 'full-height') { return null; }

  if (!Scrivito.currentPage()) { return null; }
  const obj = Scrivito.currentPage();
  if (!obj.get('navigationSection')) { return null; }

  return <Scrivito.React.Content
      tag="div"
      className="container"
      content={ obj }
      attribute="navigationSection" />;
}

export default Scrivito.React.connect(NavigationSection);
