Scrivito.provideComponent('ColumnContainerWidget', ({ widget }) => {
  const columns = widget.get('columns');

  if (!columns.length) {
    if (Scrivito.isInPlaceEditingActive()) {
      return (
        <p>
          No Columns (yet)!
          Please go to the widget properties to create and configure columns and their width.
        </p>
      );
    }

    return null;
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
