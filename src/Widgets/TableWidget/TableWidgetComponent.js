import TableRowWidgetComponent from 'Widgets/TableRowWidget/TableRowWidgetComponent';

Scrivito.provideComponent('TableWidget', ({ widget }) =>
  <table className="table-features">
    <thead>
      <tr>
        <Scrivito.ContentTag tag="th" content={ widget } attribute="featureHeadline" />
        <Scrivito.ContentTag tag="th" content={ widget } attribute="basicPlanHeadline" />
        <Scrivito.ContentTag tag="th" content={ widget } attribute="teamPlanHeadline" />
        <Scrivito.ContentTag tag="th" content={ widget } attribute="corporatePlanHeadline" />
      </tr>
    </thead>
    <tbody>
      {
        widget.get('rows').map((rowWidget, index) => {
          return <TableRowWidgetComponent
            key={ `${rowWidget.id()}${index}` }
            widget={ rowWidget }
            basicPlanHeadline={ widget.get('basicPlanHeadline') }
            teamPlanHeadline={ widget.get('teamPlanHeadline') }
            corporatePlanHeadline={ widget.get('corporatePlanHeadline') }
          />;
        })
      }
    </tbody>
    <tfoot>
      <tr>
        <Scrivito.ContentTag tag="th" content={ widget } attribute="pricingRow" />
        {
          ['basic', 'team', 'corporate'].map((planName, index) => {
            return (
              <td key={ `${planName}${index}` }>
                <div className="quantity">
                  <span className="dollar">{ widget.get('currency') || '$' }</span>
                  <Scrivito.ContentTag
                    className="price"
                    tag="span"
                    content={ widget }
                    attribute={ `${planName}PlanPrice` }
                  />
                  <Scrivito.ContentTag
                    className="period"
                    tag="span"
                    content={ widget }
                    attribute={ `${planName}PlanPeriod` }
                  />
                </div>
              </td>
            );
          })
        }
      </tr>
    </tfoot>
  </table>
);