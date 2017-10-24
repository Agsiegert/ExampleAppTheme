import ColumnWidget from 'widgets/column_widget';
import isEqual from 'lodash/isEqual';
import last from 'lodash/last';
import times from 'lodash/times';

class ColumnsEditorTab extends React.Component {
  render() {
    return (
      <div className="scrivito_detail_content">
        <div className="scrivito_detail_label">
          <span className="headline">Column Layout</span>
        </div>
        <div className="item_content">
          <div className="gle-preview-list">
            <div className="gle-preview-group">
              <PresetGrid widget={ this.props.widget } title="1 column" grid={ [12] } />
            </div>
            <div className="gle-preview-group">
              <PresetGrid widget={ this.props.widget } title="2 columns" grid={ [6, 6] } />
              <PresetGrid widget={ this.props.widget } title="2 columns" grid={ [3, 9] } />
              <PresetGrid widget={ this.props.widget } title="2 columns" grid={ [9, 3] } />
            </div>
            <div className="gle-preview-group">
              <PresetGrid widget={ this.props.widget } title="3 columns" grid={ [4, 4, 4] } />
              <PresetGrid widget={ this.props.widget } title="3 columns" grid={ [2, 8, 2] } />
              <PresetGrid widget={ this.props.widget } title="3 columns" grid={ [2, 5, 5] } />
              <PresetGrid widget={ this.props.widget } title="3 columns" grid={ [5, 5, 2] } />
            </div>
            <div className="gle-preview-group">
              <PresetGrid widget={ this.props.widget } title="4 columns" grid={ [3, 3, 3, 3] } />
              <PresetGrid widget={ this.props.widget } title="4 columns" grid={ [2, 4, 4, 2] } />
            </div>
            <div className="gle-preview-group">
              <PresetGrid widget={ this.props.widget } title="5 columns" grid={ [2, 2, 2, 2, 4] } />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                widget={ this.props.widget }
                title="6 columns"
                grid={ [2, 2, 2, 2, 2, 2] }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Scrivito.registerComponent('ColumnsEditorTab', ColumnsEditorTab);

const PresetGrid = Scrivito.connect(({ widget, title, grid }) => {
  const classNames = ['gle-preview'];
  if (isEqual(gridOfWidget(widget), grid)) {
    classNames.push('active');
  }

  return (
    <div
      className={ classNames.join(' ') }
      title={ title }
      onClick={ () => adjustGrid(widget, grid) }
    >
      {
        grid.map((colSize, index) =>
          <div className={ `grid-col-${colSize}` } key={ index } />
        )
      }
    </div>
  );
});

function gridOfWidget(widget) {
  return widget.get('columns').map(column => column.get('colSize'));
}

function adjustGrid(widget, grid) {
  if (isEqual(gridOfWidget(widget), grid)) {
    // do nothing
    return;
  }
  const columns = widget.get('columns');

  if (columns.length > grid.length) {
    times(columns.length - grid.length).forEach(() => {
      const columnToBeRemoved = columns.pop();
      const lastColumn = last(columns);
      const content = [...lastColumn.get('content'), ...columnToBeRemoved.get('content')];

      lastColumn.update({ content });
    });
  }

  grid.forEach((colSize, index) => {
    const column = columns[index];
    if (column) {
      column.update({ colSize });
    } else {
      columns[index] = new ColumnWidget({ colSize });
    }
  });

  widget.update({ columns });
}
