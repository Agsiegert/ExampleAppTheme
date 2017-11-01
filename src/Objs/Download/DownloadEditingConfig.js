export default Scrivito.provideEditingConfig('Download', {
  attributesConfig: {
    tags: {
      title: 'Tags',
      description: 'Make it easier to find this download by adding some tags.',
    },
    title: {
      title: 'Title',
      description: 'The title of the download.',
    },
  },
  generalProperties: [
    'title',
    'tags',
  ],
});
