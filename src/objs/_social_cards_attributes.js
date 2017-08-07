const socialCardsAttributes = {
  // Twitter Attributes
  tcCard: 'string', // default to 'summary_large_image'
  tcCreator: 'string', // fallback to author.name
  tcDescription: 'string', // fallback to item.textExtract()
  tcImage: 'reference',  // fallback to titleImage
  tcSite: 'string', // e.g. @Scrivito
  tcTitle: 'title', // fallback to title

  // Open Graph attributes
  ogDescription: 'string', // fallback to item.textExtract()
  ogImage: 'reference', // fallback to titleImage
  ogTitle: 'string', // fallback to title
  ogType: 'string', // default to 'article'
};

const socialCardsCustomGroup = {
  title: 'Social Cards',
  component: 'SocialCardsTab',
};

export {
  socialCardsAttributes,
  socialCardsCustomGroup,
};
