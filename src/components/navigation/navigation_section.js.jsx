const NavigationSection = Scrivito.createComponent(({ show }) => {
  if (!show) { return null; }
  if (!Scrivito.currentPage()) { return null; }

  return <Scrivito.React.Content
      tag="div"
      className="container"
      content={ Scrivito.currentPage() }
      attribute="navigationSection" />;
});

export default NavigationSection;
