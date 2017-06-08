const TextWidget = scrivito.createWidgetClass({
  name: 'TextWidget',
  attributes: {
    content: 'html',
  },
});

scrivito.provideComponent(TextWidget, widget =>
  <scrivito.React.Content tag="div" content={ widget } attribute="content" />
);

export default TextWidget;
