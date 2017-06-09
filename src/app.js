import CurrentPageTitle from 'components/current_page_title';

export default function App() {
  return (
    <div>
      <scrivito.React.CurrentPage />
      <scrivito.React.NotFoundErrorPage />
      <scrivito.React.InternalErrorPage />
      <CurrentPageTitle />
    </div>
  );
}
