const Video = Scrivito.provideObjClass('Video', {
  attributes: {
    blob: 'binary',
    title: 'string',
    tags: 'stringlist',
  },
});

export default Video;
