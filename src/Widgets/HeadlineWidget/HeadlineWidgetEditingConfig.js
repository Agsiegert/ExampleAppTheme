import headlineWidgetIcon from 'assets/images/headline_widget.svg';

Scrivito.provideEditingConfig('HeadlineWidget', {
  title: 'Headline',
  description: 'A widget with a headline.',
  thumbnail: `/${headlineWidgetIcon}`,
  attributesConfig: {
    level: {
      title: 'Level',
      description: 'The level of the headline. This information may be used by user agents,' +
        ' for example, to construct a table of contents automatically. Default: highest (h1)',
      values: [
        { value: 'h1', title: 'highest (h1)' },
        { value: 'h2', title: 'higher (h2)' },
        { value: 'h3', title: 'high (h3)' },
        { value: 'h4', title: 'low (h4)' },
        { value: 'h5', title: 'lower (h5)' },
        { value: 'h6', title: 'lowest (h6)' },
      ],
    },
    style: {
      title: 'Size',
      description: 'The size of the headline.' +
        ' If nothing is selected, the size is derived from the level.',
      values: [
        { value: 'h1', title: 'biggest' },
        { value: 'h2', title: 'bigger' },
        { value: 'h3', title: 'big' },
        { value: 'h4', title: 'small' },
        { value: 'h5', title: 'smaller' },
        { value: 'h6', title: 'smallest' },
      ],
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
