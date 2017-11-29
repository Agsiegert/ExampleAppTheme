import { registerTextExtract } from 'utils/textExtractRegistry';
import { defaultPageAttributes } from '../_defaultPageAttributes';
import { socialCardsAttributes } from '../_socialCardsAttributes';

const Homepage = Scrivito.provideObjClass('Homepage', {
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    footer: ['widgetlist', { only: 'SectionWidget' }],
    logoDark: 'reference',
    logoWhite: 'reference',
    dividerLogo: 'reference',
    facebookId: 'string',
    twitterId: 'string',
    headline: ['widgetlist', { only: 'TextWidget' }],
    headlineContent: ['widgetlist', { only: 'TextWidget' }],
    banner: ['widgetlist', { only: 'TextWidget' }],
    image1: 'reference',
    feature1Headline: 'string',
    feature1Content: 'string',
    image2: 'reference',
    feature2Headline: 'string',
    feature2Content: 'string',
    image3: 'reference',
    feature3Headline: 'string',
    feature3Content: 'string',
    banner2: 'widgetlist',
    button: ['widgetlist', { only: 'ButtonWidget' }],
    body: 'widgetlist',
    ...socialCardsAttributes,
  },
});

registerTextExtract('Homepage', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default Homepage;
