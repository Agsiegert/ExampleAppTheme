import { socialCardsCustomGroup } from '../_social_cards_attributes';

Scrivito.provideEditingConfig('BlogPost', {
  title: 'BlogPost',
  description: 'A Blog Post',
  attributesConfig: {
    author: {
      title: 'Author',
      description: 'The author of the blog post.',
    },
    publishedAt: {
      title: 'Published At',
      description: 'When will this blog post be published.',
    },
    titleImage: {
      title: 'Title image',
      description: 'The title image of the blog post.',
    },
    tags: {
      title: 'Tags',
      description: 'The tags of the blog post.',
    },
  },
  generalProperties: [
    'author',
    'publishedAt',
    'titleImage',
    'tags',
  ],
  propertiesGroups: [socialCardsCustomGroup],
  titleForContent: obj => obj.get('title'),
});
