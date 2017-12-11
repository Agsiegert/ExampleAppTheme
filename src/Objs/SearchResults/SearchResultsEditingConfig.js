import SearchResultsObjIcon from 'assets/images/search_results_obj.svg';
import { socialCardsCustomGroup } from '../_socialCardsAttributes';

Scrivito.provideEditingConfig('SearchResults', {
  title: 'Search Results',
  thumbnail: `/${SearchResultsObjIcon}`,
  attributes: {
    navigationBackgroundImage: {
      title: 'Header image',
      description: 'The background image of the header.',
    },
  },
  properties: [
    'navigationBackgroundImage',
  ],
  propertiesGroups: [socialCardsCustomGroup],
});
