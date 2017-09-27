import Helmet from 'react-helmet';
import getMetaData from 'utils/get_meta_data';

const CurrentPageMetaData = Scrivito.connect(() => {
  const htmlAttributes = { lang: 'en' };
  let title = '';
  let meta = [];

  const page = Scrivito.currentPage();
  if (page) {
    title = page.get('title') || '';
    meta = getMetaData(page);
  }

  return <Helmet meta={ meta } htmlAttributes={ htmlAttributes } title={ title } />;
});

export default CurrentPageMetaData;
