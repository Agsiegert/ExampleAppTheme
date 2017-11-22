import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';
import twoDigitNumber from 'utils/twoDigitNumber';

function formatDate(date) {
  if (!date) {
    return (
      <InPlaceEditingPlaceholder>
        No date selected. Select one in the event properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const month = date.getMonth() + 1; // getMonth return 0 to 11.
  const dayOfMonth = date.getDate(); // getDate returns 1 to 31.
  const year = date.getFullYear(); // getFullYear returns values like 1999 or 2017.

  return `${twoDigitNumber(month)}/${twoDigitNumber(dayOfMonth)}/${year}`;
}

Scrivito.provideComponent('Event', ({ page }) =>
  <div>
    <section className="bg-white">
      <div className="container">
        <Scrivito.ContentTag tag="h1" className="h2" content={ page } attribute="title" />
        <h2 className="h4">
          <i className="fa fa-calendar fa-lg" aria-hidden="true" title="date" />
          { ' ' }
          { formatDate(page.get('date')) }
          { ' ' }
          <i className="fa fa-map-marker fa-lg" aria-hidden="true" title="location" />
          { ' ' }
          <Scrivito.ContentTag tag="span" content={ page } attribute="location" />
        </h2>
      </div>
    </section>
    <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
  </div>
);
