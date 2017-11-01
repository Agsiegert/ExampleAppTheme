const Image = Scrivito.provideObjClass('Image', {
  attributes: {
    blob: 'binary',
    tags: 'stringlist',
    title: 'string',
  },
});

export default Image;
