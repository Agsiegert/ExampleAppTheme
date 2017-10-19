import urlFromBinary from 'utils/url_from_binary';

const VideoWidget = Scrivito.createWidgetClass({
  name: 'VideoWidget',
  attributes: {
    source: 'reference',
    poster: 'reference',
  },
});

Scrivito.provideEditingConfig(VideoWidget, {
  title: 'Video',
  description: 'A widget with a video.',
  attributesConfig: {
    source: {
      title: 'Video',
      description: 'Click to select or upload video. This should be of type video/mp4',
    },
    poster: {
      title: 'Poster',
      description: 'Poster image for video player.',
    },
  },
  generalProperties: [
    'source',
    'poster',
  ],
});

Scrivito.provideComponent(VideoWidget, ({ widget }) => {
  const videoUrl = urlFromBinary(widget.get('source'));

  if (!videoUrl) {
    // TODO Add a "No Video, use widget properties to add a Video..."
    // once https://github.com/infopark/rails_connector/issues/3318 is available.
    return <p/>;
  }

  const posterUrl = urlFromBinary(widget.get('poster'));

  return (
    <video src={ videoUrl } poster={ posterUrl } controls width='100%' />
  );
});

export default VideoWidget;
