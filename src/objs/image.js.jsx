const Image = Scrivito.createObjClass({
  name: 'Image',
  attributes: {
    blob: 'binary',
    tags: 'stringlist',
    title: 'string',
  },
});

Scrivito.provideEditingConfig(Image, {
  attributes: {
    tags: {
      title: 'Tags',
      description: 'Make it easier to find this Image by adding some tags.',
    },
    title: {
      title: 'Title',
      description: 'The title of the image',
    },
  },
});

export default Image;
