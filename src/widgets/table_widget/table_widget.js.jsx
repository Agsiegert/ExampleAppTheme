import TableRowWidgetComponent from './table_row_widget';

const TableWidget = Scrivito.createWidgetClass({
  name: 'TableWidget',
  attributes: {
    rows: ['widgetlist', { only: 'TableRowWidget' }],
    featureHeadline: 'string',
    basicPlanHeadline: 'string',
    teamPlanHeadline: 'string',
    corporatePlanHeadline: 'string',
    pricingRow: 'string',
    currency: 'string',
    basicPlanPrice: 'string',
    teamPlanPrice: 'string',
    corporatePlanPrice: 'string',
    basicPlanPeriod: 'string',
    teamPlanPeriod: 'string',
    corporatePlanPeriod: 'string',
  },
});

Scrivito.registerClass('TableWidget', TableWidget);

Scrivito.provideUiConfig(TableWidget, {
  title: 'Table',
  description: 'A table widget.',
  attributes: {
    rows: {
      title: 'Rows',
      description: 'Rows of the table describing each one feature and its availability in plans.',
    },
    featureHeadline: {
      title: 'Table feature headline',
      description: 'The headline of the table for feature column.',
    },
    basicPlanHeadline: {
      title: 'Table basic plan headline',
      description: 'The headline of the table for the basic plan column.',
    },
    teamPlanHeadline: {
      title: 'Table team plan headline',
      description: 'The headline of the table for the team plan column.',
    },
    corporatePlanHeadline: {
      title: 'Table corporate plan headline',
      description: 'The headline of the table for the corporate plan column.',
    },
    pricingRow: {
      title: 'Price column title',
      description: 'The title of the price column.',
    },
    currency: {
      title: 'Currency symbol',
      description: 'The symbol of the currency.',
    },
    basicPlanPrice: {
      title: 'Basic plan price',
      description: 'The price of the basic plan.',
    },
    teamPlanPrice: {
      title: 'Team plan price',
      description: 'The price of the team plan.',
    },
    corporatePlanPrice: {
      title: 'Corporate plan price',
      description: 'The price of the corporate plan.',
    },
    basicPlanPeriod: {
      title: 'Basic plan period',
      description: 'The time period for paying a basic plan.',
    },
    teamPlanPeriod: {
      title: 'Team plan period',
      description: 'The time period for paying a team plan.',
    },
    corporatePlanPeriod: {
      title: 'Corporate plan period',
      description: 'The time period for paying a corporate plan.',
    },
  },
});

Scrivito.provideComponent(TableWidget, ({ widget }) =>
  <table className="table-features">
    <thead>
      <tr>
        <Scrivito.React.Content tag="th" content={ widget } attribute="featureHeadline" />
        <Scrivito.React.Content tag="th" content={ widget } attribute="basicPlanHeadline" />
        <Scrivito.React.Content tag="th" content={ widget } attribute="teamPlanHeadline" />
        <Scrivito.React.Content tag="th" content={ widget } attribute="corporatePlanHeadline" />
      </tr>
    </thead>
    <tbody>
      { widget.get('rows').map((rowWidget, index) => {
        return <TableRowWidgetComponent key={ `${rowWidget.id}${index}` } widget={ rowWidget } />;
      }) }
    </tbody>
    <tfoot>
      <tr>
        <Scrivito.React.Content tag="th" content={ widget } attribute="pricingRow" />
          { ['basic', 'team', 'corporate'].map((planName, index) => {
            return (
              <td key={ `${planName}${index}` }>
                <div className="quantity">
                  <span className="dollar">{ widget.get('currency') || '$' }</span>
                  <Scrivito.React.Content
                      className="price"
                      tag="span"
                      content={ widget }
                      attribute={ `${planName}PlanPrice` }
                    />
                  <Scrivito.React.Content
                      className="period"
                      tag="span"
                      content={ widget }
                      attribute={ `${planName}PlanPeriod` }
                    />
                </div>
              </td>
            );
          }) }
      </tr>
    </tfoot>
  </table>
);

export default TableWidget;
