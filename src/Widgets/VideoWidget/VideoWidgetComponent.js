import urlFromBinary from 'utils/urlFromBinary';

Scrivito.provideComponent('VideoWidget', ({ widget }) => {
  const videoUrl = urlFromBinary(widget.get('source'));

  if (!videoUrl) {
    if (Scrivito.isInPlaceEditingActive()) {
      return (
        <p>
          No Video (yet)!
          Please go to the widget properties to select or upload a video.
        </p>
      );
    }

    return null;
  }

  const posterUrl = urlFromBinary(widget.get('poster'));

  return (
    <video src={ videoUrl } poster={ posterUrl } controls width='100%' />
  );
});
