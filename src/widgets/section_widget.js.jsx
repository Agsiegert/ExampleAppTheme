const SectionWidget = Scrivito.createWidgetClass({
  name: 'SectionWidget',
  attributes: {
    content: 'widgetlist',
    useFullWidth: ['enum', { validValues: ['yes', 'no'] }],
    paddingDisabled: ['enum', { validValues: ['yes', 'no'] }],
  },
});

Scrivito.provideUiConfig(SectionWidget, {
  title: 'Section',
  description: 'A section',
  attributes: {
    useFullWidth: {
      title: 'Use full width?',
      description: 'Should this section use the full screen width?',
    },
    paddingDisabled: {
      title: 'Disable padding?',
      description: 'Should this section use no padding (empty space around this section)?',
    },
  },
});

Scrivito.provideComponent(SectionWidget, widget => {
  const sectionClassNames = ['bg-white'];
  if (widget.get('paddingDisabled') === 'yes') {
    sectionClassNames.push('no-padding');
  }

  let contentClassName = 'container';
  if (widget.get('useFullWidth') === 'yes') {
    contentClassName = 'container-fluid gutter0';
  }

  return (<section className={ sectionClassNames.join(' ') }>
    <Scrivito.React.Content className={ contentClassName } content={ widget } attribute="content" />
  </section>);
});

export default SectionWidget;
