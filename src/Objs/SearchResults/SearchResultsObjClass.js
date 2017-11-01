import { socialCardsAttributes } from '../_social_cards_attributes';

const SearchResults = Scrivito.provideObjClass('SearchResults', {
  attributes: {
    navigationBackgroundImage: 'reference',
    ...socialCardsAttributes,
  },
});

export default SearchResults;
