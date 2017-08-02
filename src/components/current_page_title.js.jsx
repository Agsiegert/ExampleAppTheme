import Helmet from 'react-helmet';

function CurrentPageTitle() {
  let title = '';
  if (Scrivito.currentPage()) {
    title = Scrivito.currentPage().get('title');
  }
  return <Helmet title={ title } />;
}

export default Scrivito.React.connect(CurrentPageTitle);
