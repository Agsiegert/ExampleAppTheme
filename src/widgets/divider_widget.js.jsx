import dividerWidgetIcon from 'assets/images/divider_widget.svg';

const DividerWidget = Scrivito.createWidgetClass({
  name: 'DividerWidget',
});

Scrivito.provideEditingConfig('DividerWidget', {
  title: 'Divider',
  description: 'Adds a divider.',
  thumbnail: `/${dividerWidgetIcon}`,
});

Scrivito.provideComponent('DividerWidget', () => <div className="hr-icon" />);

export default DividerWidget;
