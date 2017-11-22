import IconComponent from 'Components/Icon';
import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('IconContainerWidget', ({ widget }) => {
  const icons = widget.get('iconList');

  if (!icons.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        No icons selected. Select them in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <div className="social-links text-center">
      {
        icons.map(iconListItem => {
          const icon = iconListItem.get('icon');
          const link = iconListItem.get('link');
          const size = iconListItem.get('size');

          return <IconComponent
            icon={ icon }
            size={ size }
            link={ link }
            key={ iconListItem.id() }
          />;
        })
      }
    </div>
  );
});
