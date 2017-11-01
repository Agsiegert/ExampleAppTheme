import { registerTextExtract } from 'utils/text_extract_registry';
import { socialCardsAttributes } from '../_social_cards_attributes';

const Job = Scrivito.provideObjClass('Job', {
  attributes: {
    body: ['widgetlist', { only: 'SectionWidget' }],
    image: 'reference',
    location: 'string',
    title: 'string',
    ...socialCardsAttributes,
  },
});

registerTextExtract('Job', [
  { attribute: 'location', type: 'string' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Job;
