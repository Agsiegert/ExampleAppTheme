import { socialCardsAttributes } from '../_socialCardsAttributes';

const SearchResults = Scrivito.provideObjClass('SearchResults', {
  attributes: {
    navigationBackgroundImage: 'reference',
    ...socialCardsAttributes,
  },
});

export default SearchResults;
