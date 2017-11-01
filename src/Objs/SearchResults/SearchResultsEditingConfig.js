import { socialCardsCustomGroup } from '../_social_cards_attributes';

export default Scrivito.provideEditingConfig('SearchResults', {
  title: 'Search Results',
  description: 'A Search Results Page',
  attributesConfig: {
    navigationBackgroundImage: {
      title: 'Navigation Background Image',
      description: 'The background image of the navigation.',
    },
  },
  generalProperties: [
    'navigationBackgroundImage',
  ],
  propertiesGroups: [socialCardsCustomGroup],
});
