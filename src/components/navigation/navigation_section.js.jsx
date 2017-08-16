function NavigationSection() {
  if (!Scrivito.currentPage()) { return null; }
  const obj = Scrivito.currentPage();

  if (!obj.get('navigationSection') || !obj.get('navigationStyle')) { return null; }
  if (obj.get('navigationStyle') !== 'transparentDark full-height') { return null; }

  return <Scrivito.React.Content
      tag="div"
      className="container"
      content={ obj }
      attribute="navigationSection" />;
}

export default Scrivito.React.connect(NavigationSection);
