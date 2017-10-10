import { registerTextExtract } from 'utils/text_extract_registry';

const PricingWidget = Scrivito.createWidgetClass({
  name: 'PricingWidget',
  attributes: {
    currency: 'string',

    // Plan Names
    smallPlanName: 'string',
    mediumPlanName: 'string',
    largePlanName: 'string',

    // Plan Prices
    smallPlanPrice: 'string',
    mediumPlanPrice: 'string',
    largePlanPrice: 'string',

    // Plan Periods
    smallPlanPeriod: 'string',
    mediumPlanPeriod: 'string',
    largePlanPeriod: 'string',

    // Plan Specs
    smallPlanSpecs: ['widgetlist', { only: 'PricingSpecWidget' }],
    mediumPlanSpecs: ['widgetlist', { only: 'PricingSpecWidget' }],
    largePlanSpecs: ['widgetlist', { only: 'PricingSpecWidget' }],

    // Plan Buttons
    smallPlanButton: 'link',
    mediumPlanButton: 'link',
    largePlanButton: 'link',
  },
});

registerTextExtract('PricingWidget', [
  { attribute: 'smallPlanSpecs', type: 'widgetlist' },
  { attribute: 'mediumPlanSpecs', type: 'widgetlist' },
  { attribute: 'largePlanSpecs', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(PricingWidget, {
  title: 'Pricing',
  description: 'A pricing widget',
  attributesConfig: {
    currency: {
      title: 'Currency',
      description: 'Which currency is used (e.g. € or $).',
    },

    // Plan Buttons
    smallPlanButton: {
      title: 'Small Plan Button',
      description: 'Where should the small plan button lead?',
    },
    mediumPlanButton: {
      title: 'Medium Plan Button',
      description: 'Where should the medium plan button lead?',
    },
    largePlanButton: {
      title: 'Large Plan Button',
      description: 'Where should the large plan button lead?',
    },
  },
});

function PlanButton({ target, className }) {
  const text = target && target.title();

  return (
    <Scrivito.LinkTag to={ target } className={ `btn ${className}` }>
      { text }<i className="fa fa-angle-right fa-4" aria-hidden="true" />
    </Scrivito.LinkTag>
  );
}

Scrivito.provideComponent(PricingWidget, ({ widget }) => {
  const currency = widget.get('currency') || '$';

  return (
    <div className="row charts">
      <div className="col-md-4">
        <div className="chart first">
          <Scrivito.ContentTag
            content={ widget }
            attribute="smallPlanName"
            className="plan-name"
          />
          <div className="quantity">
            <span className="dollar">{ currency }</span>
            <Scrivito.ContentTag
              content={ widget }
              attribute="smallPlanPrice"
              className="price"
              tag="span"
            />
            <Scrivito.ContentTag
              content={ widget }
              attribute="smallPlanPeriod"
              className="period"
              tag="span"
            />
          </div>
          <Scrivito.ContentTag content={ widget } attribute="smallPlanSpecs" className="specs" />
          <PlanButton target={ widget.get('smallPlanButton') } className="btn-default" />
        </div>
      </div>

      <div className="col-md-4">
        <div className="chart featured">
          <Scrivito.ContentTag
            content={ widget }
            attribute="mediumPlanName"
            className="plan-name"
          />
          <div className="quantity">
            <span className="dollar">{ currency }</span>
            <Scrivito.ContentTag
              content={ widget }
              attribute="mediumPlanPrice"
              className="price"
              tag="span"
            />
            <Scrivito.ContentTag
              content={ widget }
              attribute="mediumPlanPeriod"
              className="period"
              tag="span"
            />
          </div>
          <Scrivito.ContentTag
            content={ widget } attribute="mediumPlanSpecs" className="specs" />
          <PlanButton target={ widget.get('mediumPlanButton') } className="btn-primary" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="chart last">
          <Scrivito.ContentTag content={ widget } attribute="largePlanName" className="plan-name"/>
          <div className="quantity">
            <span className="dollar">{ currency }</span>
            <Scrivito.ContentTag
              content={ widget }
              attribute="largePlanPrice"
              className="price"
              tag="span"
            />
            <Scrivito.ContentTag
              content={ widget }
              attribute="largePlanPeriod"
              className="period"
              tag="span"
            />
          </div>
          <Scrivito.ContentTag content={ widget } attribute="largePlanSpecs" className="specs" />
          <PlanButton target={ widget.get('largePlanButton') } className="btn-default" />
        </div>
      </div>
    </div>
  );
});

export default PricingWidget;
