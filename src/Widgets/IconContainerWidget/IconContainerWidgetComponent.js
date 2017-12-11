import IconComponent from 'Components/Icon';
import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('IconContainerWidget', ({ widget }) => {
  const icons = widget.get('iconList');

  if (!icons.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Select icons in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <ul className="icons">
      {
        icons.map(iconListItem => {
          const icon = iconListItem.get('icon');
          const link = iconListItem.get('link');
          const size = iconListItem.get('size');

          return (
          <li key={ iconListItem.id() }>
            <IconComponent
              icon={ icon }
              size={ size }
              link={ link }
            />
          </li>
          );
        })
      }
    </ul>
  );
});
