import SearchResultsObjIcon from 'assets/images/search_results_obj.svg';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('SearchResults', {
  title: 'Search Results',
  description: 'A Search Results Page',
  thumbnail: `/${SearchResultsObjIcon}`,
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
