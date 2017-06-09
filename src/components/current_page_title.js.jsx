import Helmet from 'react-helmet';

const CurrentPageTitle = scrivito.createComponent(() => {
  let title = '';
  if (scrivito.currentPage()) {
    title = scrivito.currentPage().get('title');
  }
  return <Helmet title={ title } />;
});

export default CurrentPageTitle;
