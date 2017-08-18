const BaseHeadlineWidget = Scrivito.createWidgetClass({
  name: 'HeadlineWidget',
  attributes: {
    headline: 'string',
    level: ['enum', { validValues: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    style: ['enum', { validValues: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    centered: ['enum', { validValues: ['yes', 'no'] }],
    showDividingLine: ['enum', { validValues: ['yes', 'no'] }],
  },
});

class HeadlineWidget extends BaseHeadlineWidget {
  textExtract() {
    return this.get('headline');
  }
}

Scrivito.registerClass('HeadlineWidget', HeadlineWidget);

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
    centered: {
      title: 'Centered',
      description: 'Should this headline be centered?',
    },
    showDividingLine: {
      title: 'Show dividing line',
      description: 'Should this headline show a dividing line?',
    },
  },
  titleForContent: widget => widget.get('headline'),
});

Scrivito.provideComponent(HeadlineWidget, ({ widget }) => {
  const level = widget.get('level') || 'h1';

  const style = widget.get('style') || level;
  const classNames = [style];
  if (widget.get('centered') === 'yes') {
    classNames.push('text-center');
  }
  if (widget.get('showDividingLine') === 'yes') {
    classNames.push('border-bottom');
  }

  return <Scrivito.React.Content
      tag={ level }
      content={ widget }
      attribute="headline"
      className={ classNames.join(' ') }
    />;
});

export default HeadlineWidget;
