import fullWidthTransformedUrl from 'utils/full_width_transformed_url';

Scrivito.provideComponent('SectionWidget', ({ widget }) => {
  const sectionClassNames = [];

  const backgroundColor = widget.get('backgroundColor') || 'white';
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

  const sectionStyle = {};
  if (backgroundColor === 'dark-image') {
    const backgroundImage = widget.get('backgroundImage');
    if (backgroundImage) {
      const backgroundUrl = fullWidthTransformedUrl(backgroundImage);
      sectionStyle.background = 'no-repeat center / cover';
      sectionStyle.backgroundImage = [
        'linear-gradient(rgba(46, 53, 60, 0.7)',
        'rgba(46, 53, 60, 0.7))',
        `url(${backgroundUrl})`,
      ].join(', ');
    }
  }

  return (<section className={ sectionClassNames.join(' ') } style={ sectionStyle }>
    <Scrivito.ContentTag className={ contentClassName } content={ widget } attribute="content" />
  </section>);
});
