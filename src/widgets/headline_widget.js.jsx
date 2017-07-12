const HeadlineWidget = Scrivito.createWidgetClass({
  name: 'HeadlineWidget',
  attributes: {
    headline: 'string',
    level: ['enum', { validValues: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  },
});

Scrivito.provideUiConfig(HeadlineWidget, {
  title: 'Headline',
  description: 'A widget with a headline.',
  attributes: {
    level: {
      title: 'Level',
      description: 'The level of the headline',
    },
  },
  titleForContent: widget => widget.get('headline'),
});

Scrivito.provideComponent(HeadlineWidget, {
  render() {
    const widget = this.props.widget;
    const level = widget.get('level') || 'h1';

    return <Scrivito.React.Content tag={ level } content={ widget } attribute="headline" />;
  },
});

export default HeadlineWidget;
