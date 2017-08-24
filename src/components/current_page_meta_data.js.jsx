import Helmet from 'react-helmet';

import textExtractFromObj from 'utils/text_extract_from_obj';

const CurrentPageMetaData = Scrivito.React.connect(() => {
  const page = Scrivito.currentPage() || Scrivito.Obj.root();
  const canonicalPath = page.objClass === 'Homepage' ? '' :
      `${page.permalink || `${page.slug()}-${page.id}`}`;
  const canonicalUrl = `https://scrivito.com/${canonicalPath}`;
  const title = page.get('title') || '';
  const robots = Array(page.get('metaRobots')).join(',') || 'index,follow';
  const link = [{ href: canonicalUrl, rel: 'canonical' }];
  const twitterCardCreator = page.get('tcCreator') || '@Scrivito';
  const twitterDescription = page.get('tcDescription') || textExtractFromObj(page);
  const twitterCardImage = (page.get('tcImage') && page.get('tcImage').get('blob').url())
    || (page.get('titleImage') && page.get('tcImage').get('blob').url());
  const twitterCardTitle = page.get('tcTitle') || page.get('title');
  const openGraphDescription = page.get('ogDescription') || textExtractFromObj(page);
  const openGraphImage = (page.get('ogImage') && page.get('ogImage').get('blob').url())
    || (page.get('titleImage') && page.get('tcImage').get('blob').url());
  const openGraphTitle = page.get('ogTitle') || page.get('title');

  const meta = [
    { charset: 'utf-8' },
    { name: 'robots', content: robots },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: twitterCardCreator },
    { name: 'twitter:description', content: twitterDescription },
    { name: 'twitter:image', content: twitterCardImage },
    { name: 'twitter:site', content: '@Scrivito' },
    { name: 'twitter:title', content: twitterCardTitle },
    { property: 'og:description', content: openGraphDescription },
    { property: 'og:image', content: openGraphImage },
    { property: 'og:site_name', content: 'Scrivito' },
    { property: 'og:title', content: openGraphTitle },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'fb:app_id', content: '1064094826955755' }, // TODO this is scrivito.com's
  ];
  const htmlAttributes = { lang: 'en' };
  return <Helmet meta={ meta } htmlAttributes={ htmlAttributes } link={ link } title={ title } />;
});

export default CurrentPageMetaData;
