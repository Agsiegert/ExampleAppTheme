import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

const ButtonWidgetComponent = Scrivito.connect(({ widget }) => {
  const target = widget.get('target');
  let text = target && target.title();
  if (!text) {
    text = <InPlaceEditingPlaceholder>
      Provide the button text in the widget properties.
    </InPlaceEditingPlaceholder>;
  }

  return (
    <Scrivito.LinkTag to={ target } className="button">
      { text }
    </Scrivito.LinkTag>
  );
});

Scrivito.provideComponent('ButtonWidget', ({ widget }) => {
  if (['center', 'right'].includes(widget.get('alignment'))) {
    return (
      <div className={ `text-${widget.get('alignment')}` }>
        <ButtonWidgetComponent widget={ widget } />
      </div>
    );
  }

  return <ButtonWidgetComponent widget={ widget } />;
});
