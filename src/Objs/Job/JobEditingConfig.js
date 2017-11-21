import jobObjIcon from 'assets/images/job_obj.svg';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('Job', {
  title: 'Job',
  description: 'A Job',
  thumbnail: `/${jobObjIcon}`,
  attributesConfig: {
    image: {
      title: 'Image',
    },
    location: {
      title: 'Location',
      description: 'Where is this job located?',
    },
    title: {
      title: 'Title',
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
