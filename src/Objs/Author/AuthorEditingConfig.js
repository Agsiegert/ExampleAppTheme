import authorObjIcon from 'assets/images/author_obj.svg';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('Author', {
  title: 'Author',
  description: 'An Author',
  thumbnail: `/${authorObjIcon}`,
  attributesConfig: {
    title: {
      title: 'Name',
      description: 'The name of the author.',
    },
    description: {
      title: 'Description',
      description: 'The description of the author.',
    },
    image: {
      title: 'Image',
      description: 'The image of the author.',
    },
  },
  generalProperties: [
    'title',
    'description',
    'image',
  ],
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});
