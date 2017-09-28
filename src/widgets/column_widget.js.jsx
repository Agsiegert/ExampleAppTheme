import textExtractFromWidgetlist from 'utils/text_extract_from_widgetlist';

const BaseColumnWidget = Scrivito.createWidgetClass({
  name: 'ColumnWidget',
  attributes: {
    nrOfColumns: ['enum', { validValues: ['1', '2', '3', '4'] }],
    column1: 'widgetlist',
    column2: 'widgetlist',
    column3: 'widgetlist',
    column4: 'widgetlist',
    verticallyAligned: ['enum', { validValues: ['yes', 'no'] }],
  },
});

class ColumnWidget extends BaseColumnWidget {
  textExtract() {
    return [
      'column1',
      'column2',
      'column3',
      'column4',
    ].map(
      attributeName => textExtractFromWidgetlist(this.get(attributeName))
    ).join(' ');
  }
}

Scrivito.registerClass('ColumnWidget', ColumnWidget);

Scrivito.provideEditingConfig(ColumnWidget, {
  title: 'Column',
  description: 'A widget with up to 4 columns',
  attributesConfig: {
    nrOfColumns: {
      title: 'Number of columns',
      description: 'The number of columns between 1 and 4. Default: 2',
    },
    verticallyAligned: {
      title: 'Vertically Aligned',
      description: 'Should the columns be vertically aligned? Default: no',
    },
  },
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
