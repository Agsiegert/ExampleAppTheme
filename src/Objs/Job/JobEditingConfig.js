import Job from './Job';
import { socialCardsCustomGroup } from '../_social_cards_attributes';

export default Scrivito.provideEditingConfig(Job, {
  title: 'Job',
  description: 'A Job',
  attributesConfig: {
    image: {
      title: 'Image',
      description: 'The preview image of the job.',
    },
    location: {
      title: 'Location',
      description: 'Where is this job located?',
    },
    title: {
      title: 'Title',
      description: 'The title of the job.',
    },
  },
  generalProperties: [
    'title',
    'location',
    'image',
  ],
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});
