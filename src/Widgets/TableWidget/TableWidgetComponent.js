import placeholderCss from 'utils/placeholderCss';
import TableRowWidget from 'Widgets/TableRowWidget/TableRowWidgetClass';
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
      <AddMoreRows widget={ widget } />
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

const AddMoreRows = ({ widget }) => {
  if (!Scrivito.isInPlaceEditingActive()) { return null; }

  return (
    <tr>
      <th colSpan="4">
        <div className="text-center">
          <a
            href="#"
            style={ placeholderCss }
            onClick={
              e => {
                e.preventDefault();
                e.stopPropagation();

                const newRows = [...widget.get('rows'), new TableRowWidget({})];
                widget.update({ rows: newRows });
              }
            }
          >
            Click to add another row
          </a>
        </div>
      </th>
    </tr>
  );
};
