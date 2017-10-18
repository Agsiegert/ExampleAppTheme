const DividerWidget = Scrivito.createWidgetClass({
  name: 'DividerWidget',
});

Scrivito.provideEditingConfig(DividerWidget, {
  title: 'Divider',
  description: 'Adds a divider.',
});

Scrivito.provideComponent(DividerWidget, () => <div className="hr-icon" />);

export default DividerWidget;
