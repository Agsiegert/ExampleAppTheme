const TextWidget = Scrivito.createWidgetClass({
  name: 'TextWidget',
  attributes: {
    text: 'html',
  },
});

Scrivito.provideUiConfig(TextWidget, {
  title: 'Text',
  description: 'A widget with html text.',
});

Scrivito.provideComponent(TextWidget, widget =>
  <Scrivito.React.Content tag="div" content={ widget } attribute="text" />
);

export default TextWidget;
