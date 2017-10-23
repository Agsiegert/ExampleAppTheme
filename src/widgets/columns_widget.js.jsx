import columnWidgetIcon from 'assets/images/column_widget.svg';
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
  thumbnail: `/${columnWidgetIcon}`,
  attributesConfig: {
    verticallyAligned: {
      title: 'Vertically Aligned',
      description: 'Should the columns be vertically aligned? Default: no',
    },
    columns: {
      title: 'Columns',
      description: 'The columns. Will soon be replaced with a fancy editor.',
    },
  },
  generalProperties: [
    'verticallyAligned',
    'columns',
  ],
  propertiesGroups: [
    {
      title: 'Columns Editor',
      component: 'ColumnsEditorTab',
    },
  ],
});

Scrivito.provideComponent(ColumnsWidget, ({ widget }) => {
  const cols = widget.get('columns').map((columnWidget, index) => {
    const colSize = columnWidget.get('colSize') || 1;
    return (
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
      { cols }
    </div>
  );
});

export default ColumnsWidget;
