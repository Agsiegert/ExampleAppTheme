const TableRowWidget = Scrivito.createWidgetClass({
  name: 'TableRowWidget',
  attributes: {
    feature: 'string',
    basicFeature: 'widgetlist',
    teamFeature: 'widgetlist',
    corporateFeature: 'widgetlist',
  },
  onlyInside: 'TableWidget',
});

Scrivito.registerClass('TableRowWidget', TableRowWidget);

function PlainTableRowWidgetComponent({ widget }) {
  return (
    <tr>
      <Scrivito.ContentTag tag="th" content={ widget } attribute="feature" />
      <Scrivito.ContentTag tag="td" content={ widget } attribute="basicFeature" />
      <Scrivito.ContentTag tag="td" content={ widget } attribute="teamFeature" />
      <Scrivito.ContentTag tag="td" content={ widget } attribute="corporateFeature" />
    </tr>
  );
}

const TableRowWidgetComponent = Scrivito.connect(PlainTableRowWidgetComponent);

Scrivito.provideEditingConfig(TableRowWidget, {
  title: 'TableRowWidget',
  description: 'A table row widget.',
  attributesConfig: {
    feature: {
      title: 'Feature name',
      description: 'The name of the feature described by this row.',
    },
    basicFeature: {
      title: 'Basic feature',
      description: 'The feature described for the basic plan.',
    },
    teamFeature: {
      title: 'Team feature',
      description: 'The feature described for the team plan.',
    },
    corporateFeature: {
      title: 'Corporate feature',
      description: 'The feature described for the corporate plan.',
    },
  },
  titleForContent: widget => widget.get('feature'),
});

export { TableRowWidgetComponent };
export default TableRowWidget;
