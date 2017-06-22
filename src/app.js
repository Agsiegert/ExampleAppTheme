import CurrentPageTitle from 'components/current_page_title';
import Navigation from 'components/navigation';
import NotFoundErrorPage from 'components/not_found_error_page';

export default function App() {
  return (
    <div>
      <Navigation />
      <Scrivito.React.CurrentPage />
      <NotFoundErrorPage />
      <Scrivito.React.InternalErrorPage />
      <CurrentPageTitle />
    </div>
  );
}
