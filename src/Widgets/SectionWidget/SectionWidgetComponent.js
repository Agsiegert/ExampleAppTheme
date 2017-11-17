import fullWidthTransformedUrl from 'utils/fullWidthTransformedUrl';

Scrivito.provideComponent('SectionWidget', ({ widget }) => {
  const sectionClassNames = [];
  const sectionStyle = {};

  let backgroundColor = widget.get('backgroundColor') || 'white';

  const backgroundImage = widget.get('backgroundImage');
  if (backgroundImage) {
    backgroundColor = 'dark-image';
    const backgroundUrl = fullWidthTransformedUrl(backgroundImage);
    sectionStyle.background = 'no-repeat center / cover';
    sectionStyle.backgroundImage = [
      'linear-gradient(rgba(46, 53, 60, 0.7)',
      'rgba(46, 53, 60, 0.7))',
      `url(${backgroundUrl})`,
    ].join(', ');
  }

  sectionClassNames.push(`bg-${backgroundColor}`);

  if (widget.get('paddingDisabled') === 'yes') {
    sectionClassNames.push('no-padding');
  }

  let contentClassName = 'container';
  if (widget.get('useFullWidth') === 'yes') {
    contentClassName = 'container-fluid gutter0';
  }

  if (widget.get('useFullHeight') === 'yes') {
    sectionClassNames.push('full-height');
  }

  return (<section className={ sectionClassNames.join(' ') } style={ sectionStyle }>
    <Scrivito.ContentTag className={ contentClassName } content={ widget } attribute="content" />
  </section>);
});
