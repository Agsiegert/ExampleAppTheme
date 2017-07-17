const HeadlineWidget = Scrivito.createWidgetClass({
  name: 'HeadlineWidget',
  attributes: {
    headline: 'string',
    level: ['enum', { validValues: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    style: ['enum', { validValues: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
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
    style: {
      title: 'Style',
      description: 'The style of the headline (how big it should be)',
    },
  },
  titleForContent: widget => widget.get('headline'),
});

Scrivito.provideComponent(HeadlineWidget, {
  render() {
    const widget = this.props.widget;
    const level = widget.get('level') || 'h1';
    const style = widget.get('style') || level;

    return <Scrivito.React.Content
        tag={ level }
        content={ widget }
        attribute="headline"
        className={ style }
      />;
  },
});

export default HeadlineWidget;
