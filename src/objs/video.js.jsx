const Video = Scrivito.createObjClass({
  name: 'Video',
  attributes: {
    blob: 'binary',
    title: 'string',
    tags: 'stringlist',
  },
});

Scrivito.provideEditingConfig(Video, {
  attributes: {
    title: {
      title: 'Title',
      description: 'The title of the video',
    },
    tags: {
      title: 'Tags',
      description: 'Make it easier to find this video by adding some tags.',
    },
  },
});

export default Video;
