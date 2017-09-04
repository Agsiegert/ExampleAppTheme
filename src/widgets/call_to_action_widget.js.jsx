const CallToActionWidget = Scrivito.createWidgetClass({
  name: 'CallToActionWidget',
  attributes: {
    icon: 'string',
  },
});

Scrivito.registerClass('CallToActionWidget', CallToActionWidget);

Scrivito.provideComponent(CallToActionWidget, ({ widget }) => {
  return (
    <Scrivito.React.Link className="btn btn-primary" to={ Scrivito.currentPage() }>
      Call to action
      <i className={ `fa ${widget.get('icon') || 'fa-angle-right'} fa-4` } aria-hidden="true" />
    </Scrivito.React.Link>
  );
});

export default CallToActionWidget;
