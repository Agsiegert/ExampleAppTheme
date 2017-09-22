const TopFeaturesWidget = Scrivito.createWidgetClass({
  name: 'TopFeaturesWidget',
  attributes: {
    image: 'reference',
    leftColumn: 'widgetlist',
    rightColumn: 'widgetlist',
  },
});

Scrivito.registerClass('TopFeaturesWidget', TopFeaturesWidget);

Scrivito.provideUiConfig(TopFeaturesWidget, {
  title: 'Top Feature Panel',
  description: 'A widget showing top features.',
});

Scrivito.provideComponent(TopFeaturesWidget, ({ widget }) =>
  <div className="row vertical-align">
    <div className="col-md-4">
      <Scrivito.React.Content content={ widget } attribute="leftColumn" />
    </div>
    <div className="col-md-4">
      <Scrivito.React.Image content={ widget } attribute="image" className="img-responsive" />
    </div>
    <div className="col-md-4">
      <Scrivito.React.Content content={ widget } attribute="rightColumn" />
    </div>
  </div>
);

export default TopFeaturesWidget;
