import { registerTextExtract } from 'utils/text_extract_registry';

const Download = Scrivito.provideObjClass('Download', {
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
