const NavigationSection = Scrivito.createComponent(() => {
  if (!Scrivito.currentPage()) { return null; }
  const obj = Scrivito.currentPage();

  if (!obj.get('navigationSection') || !obj.get('navigationStyle')) { return null; }
  if (!obj.get('navigationStyle').startsWith('transparent')) { return null; }

  return <Scrivito.React.Content
      tag="div"
      className="container"
      content={ obj }
      attribute="navigationSection" />;
});

export default NavigationSection;
