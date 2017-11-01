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

export default Download;
