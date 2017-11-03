Scrivito.provideComponent('HeadlineWidget', ({ widget }) => {
  const level = widget.get('level') || 'h1';
  const style = widget.get('style') || level;
  const classNames = [style];
  if (widget.get('alignment')) {
    classNames.push(`text-${widget.get('alignment')}`);
  }
  if (widget.get('showDividingLine') === 'yes') {
    classNames.push('border-bottom');
  }
  if (widget.get('marginDisabled') === 'yes') {
    classNames.push('no-margin');
  }

  return <Scrivito.ContentTag
    tag={ level }
    content={ widget }
    attribute="headline"
    className={ classNames.join(' ') }
  />;
});
