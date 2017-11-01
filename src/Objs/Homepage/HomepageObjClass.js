import { registerTextExtract } from 'utils/text_extract_registry';
import { defaultPageAttributes } from '../_default_page_attributes';
import { socialCardsAttributes } from '../_social_cards_attributes';

const Homepage = Scrivito.createObjClass({
  name: 'Homepage',
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    footer: ['widgetlist', { only: 'SectionWidget' }],
    logoDark: 'reference',
    logoWhite: 'reference',
    facebookId: 'string',
    twitterId: 'string',
    ...socialCardsAttributes,
  },
});

registerTextExtract('Homepage', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Homepage;
