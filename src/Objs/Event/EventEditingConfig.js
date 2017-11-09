import eventObjIcon from 'assets/images/event_obj.svg';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('Event', {
  title: 'Event',
  description: 'An Event',
  thumbnail: `/${eventObjIcon}`,
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
