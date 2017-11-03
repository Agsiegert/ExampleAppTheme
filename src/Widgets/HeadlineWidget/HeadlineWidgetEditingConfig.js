import headlineWidgetIcon from 'assets/images/headline_widget.svg';

Scrivito.provideEditingConfig('HeadlineWidget', {
  title: 'Headline',
  description: 'A widget with a headline.',
  thumbnail: `/${headlineWidgetIcon}`,
  attributesConfig: {
    level: {
      title: 'Level',
      description: 'The level of the headline.',
    },
    style: {
      title: 'Style',
      description: 'The style of the headline (how big it should be).',
    },
    alignment: {
      title: 'Alignment',
      description: 'How should this headline be aligned? Default: left',
    },
    showDividingLine: {
      title: 'Show dividing line',
      description: 'Should this headline show a dividing line? Default: no',
    },
    marginDisabled: {
      title: 'Disable Margin?',
      description: 'Should this headline use no margin (empty space around this headline)?',
    },
  },
  generalProperties: [
    'level',
    'style',
    'alignment',
    'showDividingLine',
    'marginDisabled',
  ],
  titleForContent: widget => widget.get('headline'),
});
