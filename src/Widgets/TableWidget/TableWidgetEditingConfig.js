import IconWidget from 'Widgets/IconWidget/IconWidgetClass';
import TableRowWidget from 'Widgets/TableRowWidget/TableRowWidgetClass';
import tableWidgetIcon from 'assets/images/table_widget.svg';
import TextWidget from 'Widgets/TextWidget/TextWidgetClass';

Scrivito.provideEditingConfig('TableWidget', {
  title: 'Table',
  description: 'A table widget.',
  thumbnail: `/${tableWidgetIcon}`,
  attributes: {
    currency: {
      title: 'Currency',
      description: 'E.g. € or $.',
    },
    rows: {
      title: 'Feature rows',
    },
  },
  properties: [
    'currency',
    'rows',
  ],
  initialContent: {
    featureHeadline: 'Features',
    basicPlanHeadline: 'Basic',
    teamPlanHeadline: 'Team',
    corporatePlanHeadline: 'Corporate',
    pricingRow: 'Prices',
    currency: '€',
    basicPlanPrice: '20',
    teamPlanPrice: '30',
    corporatePlanPrice: '40',
    basicPlanPeriod: '/mo',
    teamPlanPeriod: '/mo',
    corporatePlanPeriod: '/mo',
    rows: [
      new TableRowWidget({
        feature: 'Key feature 1',
        basicFeature: [new TextWidget({ text: '<p><b>5</b></p>' })],
        teamFeature: [new TextWidget({ text: '<p><b>10</b></p>' })],
        corporateFeature: [new TextWidget({ text: '<p><b>unlimited</b></p>' })],
      }),
      new TableRowWidget({
        feature: 'Key feature 2',
        basicFeature: [new TextWidget({ text: '<p><b>20</b></p>' })],
        teamFeature: [new TextWidget({ text: '<p><b>40</b></p>' })],
        corporateFeature: [new TextWidget({ text: '<p><b>unlimited</b></p>' })],
      }),
      new TableRowWidget({
        feature: 'Key feature 3',
        basicFeature: [new TextWidget({ text: '<p><b>-</b></p>' })],
        teamFeature: [new IconWidget({ icon: 'fa-check' })],
        corporateFeature: [new IconWidget({ icon: 'fa-check' })],
      }),
    ],
  },
});
