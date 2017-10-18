import { registerTextExtract } from 'utils/text_extract_registry';

const TableRowWidget = Scrivito.createWidgetClass({
  name: 'TableRowWidget',
  attributes: {
    feature: 'string',
    basicFeature: ['widgetlist', { only: ['IconWidget', 'TextWidget'] }],
    teamFeature: ['widgetlist', { only: ['IconWidget', 'TextWidget'] }],
    corporateFeature: ['widgetlist', { only: ['IconWidget', 'TextWidget'] }],
  },
  onlyInside: 'TableWidget',
});

registerTextExtract('TableRowWidget', [
  { attribute: 'feature', type: 'string' },
  { attribute: 'basicFeature', type: 'widgetlist' },
  { attribute: 'teamFeature', type: 'widgetlist' },
  { attribute: 'corporateFeature', type: 'widgetlist' },
]);

function PlainTableRowWidgetComponent(
  { widget, basicPlanHeadline, teamPlanHeadline, corporatePlanHeadline }
) {
  return (
    <tr>
      <Scrivito.ContentTag tag="th" content={ widget } attribute="feature" />
      <Scrivito.ContentTag
        tag="td"
        content={ widget }
        attribute="basicFeature"
        data-th={ basicPlanHeadline }
      />
      <Scrivito.ContentTag
        tag="td"
        content={ widget }
        attribute="teamFeature"
        data-th={ teamPlanHeadline }
      />
      <Scrivito.ContentTag
        tag="td"
        content={ widget }
        attribute="corporateFeature"
        data-th={ corporatePlanHeadline }
      />
    </tr>
  );
}

const TableRowWidgetComponent = Scrivito.connect(PlainTableRowWidgetComponent);

Scrivito.provideEditingConfig(TableRowWidget, {
  title: 'TableRowWidget',
  description: 'A table row widget.',
  attributesConfig: {
    feature: {
      title: 'Feature Name',
      description: 'The name of the feature described by this row.',
    },
    basicFeature: {
      title: 'Basic Feature',
      description: 'The feature described for the basic plan.',
    },
    teamFeature: {
      title: 'Team Feature',
      description: 'The feature described for the team plan.',
    },
    corporateFeature: {
      title: 'Corporate Feature',
      description: 'The feature described for the corporate plan.',
    },
  },
  titleForContent: widget => widget.get('feature'),
});

export { TableRowWidgetComponent };
export default TableRowWidget;
