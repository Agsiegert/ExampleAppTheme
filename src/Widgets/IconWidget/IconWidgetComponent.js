import IconComponent from 'Components/icon';

Scrivito.provideComponent('IconWidget', ({ widget }) => {
  const icon = widget.get('icon');
  const link = widget.get('link');
  const size = widget.get('size');

  if (['center', 'right'].includes(widget.get('alignment'))) {
    return (
      <div className={ `text-${widget.get('alignment')}` }>
        <IconComponent icon={ icon } size={ size } link={ link } />
      </div>
    );
  }

  return <IconComponent icon={ icon } size={ size } link={ link } />;
});
