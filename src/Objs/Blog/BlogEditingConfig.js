import blogObjIcon from 'assets/images/blog_obj.svg';
import SectionWidget from 'Widgets/SectionWidget/SectionWidgetClass';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('Blog', {
  title: 'Blog',
  thumbnail: `/${blogObjIcon}`,
  attributes: {
    title: {
      title: 'Title',
      description: 'The title is only used for the navigation.',
    },
    navigationBackgroundImage: {
      title: 'Header image',
      description: 'The background image of the header.',
    },
  },
  properties: [
    'title',
    'navigationBackgroundImage',
  ],
  propertiesGroups: [socialCardsCustomGroup],
  initialContent: {
    body: [new SectionWidget({})],
  },
  titleForContent: obj => obj.get('title'),
});
