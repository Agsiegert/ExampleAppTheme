import pricingWidgetIcon from 'assets/images/pricing_widget.svg';

Scrivito.provideEditingConfig('PricingWidget', {
  title: 'Pricing',
  description: 'A pricing widget',
  thumbnail: `/${pricingWidgetIcon}`,
  attributesConfig: {
    currency: {
      title: 'Currency',
      description: 'e.g. € or $',
    },

    // Plan Buttons
    smallPlanButton: {
      title: 'Small plan button',
      description: 'Where should the small plan button lead and what should it say?',
    },
    mediumPlanButton: {
      title: 'Medium plan button',
      description: 'Where should the medium plan button lead and what should it say?',
    },
    largePlanButton: {
      title: 'Large plan button',
      description: 'Where should the large plan button lead and what should it say?',
    },
  },
  generalProperties: [
    'currency',
    'smallPlanButton',
    'mediumPlanButton',
    'largePlanButton',
  ],
});
