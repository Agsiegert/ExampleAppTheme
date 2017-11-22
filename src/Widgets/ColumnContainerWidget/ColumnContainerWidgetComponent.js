import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('ColumnContainerWidget', ({ widget }) => {
  const columns = widget.get('columns');

  if (!columns.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        No columns defined. Define them in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const content = columns.map((columnWidget, index) => {
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
      { content }
    </div>
  );
});
