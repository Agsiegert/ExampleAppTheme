import urlFromBinary from 'utils/url_from_binary';
import videoWidgetIcon from 'assets/images/video_widget.svg';

const VideoWidget = Scrivito.provideWidgetClass('VideoWidget', {
  attributes: {
    source: 'reference',
    poster: 'reference',
  },
});

Scrivito.provideEditingConfig('VideoWidget', {
  title: 'Video',
  description: 'A widget with a video.',
  thumbnail: `/${videoWidgetIcon}`,
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

export default VideoWidget;
