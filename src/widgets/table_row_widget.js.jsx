const TableRowWidget = Scrivito.createWidgetClass({
  name: 'TableRowWidget',
  attributes: {
    feature: 'string',
    basicFeature: ['widgetlist', { only: 'IconWidget' }],
    teamFeature: ['widgetlist', { only: 'IconWidget' }],
    corporateFeature: ['widgetlist', { only: 'IconWidget' }],
  },
  onlyInside: 'TableWidget',
});

Scrivito.registerClass('TableRowWidget', TableRowWidget);

function PlainTableRowWidgetComponent({ widget }) {
  return (
    <tr>
      <Scrivito.React.Content tag="th" content={ widget } attribute="feature" />
      <Scrivito.React.Content tag="td" content={ widget } attribute="basicFeature" />
      <Scrivito.React.Content tag="td" content={ widget } attribute="teamFeature" />
      <Scrivito.React.Content tag="td" content={ widget } attribute="corporateFeature" />
    </tr>
  );
}

const TableRowWidgetComponent = Scrivito.React.connect(PlainTableRowWidgetComponent);

Scrivito.provideUiConfig(TableRowWidget, {
  title: 'TableRowWidget',
  description: 'A table row widget.',
  attributes: {
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
