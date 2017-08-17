const BaseNumberWidget = Scrivito.createWidgetClass({
  name: 'NumberWidget',
  attributes: {
    key: 'string',
    value: 'string',
  },
});

class NumberWidget extends BaseNumberWidget {
  textExtract() {
    return [this.get('key'), this.get('value')].join(' ');
  }
}

Scrivito.registerClass('NumberWidget', NumberWidget);

Scrivito.provideUiConfig(NumberWidget, {
  title: 'Number',
  description: 'A number',
});

Scrivito.provideComponent(NumberWidget, widget =>
  <div className="fact">
    <Scrivito.React.Content
      content={ widget }
      attribute="value"
      className="value"
      tag="span"
    />
    <Scrivito.React.Content
      content={ widget }
      attribute="key"
      className="key"
      tag="span"
    />
  </div>
);

export default NumberWidget;
