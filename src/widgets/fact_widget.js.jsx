const BaseFactWidget = Scrivito.createWidgetClass({
  name: 'FactWidget',
  attributes: {
    key: 'string',
    value: 'string',
  },
});

class FactWidget extends BaseFactWidget {
  textExtract() {
    return [this.get('key'), this.get('value')].join(' ');
  }
}

Scrivito.registerClass('FactWidget', FactWidget);

Scrivito.provideUiConfig(FactWidget, {
  title: 'Fact',
  description: 'A fact',
});

Scrivito.provideComponent(FactWidget, ({ widget }) =>
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

export default FactWidget;
