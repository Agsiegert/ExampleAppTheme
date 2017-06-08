const HeadlineWidget = scrivito.createWidgetClass({
  name: 'HeadlineWidget',
  attributes: {
    headline: 'string',
    level: ['enum', { values: ['h1', 'h2', 'h3', 'h4'] }],
  },
});

scrivito.provideComponent(HeadlineWidget, {
  render() {
    const widget = this.props.widget;
    const level = widget.get('level') || 'h1';

    return <scrivito.React.Content tag={ level } content={ widget } attribute="headline" />;
  },
});

export default HeadlineWidget;
