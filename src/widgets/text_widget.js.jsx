const TextWidget = Scrivito.createWidgetClass({
  name: 'TextWidget',
  attributes: {
    text: 'html',
  },
});

Scrivito.provideComponent(TextWidget, widget =>
  <Scrivito.React.Content tag="div" content={ widget } attribute="text" />
);

export default TextWidget;
