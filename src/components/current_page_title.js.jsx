import Helmet from 'react-helmet';

const CurrentPageTitle = Scrivito.createComponent(() => {
  let title = '';
  if (Scrivito.currentPage()) {
    title = Scrivito.currentPage().get('title');
  }
  return <Helmet title={ title } />;
});

export default CurrentPageTitle;
