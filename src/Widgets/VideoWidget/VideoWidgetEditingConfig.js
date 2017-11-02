import videoWidgetIcon from 'assets/images/video_widget.svg';

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
