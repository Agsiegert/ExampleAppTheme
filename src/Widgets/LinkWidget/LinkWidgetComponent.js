import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('LinkWidget', ({ widget }) => {
  const link = widget.get('link');

  if (!link) {
    return (
      <li>
        <InPlaceEditingPlaceholder>
          Provide a link in the widget properties.
        </InPlaceEditingPlaceholder>
      </li>
    );
  }

  return (
    <Scrivito.WidgetTag tag="li">
      <Scrivito.LinkTag to={ link }>
        <LinkTitle link={ link } />
      </Scrivito.LinkTag>
    </Scrivito.WidgetTag>
  );
});

const LinkTitle = Scrivito.connect(({ link }) => {
  if (link.title()) {
    return link.title();
  }

  if (link.isInternal()) {
    return link.obj().get('title');
  }

  return link.url();
});
