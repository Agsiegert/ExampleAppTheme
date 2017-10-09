import textExtractFromObj from 'utils/text_extract_from_obj';
import urlFromBinary from 'utils/url_from_binary';

function getMetaData(page) {
  const meta = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'og:type', content: 'article' },
    // TODO this should be the conanicalURl for the page
    // { property: 'og:url', content: 'https://example_app.com' },
  ];

  const facebookID = page.get('facebookID');
  if (facebookID) {
    meta.push({ name: 'fb:app_id', content: facebookID });
  }

  const twitterID = page.get('twitterID');
  if (twitterID) {
    meta.push({ name: 'twitter:site', content: twitterID });
  }

  const tcCreator = page.get('tcCreator');
  if (tcCreator) {
    meta.push({ name: 'twitter:creator', content: tcCreator });
  }

  const tcDescription = page.get('tcDescription') ||
    `${textExtractFromObj(page).substring(0, 137)}...`;
  if (tcDescription) {
    meta.push({ name: 'twitter:description', content: tcDescription });
  }

  const tcImage = firstUrlForAttributes(page, ['tcImage', 'titleImage']);
  if (tcImage) {
    meta.push({ name: 'twitter:image', content: tcImage });
  }

  const tcTitle = page.get('tcTitle') || page.get('title');
  if (tcTitle) {
    meta.push({ name: 'twitter:title', content: tcTitle });
  }

  const ogDescription = page.get('ogDescription') ||
    `${textExtractFromObj(page).substring(0, 297)}...`;
  if (ogDescription) {
    meta.push({ property: 'og:description', content: ogDescription });
  }

  const ogImage = firstUrlForAttributes(page, ['ogImage', 'titleImage']);
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
