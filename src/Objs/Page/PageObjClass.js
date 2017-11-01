import { registerTextExtract } from 'utils/text_extract_registry';
import { socialCardsAttributes } from '../_social_cards_attributes';
import { defaultPageAttributes } from '../_default_page_attributes';

const Page = Scrivito.provideObjClass('Page', {
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    ...socialCardsAttributes,
  },
});

registerTextExtract('Page', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Page;
