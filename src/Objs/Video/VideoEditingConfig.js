import Video from './Video';

export default Scrivito.provideEditingConfig(Video, {
  attributesConfig: {
    title: {
      title: 'Title',
      description: 'The title of the video.',
    },
    tags: {
      title: 'Tags',
      description: 'Make it easier to find this video by adding some tags.',
    },
  },
  generalProperties: [
    'title',
    'tags',
  ],
});
