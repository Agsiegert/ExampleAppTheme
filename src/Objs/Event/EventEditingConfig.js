import { socialCardsCustomGroup } from '../_social_cards_attributes';

export default Scrivito.provideEditingConfig('Event', {
  title: 'Event',
  description: 'An Event',
  attributesConfig: {
    date: {
      title: 'Date',
      description: 'When is this event happening?',
    },
    image: {
      title: 'Image',
      description: 'The preview image of the event.',
    },
    location: {
      title: 'Location',
      description: 'Where is this event located?',
    },
    title: {
      title: 'Title',
      description: 'The title of the event.',
    },
    tags: {
      title: 'Tags',
      description: 'Which tags can be associated with this event?',
    },
  },
  generalProperties: [
    'title',
    'date',
    'location',
    'image',
    'tags',
  ],
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});
