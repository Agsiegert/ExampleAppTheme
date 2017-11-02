import pricingWidgetIcon from 'assets/images/pricing_widget.svg';

Scrivito.provideEditingConfig('PricingWidget', {
  title: 'Pricing',
  description: 'A pricing widget',
  thumbnail: `/${pricingWidgetIcon}`,
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
  generalProperties: [
    'currency',
    'smallPlanButton',
    'mediumPlanButton',
    'largePlanButton',
  ],
});
