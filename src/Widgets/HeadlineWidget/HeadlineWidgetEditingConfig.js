import headlineWidgetIcon from 'assets/images/headline_widget.svg';

Scrivito.provideEditingConfig('HeadlineWidget', {
  title: 'Headline',
  description: 'A widget with a headline.',
  thumbnail: `/${headlineWidgetIcon}`,
  attributesConfig: {
    style: {
      title: 'Style',
      description: 'Size and font of this headline. Default: Heading 1',
      values: [
        { value: 'h1', title: 'Heading 1' },
        { value: 'h2', title: 'Heading 2' },
        { value: 'h3', title: 'Heading 3' },
        { value: 'h4', title: 'Heading 4' },
        { value: 'h5', title: 'Heading 5' },
        { value: 'h6', title: 'Heading 6' },
      ],
    },
    level: {
      title: 'Heading tag (optional)',
      description: 'May be used for SEO, for generating a table of contents,' +
        ' or for improving accessibility. Default: Derived from Style',
      values: [
        { value: 'h1', title: 'h1' },
        { value: 'h2', title: 'h2' },
        { value: 'h3', title: 'h3' },
        { value: 'h4', title: 'h4' },
        { value: 'h5', title: 'h5' },
        { value: 'h6', title: 'h6' },
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
    'style',
    'level',
    'alignment',
    'showDividingLine',
    'marginDisabled',
  ],
  titleForContent: widget => widget.get('headline'),
});
