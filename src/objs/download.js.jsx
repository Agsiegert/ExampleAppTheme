const Download = Scrivito.createObjClass({
  name: 'Download',
  attributes: {
    blob: 'binary',
    tags: 'stringlist',
    title: 'string',
  },
});

Scrivito.provideEditingConfig(Download, {
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
});

export default Download;
