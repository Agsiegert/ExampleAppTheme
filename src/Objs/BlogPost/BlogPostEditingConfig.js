import blogPostObjIcon from 'assets/images/blog_post_obj.svg';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('BlogPost', {
  title: 'BlogPost',
  description: 'A Blog Post',
  thumbnail: `/${blogPostObjIcon}`,
  attributes: {
    author: {
      title: 'Author',
    },
    publishedAt: {
      title: 'Published at',
      description: 'When will this blog post be published?',
    },
    titleImage: {
      title: 'Header image',
      description: 'The background image of the header.' +
        ' If no image is selected, the header image of the blog is shown.',
    },
    tags: {
      title: 'Tags',
    },
  },
  properties: [
    'author',
    'publishedAt',
    'titleImage',
    'tags',
  ],
  propertiesGroups: [socialCardsCustomGroup],
  initialContent: {
    publishedAt: () => new Date(),
  },
  titleForContent: obj => obj.get('title'),
});
