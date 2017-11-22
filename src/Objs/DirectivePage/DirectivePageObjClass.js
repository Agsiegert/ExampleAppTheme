import { registerTextExtract } from 'utils/textExtractRegistry';
import { socialCardsAttributes } from '../_socialCardsAttributes';

const DirectivePage = Scrivito.provideObjClass('DirectivePage', {
  attributes: {
    title: 'string',
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

registerTextExtract('DirectivePage', [
  { attribute: 'body', type: 'widgetlist' },
]);

export default DirectivePage;
