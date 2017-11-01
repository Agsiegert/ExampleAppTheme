import { registerTextExtract } from 'utils/text_extract_registry';
import { socialCardsAttributes } from '../_social_cards_attributes';
import { defaultPageAttributes } from '../_default_page_attributes';

const LandingPage = Scrivito.provideObjClass('LandingPage', {
  attributes: {
    ...defaultPageAttributes,
    ...socialCardsAttributes,
  },
});

registerTextExtract('LandingPage', [
  { attribute: 'navigationSection', type: 'widgetlist' },
  { attribute: 'body', type: 'widgetlist' },
]);

export default LandingPage;
