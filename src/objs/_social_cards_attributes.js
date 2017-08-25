const socialCardsAttributes = {
  // Twitter Attributes
  tcCreator: 'string', // fallback to author.name
  tcDescription: 'string', // fallback to item.textExtract()
  tcImage: 'reference',  // fallback to titleImage
  tcTitle: 'string', // fallback to title

  // Open Graph attributes
  ogDescription: 'string', // fallback to item.textExtract()
  ogImage: 'reference', // fallback to titleImage
  ogTitle: 'string', // fallback to title
};

const socialCardsCustomGroup = {
  title: 'Social Cards',
  component: 'SocialCardsTab',
};

export {
  socialCardsAttributes,
  socialCardsCustomGroup,
};
