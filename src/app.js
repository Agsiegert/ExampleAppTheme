import CurrentPageTitle from 'components/current_page_title';
import NotFoundErrorPage from 'components/not_found_error_page';

export default function App() {
  return (
    <div>
      <scrivito.React.CurrentPage />
      <NotFoundErrorPage />
      <scrivito.React.InternalErrorPage />
      <CurrentPageTitle />
    </div>
  );
}
