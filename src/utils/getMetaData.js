import textExtractFromObj from 'utils/textExtractFromObj';
import truncate from 'lodash/truncate';
import urlFromBinary from 'utils/urlFromBinary';

function getMetaData(page) {
  const meta = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: Scrivito.urlFor(page) },
  ];
  const textExtract = textExtractFromObj(page);

  const facebookId = Scrivito.Obj.root().get('facebookId');
  if (facebookId) {
    meta.push({ property: 'fb:app_id', content: facebookId });
  }

  const twitterId = Scrivito.Obj.root().get('twitterId');
  if (twitterId) {
    meta.push({ name: 'twitter:site', content: twitterId });
  }

  const tcCreator = page.get('tcCreator');
  if (tcCreator) {
    meta.push({ name: 'twitter:creator', content: tcCreator });
  }

  const tcDescription = page.get('tcDescription') ||
    truncate(textExtract, { length: 137, separator: /,? +/ });
  if (tcDescription) {
    meta.push({ name: 'twitter:description', content: tcDescription });
  }

  const tcImage = firstUrlForAttributes(page,
    ['tcImage', 'titleImage', 'navigationBackgroundImage', 'image']);
  if (tcImage) {
    meta.push({ name: 'twitter:image', content: tcImage });
  }

  const tcTitle = page.get('tcTitle') || page.get('title');
  if (tcTitle) {
    meta.push({ name: 'twitter:title', content: tcTitle });
  }

  const ogDescription = page.get('ogDescription') ||
    truncate(textExtract, { length: 297, separator: /,? +/ });
  if (ogDescription) {
    meta.push({ property: 'og:description', content: ogDescription });
  }

  const ogImage = firstUrlForAttributes(page,
    ['ogImage', 'titleImage', 'navigationBackgroundImage', 'image']);
  if (ogImage) {
    meta.push({ property: 'og:image', content: ogImage });
  }

  const ogTitle = page.get('ogTitle') || page.get('title');
  if (ogTitle) {
    meta.push({ property: 'og:title', content: ogTitle });
  }

  return meta;
}

function firstUrlForAttributes(obj, attributes) {
  let url;

  attributes.forEach(attribute => {
    if (url) { return; }
    const binary = obj.get(attribute);
    url = urlFromBinary(binary);
  });

  return url;
}

export default getMetaData;
