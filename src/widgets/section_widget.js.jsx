const SectionWidget = Scrivito.createWidgetClass({
  name: 'SectionWidget',
  attributes: {
    content: 'widgetlist',
  },
});

Scrivito.provideUiConfig(SectionWidget, {
  title: 'Section',
  description: 'A section',
});

Scrivito.provideComponent(SectionWidget, widget => <section className='bg-white'>
    <Scrivito.React.Content className="container" content={ widget } attribute="content" />
  </section>);

export default SectionWidget;
