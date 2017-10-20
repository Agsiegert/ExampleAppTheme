import columnWidgetIcon from 'assets/images/column_widget.svg';
import { registerTextExtract } from 'utils/text_extract_registry';

const ColumnWidget = Scrivito.createWidgetClass({
  name: 'ColumnWidget',
  attributes: {
    nrOfColumns: ['enum', { values: ['1', '2', '3', '4'] }],
    column1: 'widgetlist',
    column2: 'widgetlist',
    column3: 'widgetlist',
    column4: 'widgetlist',
    verticallyAligned: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('ColumnWidget', [
  { attribute: 'column1', type: 'widgetlist' },
  { attribute: 'column2', type: 'widgetlist' },
  { attribute: 'column3', type: 'widgetlist' },
  { attribute: 'column4', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(ColumnWidget, {
  title: 'Column',
  description: 'A widget with up to 4 columns.',
  thumbnail: `/${columnWidgetIcon}`,
  attributesConfig: {
    nrOfColumns: {
      title: 'Number of Columns',
      description: 'The number of columns between 1 and 4. Default: 2',
    },
    verticallyAligned: {
      title: 'Vertically Aligned',
      description: 'Should the columns be vertically aligned? Default: no',
    },
  },
  generalProperties: [
    'nrOfColumns',
    'verticallyAligned',
  ],
});

Scrivito.provideComponent(ColumnWidget, ({ widget }) => {
  let nrOfColumns = parseInt(widget.get('nrOfColumns'), 10);
  if (![1, 2, 3, 4].includes(nrOfColumns)) {
    // fallback value, if missing or invalid
    nrOfColumns = 2;
  }
  const colSize = 12 / nrOfColumns;
  const cols = [];
  [...Array(nrOfColumns).keys()].forEach(index => {
    const colNr = index + 1;

    cols.push(
      <div key={ colNr } className={ `col-md-${colSize}` }>
        <Scrivito.ContentTag content={ widget } attribute={ `column${colNr}` } />
      </div>
    );
  });

  const classNames = ['row'];
  if (widget.get('verticallyAligned') === 'yes') {
    classNames.push('vertical-align');
  }

  return (
    <div className={ classNames.join(' ') }>
      { cols }
    </div>
  );
});

export default ColumnWidget;
