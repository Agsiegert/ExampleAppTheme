import { registerTextExtract } from 'utils/textExtractRegistry';
import { defaultPageAttributes } from '../_defaultPageAttributes';
import { socialCardsAttributes } from '../_socialCardsAttributes';

const Homepage = Scrivito.provideObjClass('Homepage', {
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    // footer: ['widgetlist', { only: 'SectionWidget' }],
    logoDark: 'reference',
    logoWhite: 'reference',
    dividerLogo: 'reference',
    facebookId: 'string',
    twitterId: 'string',
    ...socialCardsAttributes,
    icon: ['widgetlist', { only: 'IconWidget' }],
    header: 'widgetlist',
    image1: 'reference',
  },
});

registerTextExtract('Homepage', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Homepage;
