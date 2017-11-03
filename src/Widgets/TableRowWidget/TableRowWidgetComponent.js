function PlainTableRowWidgetComponent(
  { widget, basicPlanHeadline, teamPlanHeadline, corporatePlanHeadline }
) {
  return (
    <tr>
      <Scrivito.ContentTag tag="th" content={ widget } attribute="feature" />
      <Scrivito.ContentTag
        tag="td"
        content={ widget }
        attribute="basicFeature"
        data-th={ basicPlanHeadline }
      />
      <Scrivito.ContentTag
        tag="td"
        content={ widget }
        attribute="teamFeature"
        data-th={ teamPlanHeadline }
      />
      <Scrivito.ContentTag
        tag="td"
        content={ widget }
        attribute="corporateFeature"
        data-th={ corporatePlanHeadline }
      />
    </tr>
  );
}

const TableRowWidgetComponent = Scrivito.connect(PlainTableRowWidgetComponent);

export default TableRowWidgetComponent;
