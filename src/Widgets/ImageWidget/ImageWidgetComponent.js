Scrivito.provideComponent('ImageWidget', ({ widget }) => {
  const image = <Scrivito.ImageTag content={ widget } attribute="image" />;

  if (['center', 'right'].includes(widget.get('alignment'))) {
    return (
      <div className={ `text-${widget.get('alignment')}` }>
        { image }
      </div>
    );
  }

  return image;
});
