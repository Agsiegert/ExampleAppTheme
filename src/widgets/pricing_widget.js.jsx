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

Scrivito.provideUiConfig(PricingWidget, {
  title: 'Pricing',
  description: 'A pricing widget',
  attributes: {
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

    // Plan Prices
    smallPlanPrice: {
      title: 'Small Plan Price',
      description: 'How much should the small plan cost? E.g. 29',
    },
    mediumPlanPrice: {
      title: 'Medium Plan Price',
      description: 'How much should the medium plan cost? E.g. 59',
    },
    largePlanPrice: {
      title: 'Large Plan Price',
      description: 'How much should the large plan cost? E.g. 199',
    },

    // Plan Periods
    smallPlanPeriod: {
      title: 'Small Plan Period',
      description: 'How often is the small price charged? E.g. /mo',
    },
    mediumPlanPeriod: {
      title: 'Medium Plan Period',
      description: 'How often is the medium price charged? E.g. /mo',
    },
    largePlanPeriod: {
      title: 'Large Plan Period',
      description: 'How often is the large price charged? E.g. /mo',
    },
  },
});

function PlanButton({ target, className }) {
  const text = target && target.title;

  return (
    <Scrivito.React.Link to={ target } className={ `btn ${className}` }>
      { text }<i className="fa fa-angle-right fa-4" aria-hidden="true"></i>
    </Scrivito.React.Link>
  );
}

Scrivito.provideComponent(PricingWidget, widget => {
  const currency = widget.get('currency') || '$';

  return (
    <div className="row charts">
      <div className="col-md-4">
        <div className="chart first">
          <Scrivito.React.Content
            content={ widget }
            attribute="smallPlanName"
            className="plan-name"
          />
          <div className="quantity">
            <span className="dollar">{ currency }</span>
            <span className="price">{ widget.get('smallPlanPrice') }</span>
            <span className="period">{ widget.get('smallPlanPeriod') || '/mo' }</span>
          </div>
          <Scrivito.React.Content content={ widget } attribute="smallPlanSpecs" className="specs" />
          <PlanButton target={ widget.get('smallPlanButton') } className="btn-default" />
        </div>
      </div>

      <div className="col-md-4">
        <div className="chart featured">
        <Scrivito.React.Content
          content={ widget }
          attribute="mediumPlanName"
          className="plan-name"
        />
          <div className="quantity">
            <span className="dollar">{ currency }</span>
            <span className="price">{ widget.get('mediumPlanPrice') }</span>
            <span className="period">{ widget.get('mediumPlanPeriod') || '/mo' }</span>
          </div>
          <Scrivito.React.Content
            content={ widget } attribute="mediumPlanSpecs" className="specs" />
          <PlanButton target={ widget.get('mediumPlanButton') } className="btn-primary" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="chart last">
        <Scrivito.React.Content content={ widget } attribute="largePlanName" className="plan-name"/>
          <div className="quantity">
            <span className="dollar">{ currency }</span>
            <span className="price">{ widget.get('largePlanPrice') }</span>
            <span className="period">{ widget.get('largePlanPeriod') || '/mo' }</span>
          </div>
          <Scrivito.React.Content content={ widget } attribute="largePlanSpecs" className="specs" />
          <PlanButton target={ widget.get('largePlanButton') } className="btn-default" />
        </div>
      </div>
    </div>
  );
});

export default PricingWidget;
