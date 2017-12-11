import jobObjIcon from 'assets/images/job_obj.svg';
import SectionWidget from 'Widgets/SectionWidget/SectionWidgetClass';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('Job', {
  title: 'Job',
  thumbnail: `/${jobObjIcon}`,
  attributes: {
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
  properties: [
    'title',
    'location',
    'image',
  ],
  propertiesGroups: [socialCardsCustomGroup],
  initialContent: {
    body: [new SectionWidget({})],
  },
  titleForContent: obj => obj.get('title'),
});
