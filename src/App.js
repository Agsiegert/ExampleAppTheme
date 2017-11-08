import CurrentPageMetaData from 'Components/current_page_meta_data';
import Footer from 'Components/footer';
import Navigation from 'Components/navigation';
import NotFoundErrorPage from 'Components/not_found_error_page';
import InternalErrorPage from 'Components/internal_error_page';

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
