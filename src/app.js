import Footer from 'components/footer';
import Navigation from 'components/navigation';
import NotFoundErrorPage from 'components/not_found_error_page';
import CurrentPageMetaData from 'components/current_page_meta_data';

export default function App() {
  return (
    <div>
      <div className="content-wrapper">
        <CurrentPageMetaData />
        <Navigation />
        <Scrivito.React.CurrentPage />
        <NotFoundErrorPage />
        <Scrivito.React.InternalErrorPage />
      </div>
      <Footer />
    </div>
  );
}
