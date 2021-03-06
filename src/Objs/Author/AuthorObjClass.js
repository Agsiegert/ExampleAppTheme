import { registerTextExtract } from 'utils/textExtractRegistry';
import { socialCardsAttributes } from '../_socialCardsAttributes';

const Author = Scrivito.provideObjClass('Author', {
  attributes: {
    title: 'string',
    description: 'string',
    image: 'reference',
    ...socialCardsAttributes,
  },
});

registerTextExtract('Author', [
  { attribute: 'description', type: 'string' },
]);

export default Author;
