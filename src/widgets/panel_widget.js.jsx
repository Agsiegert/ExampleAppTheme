const BasePanelWidget = Scrivito.createWidgetClass({
  name: 'PanelWidget',
  attributes: {
    body: 'widgetlist',
  },
});

class PanelWidget extends BasePanelWidget {
  textExtract() {
    return this.get('headline');
  }
}

Scrivito.registerClass('PanelWidget', PanelWidget);

Scrivito.provideEditingConfig(PanelWidget, {
  title: 'Panel',
  description: 'A panel widget',
});

Scrivito.provideComponent(PanelWidget, ({ widget }) =>
  <div className="panel panel-theme">
    <Scrivito.ContentTag content={ widget } attribute="body" className="panel-body" />
  </div>
);

export default PanelWidget;
