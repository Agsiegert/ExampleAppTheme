import { registerTextExtract } from 'utils/text_extract_registry';
import { socialCardsAttributes } from '../_social_cards_attributes';

const BlogPost = Scrivito.createObjClass({
  name: 'BlogPost',
  attributes: {
    author: 'reference',
    body: ['widgetlist', { only: 'SectionWidget' }],
    publishedAt: 'date',
    subtitle: 'string',
    tags: 'stringlist',
    title: 'string',
    titleImage: 'reference',
    ...socialCardsAttributes,
  },
});

registerTextExtract('BlogPost', [
  { attribute: 'body', type: 'widgetlist' },
]);

export default BlogPost;
