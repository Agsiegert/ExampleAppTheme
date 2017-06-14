const TextWidget = Scrivito.createWidgetClass({
  name: 'TextWidget',
  attributes: {
    content: 'html',
  },
});

Scrivito.provideComponent(TextWidget, widget =>
  <Scrivito.React.Content tag="div" content={ widget } attribute="content" />
);

export default TextWidget;
