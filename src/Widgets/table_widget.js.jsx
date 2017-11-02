import tableWidgetIcon from 'assets/images/table_widget.svg';
import { registerTextExtract } from 'utils/text_extract_registry';
import { TableRowWidgetComponent } from './table_row_widget';

const TableWidget = Scrivito.provideWidgetClass('TableWidget', {
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

registerTextExtract('TableWidget', [
  { attribute: 'rows', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig('TableWidget', {
  title: 'Table',
  description: 'A table widget.',
  thumbnail: `/${tableWidgetIcon}`,
  attributesConfig: {
    currency: {
      title: 'Currency symbol',
      description: 'The symbol of the currency. E.g. € or $.',
    },
    rows: {
      title: 'Rows',
      description: 'Rows of the table describing each one feature and its availability in plans.',
    },
  },
  generalProperties: [
    'currency',
    'rows',
  ],
});

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

export default TableWidget;