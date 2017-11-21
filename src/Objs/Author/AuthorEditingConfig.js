import authorObjIcon from 'assets/images/author_obj.svg';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('Author', {
  title: 'Author',
  description: 'An Author',
  thumbnail: `/${authorObjIcon}`,
  attributesConfig: {
    title: {
      title: 'Name',
    },
    description: {
      title: 'Description',
    },
    image: {
      title: 'Image',
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
