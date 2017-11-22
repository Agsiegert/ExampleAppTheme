import PageObjIcon from 'assets/images/page_obj.svg';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('DirectivePage', {
  title: 'Directive Page',
  description: 'A Directive Themed Page',
  thumbnail: `/${PageObjIcon}`,
  attributesConfig: {
    title: {
      title: 'Page Title' },
    image1: {
      title: 'Image1',
    },
    image2: {
      title: 'Image2',
    },
    image3: {
      title: 'Image3',
    },
  },
  generalProperties: [
    'title',
    'image1',
    'image2',
    'image3',
  ],
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});
