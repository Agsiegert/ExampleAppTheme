import { registerTextExtract } from 'utils/text_extract_registry';
import { socialCardsAttributes } from '../_socialCardsAttributes';

const Event = Scrivito.provideObjClass('Event', {
  attributes: {
    body: ['widgetlist', { only: 'SectionWidget' }],
    date: 'date',
    image: 'reference',
    location: 'string',
    title: 'string',
    tags: 'stringlist',
    ...socialCardsAttributes,
  },
});

registerTextExtract('Event', [
  { attribute: 'location', type: 'string' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Event;
