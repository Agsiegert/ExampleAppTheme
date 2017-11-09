import { registerTextExtract } from 'utils/text_extract_registry';
import { defaultPageAttributes } from '../_defaultPageAttributes';
import { socialCardsAttributes } from '../_socialCardsAttributes';

const Homepage = Scrivito.provideObjClass('Homepage', {
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
