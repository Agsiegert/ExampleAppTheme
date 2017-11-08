import CurrentPageMetaData from 'components/current_page_meta_data';
import Footer from 'components/footer';
import Navigation from 'components/navigation';
import NotFoundErrorPage from 'components/not_found_error_page';
import InternalErrorPage from 'components/internal_error_page';

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
