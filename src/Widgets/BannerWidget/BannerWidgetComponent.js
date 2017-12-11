Scrivito.provideComponent('BannerWidget', ({ widget }) => {
  const location = widget.get('location') || 'header';

  return (
    <Scrivito.ContentTag
      tag={ location }
      className="major container 75%"
      content={ widget }
      attribute="content"
    />
  );
});
