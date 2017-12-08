import IconWidget from 'Widgets/IconWidget/IconWidgetClass';
import PriceWidget from 'Widgets/PriceWidget/PriceWidgetClass';
import TableRowWidget from 'Widgets/TableRowWidget/TableRowWidgetClass';
import tableWidgetIcon from 'assets/images/table_widget.svg';
import TextWidget from 'Widgets/TextWidget/TextWidgetClass';

Scrivito.provideEditingConfig('TableWidget', {
  title: 'Table',
  description: 'A table widget.',
  thumbnail: `/${tableWidgetIcon}`,
  attributes: {
    rows: {
      title: 'Rows',
    },
    summaryRows: {
      title: 'Summary rows',
    },
  },
  properties: [
    'rows',
    'summaryRows',
  ],
  initialContent: {
    header1: 'Column header 1',
    header2: 'Column header 2',
    header3: 'Column header 3',
    header4: 'Column header 4',
    rows: [
      new TableRowWidget({
        feature: 'Row 1',
        basicFeature: [new TextWidget({})],
        teamFeature: [new TextWidget({})],
        corporateFeature: [new TextWidget({})],
      }),
      new TableRowWidget({
        feature: 'Row 2',
        basicFeature: [new TextWidget({})],
        teamFeature: [new TextWidget({})],
        corporateFeature: [new TextWidget({})],
      }),
      new TableRowWidget({
        feature: 'Row 3',
        basicFeature: [new IconWidget({ icon: 'fa-times' })],
        teamFeature: [new IconWidget({ icon: 'fa-check' })],
        corporateFeature: [new IconWidget({ icon: 'fa-check' })],
      }),
    ],
    summaryRows: [
      new TableRowWidget({
        feature: 'Total',
        basicFeature: [new PriceWidget({ currency: '$', price: '20', period: '/mo' })],
        teamFeature: [new PriceWidget({ currency: '$', price: '30', period: '/mo' })],
        corporateFeature: [new PriceWidget({ currency: '$', price: '40', period: '/mo' })],
      }),
    ],
  },
});
