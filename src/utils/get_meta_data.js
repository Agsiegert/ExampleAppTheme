import textExtractFromObj from 'utils/text_extract_from_obj';

function getMetaData(page) {
  const meta = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'og:type', content: 'article' },
  ];

  const tcCreator = page.get('tcCreator');
  if (tcCreator) {
    meta.push({ name: 'twitter:creator', content: tcCreator });
  }

  const tcDescription = page.get('tcDescription') || textExtractFromObj(page).substring(0, 140);
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

  const ogDescription = page.get('ogDescription') || textExtractFromObj(page);
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
    const binary = obj.get(attribute);
    if (binary) {
      const blob = binary.get('blob');
      if (blob && !url) {
        url = blob.url();
      }
    }
  });

  return url;
}

export default getMetaData;
