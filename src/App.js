import CurrentPageMetaData from 'Components/CurrentPageMetaData';
import Footer from 'Components/Footer';
import Navigation from 'Components/Navigation';
import NotFoundErrorPage from 'Components/not_found_error_page';
import InternalErrorPage from 'Components/InternalErrorPage';

export default function App() {
  return (
    <div>
      <div className="content-wrapper">
        <Navigation />
        <Scrivito.CurrentPage />
        <NotFoundErrorPage />
        <InternalErrorPage />
      </div>
      <Footer />
      <CurrentPageMetaData />
    </div>
  );
}
