import { registerTextExtract } from 'utils/text_extract_registry';

const Download = Scrivito.createObjClass({
  name: 'Download',
  attributes: {
    blob: 'binary',
    tags: 'stringlist',
    title: 'string',
  },
});

registerTextExtract('Download', [
  { attribute: 'text', type: 'metadata' },
]);

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
  generalProperties: [
    'title',
    'tags',
  ],
});

export default Download;
