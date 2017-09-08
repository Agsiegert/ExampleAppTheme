import fallbackImageUrl from 'utils/fallback_image_url';

const VideoWidget = Scrivito.createWidgetClass({
  name: 'VideoWidget',
  attributes: {
    source: 'reference',
    poster: 'reference',
  },
});

Scrivito.provideUiConfig(VideoWidget, {
  title: 'Video',
  description: 'A widget with a video.',
  attributes: {
    source: {
      title: 'Video',
      description: 'Click to select or upload video.',
    },
    poster: {
      title: 'Poster',
      description: 'Poster image for video player.',
    },
  },
});

function posterImage(widget) {
  const providedPoster = widget.get('poster');
  if (!providedPoster) { return fallbackImageUrl; }

  const image = providedPoster.get('blob').url();
  return image;
}

Scrivito.provideComponent(VideoWidget, ({ widget }) => {
  if (widget.get('source')) {
    const video = widget.get('source').get('blob').url();

    return (
      <video width='100%' poster={ posterImage(widget) }
        controls
        autoPlay
        muted
        loop
      >
        <source src={ video } type='video/mp4' />
      </video>
    );
  }
  return (
    <div className="panel panel-theme">
      <Scrivito.React.Content content={ widget } attribute="source" className="panel-body">
        No Video, use widget properties to add a Video...
      </Scrivito.React.Content>
    </div>
  );
});

export default VideoWidget;
