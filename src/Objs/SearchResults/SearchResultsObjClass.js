import { socialCardsAttributes } from '../_social_cards_attributes';

const SearchResults = Scrivito.createObjClass({
  name: 'SearchResults',
  attributes: {
    navigationBackgroundImage: 'reference',
    ...socialCardsAttributes,
  },
});

export default SearchResults;
