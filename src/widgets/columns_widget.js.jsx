import columnsWidgetIcon from 'assets/images/columns_widget.svg';
import { registerTextExtract } from 'utils/text_extract_registry';

const ColumnsWidget = Scrivito.createWidgetClass({
  name: 'ColumnsWidget',
  attributes: {
    columns: ['widgetlist', { only: 'ColumnWidget' }],
    verticallyAligned: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('ColumnsWidget', [
  { attribute: 'columns', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(ColumnsWidget, {
  title: 'Columns',
  description: 'A widget with up to 4 columns.',
  thumbnail: `/${columnsWidgetIcon}`,
  attributesConfig: {
    verticallyAligned: {
      title: 'Vertically Aligned',
      description: 'Should the columns be vertically aligned? Default: no',
    },
  },
  generalProperties: [
    'verticallyAligned',
  ],
  propertiesGroups: [
    {
      title: 'Columns Editor',
      component: 'ColumnsEditorTab',
    },
  ],
});

Scrivito.provideComponent(ColumnsWidget, ({ widget }) => {
  const content = [];
  const columns = widget.get('columns');

  if (!columns.length) {
    if (Scrivito.isInPlaceEditingActive()) {
      content.push(
        <p key='empty_content'>
          No Columns (yet)!
          Please go to the widget properties to create and configure columns and their width.
        </p>
      );
    }
  }

  columns.forEach((columnWidget, index) => {
    const colSize = columnWidget.get('colSize') || 1;
    content.push(
      <div key={ index } className={ `col-md-${colSize}` }>
        <Scrivito.ContentTag content={ columnWidget } attribute="content" />
      </div>
    );
  });

  const classNames = ['row'];
  if (widget.get('verticallyAligned') === 'yes') {
    classNames.push('vertical-align');
  }

  return (
    <div className={ classNames.join(' ') }>
      { content }
    </div>
  );
});

export default ColumnsWidget;
