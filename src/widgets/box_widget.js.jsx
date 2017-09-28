const BoxWidget = Scrivito.createWidgetClass({
  name: 'BoxWidget',
  attributes: {
    content: 'widgetlist',
    useOffset: ['enum', { validValues: ['yes', 'no'] }],
  },
});

Scrivito.provideEditingConfig(BoxWidget, {
  title: 'Box',
  description: 'A widget, which shows a box',
  attributesConfig: {
    useOffset: {
      title: 'Use offset?',
      description: 'Should an offset be used? If so, the box will move "up". Default: no',
    },
  },
});

Scrivito.provideComponent(BoxWidget, ({ widget }) => {
  const classNames = ['box-white', 'floating-label'];
  if (widget.get('useOffset') === 'yes') { classNames.push('box-offset'); }

  return (
    <Scrivito.ContentTag
      content={ widget }
      attribute="content"
      className={ classNames.join(' ') }
    />
  );
});

export default BoxWidget;
