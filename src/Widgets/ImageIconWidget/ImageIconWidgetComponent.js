import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('ImageIconWidget', ({ widget }) => {
  const icon = widget.get('icon');
  const link = widget.get('link');
  const alignment = widget.get('alignment') || 'left';

  return (
    <section className={ `feature ${alignment}` }>
      <Scrivito.LinkTag className={ `image icon ${icon}` } to={ link }>
        { (widget.get('image'))
          ? <Scrivito.ImageTag content={ widget } attribute="image" />
          : <InPlaceEditingPlaceholder center={ true }>
              Select an image and icon in the widget properties.
            </InPlaceEditingPlaceholder>
        }
      </Scrivito.LinkTag>
      <div className="content">
        <Scrivito.ContentTag tag="h3" content={ widget }
          attribute="headline"
        />
        <Scrivito.ContentTag tag="p" content={ widget } attribute="content" />
      </div>
    </section>
  );
});
