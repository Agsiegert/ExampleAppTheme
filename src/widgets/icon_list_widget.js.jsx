import IconComponent from 'components/icon';

const IconListWidget = Scrivito.createWidgetClass({
  name: 'IconListWidget',
  attributes: {
    iconList: ['widgetlist', { only: 'IconListItemWidget' }],
  },
});

Scrivito.provideEditingConfig(IconListWidget, {
  title: 'Icon List',
  description: 'A list of icons',
  attributes: {
    iconList: {
      title: 'Icon list',
      description: 'The icon list',
    },
  },
});

Scrivito.provideComponent(IconListWidget, ({ widget }) =>
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

export default IconListWidget;
