import { registerTextExtract } from 'utils/text_extract_registry';
import { socialCardsAttributes } from '../_socialCardsAttributes';

const Blog = Scrivito.provideObjClass('Blog', {
  attributes: {
    title: 'string',
    navigationBackgroundImage: 'reference',
    body: ['widgetlist', { only: 'SectionWidget' }],
    ...socialCardsAttributes,
  },
});

registerTextExtract('Blog', [
  { attribute: 'body', type: 'widgetlist' },
]);

export default Blog;
