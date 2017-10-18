import twoDigitNumber from 'utils/two_digit_number';
import { registerTextExtract } from 'utils/text_extract_registry';

const Event = Scrivito.createObjClass({
  name: 'Event',
  attributes: {
    body: ['widgetlist', { only: 'SectionWidget' }],
    date: 'date',
    image: 'reference',
    location: 'string',
    title: 'string',
    tags: 'stringlist',
  },
});

registerTextExtract('Event', [
  { attribute: 'location', type: 'string' },
  { attribute: 'body', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(Event, {
  title: 'Event',
  description: 'An Event',
  attributesConfig: {
    date: {
      title: 'Date',
      description: 'When is this event happening?',
    },
    image: {
      title: 'Image',
      description: 'The preview image of the event.',
    },
    location: {
      title: 'Location',
      description: 'Where is this event located?',
    },
    title: {
      title: 'Title',
      description: 'The title of the event.',
    },
    tags: {
      title: 'Tags',
      description: 'Which tags can be associated with this event?',
    },
  },
  titleForContent: obj => obj.get('title'),
});

function formatDate(date) {
  if (!date) { return null; }

  const month = date.getMonth() + 1; // getMonth return 0 to 11.
  const dayOfMonth = date.getDate(); // getDate returns 1 to 31.
  const year = date.getFullYear(); // getFullYear returns values like 1999 or 2017.

  return `${twoDigitNumber(month)}/${twoDigitNumber(dayOfMonth)}/${year}`;
}

Scrivito.provideComponent(Event, ({ page }) =>
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

export default Event;
