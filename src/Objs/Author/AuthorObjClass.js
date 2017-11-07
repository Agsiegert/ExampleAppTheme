import { registerTextExtract } from 'utils/text_extract_registry';
import { socialCardsAttributes } from '../_social_cards_attributes';

const Author = Scrivito.provideObjClass('Author', {
  attributes: {
    name: 'string',
    description: 'string',
    image: 'reference',
    ...socialCardsAttributes,
  },
});

registerTextExtract('Author', [
  { attribute: 'name', type: 'string' },
  { attribute: 'description', type: 'string' },
]);

export default Author;
