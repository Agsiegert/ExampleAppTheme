import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';
import urlFromBinary from 'utils/urlFromBinary';

Scrivito.provideComponent('VideoWidget', ({ widget }) => {
  const videoUrl = urlFromBinary(widget.get('source'));

  if (!videoUrl) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Select a video in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const posterUrl = urlFromBinary(widget.get('poster'));

  return (
    <video src={ `${videoUrl}#t=0.01` } poster={ posterUrl } controls width='100%' />
  );
});
