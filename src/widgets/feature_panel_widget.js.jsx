const FeaturePanelWidget = Scrivito.createWidgetClass({
  name: 'FeaturePanelWidget',
  attributes: {
    icon: 'string',
    headline: 'string',
    description: 'string',
  },
});

Scrivito.registerClass('FeaturePanelWidget', FeaturePanelWidget);

Scrivito.provideComponent(FeaturePanelWidget, ({ widget }) => {
  return (
    <div className="panel panel-theme panel-list">
      <div className="panel-icon">
        <i className={ `fa ${widget.get('icon') || 'fa-check'} fa-3x` } aria-hidden="true" />
      </div>
      <div className="panel-body">
        <Scrivito.React.Content className="h3" tag="h3" content={ widget } attribute="headline" />
        <Scrivito.React.Content tag="p" content={ widget } attribute="description" />
      </div>
    </div>
  );
});

export default FeaturePanelWidget;
