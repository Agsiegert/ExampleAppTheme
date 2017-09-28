const TopFeaturesWidget = Scrivito.createWidgetClass({
  name: 'TopFeaturesWidget',
  attributes: {
    image: 'reference',
    leftColumn: 'widgetlist',
    rightColumn: 'widgetlist',
  },
});

Scrivito.registerClass('TopFeaturesWidget', TopFeaturesWidget);

Scrivito.provideEditingConfig(TopFeaturesWidget, {
  title: 'Top Feature Panel',
  description: 'A widget showing top features.',
});

Scrivito.provideComponent(TopFeaturesWidget, ({ widget }) =>
  <div className="row vertical-align">
    <div className="col-md-4">
      <Scrivito.ContentTag content={ widget } attribute="leftColumn" />
    </div>
    <div className="col-md-4">
      <Scrivito.ImageTag content={ widget } attribute="image" className="img-responsive" />
    </div>
    <div className="col-md-4">
      <Scrivito.ContentTag content={ widget } attribute="rightColumn" />
    </div>
  </div>
);

export default TopFeaturesWidget;
