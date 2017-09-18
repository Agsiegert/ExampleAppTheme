const DividerWidget = Scrivito.createWidgetClass({
  name: 'DividerWidget',
});

Scrivito.provideUiConfig(DividerWidget, {
  title: 'Divider',
  description: 'A divider',
});

Scrivito.provideComponent(DividerWidget, () => <hr className="hr-icon" />);

export default DividerWidget;
