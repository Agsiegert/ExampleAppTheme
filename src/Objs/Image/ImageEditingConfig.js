export default Scrivito.provideEditingConfig('Image', {
  attributesConfig: {
    tags: {
      title: 'Tags',
      description: 'Make it easier to find this Image by adding some tags.',
    },
    title: {
      title: 'Title',
      description: 'The title of the image.',
    },
  },
  generalProperties: [
    'title',
    'tags',
  ],
});

