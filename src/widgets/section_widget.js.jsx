const SectionWidget = Scrivito.createWidgetClass({
  name: 'SectionWidget',
  attributes: {
    content: 'widgetlist',
    useFullWidth: ['enum', { validValues: ['yes', 'no'] }],
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
  },
});

Scrivito.provideComponent(SectionWidget, widget => {
  let className = 'container';
  if (widget.get('useFullWidth') === 'yes') {
    className = 'container-fluid gutter0';
  }

  return (<section className='bg-white'>
    <Scrivito.React.Content className={ className } content={ widget } attribute="content" />
  </section>);
});

export default SectionWidget;
