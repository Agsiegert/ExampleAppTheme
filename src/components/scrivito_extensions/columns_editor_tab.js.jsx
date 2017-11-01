import ColumnWidget from 'Widgets/column_widget';
import flatten from 'lodash/flatten';
import isEqual from 'lodash/isEqual';
import last from 'lodash/last';
import take from 'lodash/take';
import takeRight from 'lodash/takeRight';
import times from 'lodash/times';

class ColumnsEditorTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalContents: props.widget.get('columns').map(column => column.get('content')),
      currentGrid: gridOfWidget(props.widget),
    };

    this.adjustGrid = this.adjustGrid.bind(this);
  }

  render() {
    return (
      <div className="scrivito_detail_content">
        <div className="scrivito_detail_label">
          <span className="headline">Column Layout</span>
        </div>
        <div className="item_content">
          <div className="gle-preview-list">
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="1 column"
                grid={ [12] }
              />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="2 columns"
                grid={ [6, 6] }
              />
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="2 columns"
                grid={ [3, 9] }
              />
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="2 columns"
                grid={ [9, 3] }
              />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="3 columns"
                grid={ [4, 4, 4] }
              />
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="3 columns"
                grid={ [2, 8, 2] }
              />
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="3 columns"
                grid={ [2, 5, 5] }
              />
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="3 columns"
                grid={ [5, 5, 2] }
              />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="4 columns"
                grid={ [3, 3, 3, 3] }
              />
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="4 columns"
                grid={ [2, 4, 4, 2] }
              />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="5 columns"
                grid={ [2, 2, 2, 2, 4] }
              />
            </div>
            <div className="gle-preview-group">
              <PresetGrid
                currentGrid= { this.state.currentGrid }
                adjustGrid={ this.adjustGrid }
                title="6 columns"
                grid={ [2, 2, 2, 2, 2, 2] }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  adjustGrid(newGrid) {
    if (isEqual(this.state.currentGrid, newGrid)) { return; }

    const containerWidget = this.props.widget;

    adjustNrOfColumns(containerWidget, newGrid.length);
    distributeContents(containerWidget.get('columns'), this.state.originalContents);
    adjustColSize(containerWidget.get('columns'), newGrid);

    this.setState({ currentGrid: gridOfWidget(containerWidget) });
  }
}

Scrivito.registerComponent('ColumnsEditorTab', ColumnsEditorTab);

const PresetGrid = Scrivito.connect(({ currentGrid, adjustGrid, title, grid }) => {
  const classNames = ['gle-preview'];
  if (isEqual(currentGrid, grid)) {
    classNames.push('active');
  }

  return (
    <div
      className={ classNames.join(' ') }
      title={ title }
      onClick={ () => adjustGrid(grid) }
    >
      {
        grid.map((colSize, index) =>
          <div className={ `grid-col-${colSize}` } key={ index } />
        )
      }
    </div>
  );
});

function gridOfWidget(containerWidget) {
  return containerWidget.get('columns').map(column => column.get('colSize'));
}

function adjustNrOfColumns(containerWidget, desiredLength) {
  const columns = containerWidget.get('columns');
  if (columns.length === desiredLength) { return; }

  const newColumns = times(desiredLength).map(index => {
    return columns[index] || new ColumnWidget({});
  });

  // store results, to receive IDs for new ColumnWidgets
  containerWidget.update({ columns: newColumns });
}

function distributeContents(columns, originalContents) {
  const splitIndexAt = columns.length - 1;

  // copy first n -1 elements
  take(originalContents, splitIndexAt).forEach((originalContent, index) => {
    columns[index].update({ content: originalContent });
  });

  // merge last columns into one
  const colsToMerge = takeRight(originalContents, originalContents.length - splitIndexAt);
  last(columns).update({ content: flatten(colsToMerge) });
}

function adjustColSize(columns, newGrid) {
  newGrid.forEach((colSize, index) => {
    columns[index].update({ colSize });
  });
}
