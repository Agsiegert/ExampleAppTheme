import IconComponent from 'Components/Icon';

Scrivito.provideComponent('IconContainerWidget', ({ widget }) =>
  <div className="social-links text-center">
    {
      widget.get('iconList').map(iconListItem => {
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