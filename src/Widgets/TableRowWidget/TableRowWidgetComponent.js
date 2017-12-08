function PlainTableRowWidgetComponent(
  { widget, header2, header3, header4 }
) {
  return (
    <tr>
      <Scrivito.ContentTag tag="th" content={ widget } attribute="feature" />
      <Scrivito.ContentTag
        tag="td"
        content={ widget }
        attribute="basicFeature"
        data-th={ header2 }
      />
      <Scrivito.ContentTag
        tag="td"
        content={ widget }
        attribute="teamFeature"
        data-th={ header3 }
      />
      <Scrivito.ContentTag
        tag="td"
        content={ widget }
        attribute="corporateFeature"
        data-th={ header4 }
      />
    </tr>
  );
}

const TableRowWidgetComponent = Scrivito.connect(PlainTableRowWidgetComponent);

export default TableRowWidgetComponent;
