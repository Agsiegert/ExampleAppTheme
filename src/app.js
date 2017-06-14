import CurrentPageTitle from 'components/current_page_title';
import NotFoundErrorPage from 'components/not_found_error_page';

export default function App() {
  return (
    <div>
      <Scrivito.React.CurrentPage />
      <NotFoundErrorPage />
      <Scrivito.React.InternalErrorPage />
      <CurrentPageTitle />
    </div>
  );
}
