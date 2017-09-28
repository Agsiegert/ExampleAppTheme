import twoDigitNumber from 'utils/two_digit_number';

const Event = Scrivito.createObjClass({
  name: 'Event',
  attributes: {
    date: 'date',
    image: 'reference',
    location: 'string',
    title: 'string',
    tags: 'stringlist',
  },
});

Scrivito.registerClass('Event', Event);

Scrivito.provideEditingConfig(Event, {
  title: 'Event',
  description: 'An Event.',
  attributesConfig: {
    date: {
      title: 'Date',
      description: 'When is this event happening.',
    },
    image: {
      title: 'Image',
      description: 'The preview image of the event.',
    },
    location: {
      title: 'Location',
      description: 'Where is this event located.',
    },
    title: {
      title: 'title',
      description: 'The title of the event.',
    },
    tags: {
      title: 'Tags',
      description: 'Which tags can be associated with this event.',
    },
  },
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(Event, ({ page }) => {
  const month = page.get('date').getMonth() + 1; // getMonth return 0 to 11.
  const dayOfMonth = page.get('date').getDate(); // getDate returns 1 to 31.
  const year = page.get('date').getFullYear(); // getFullYear returns values like 1999 or 2017.

  return (
    <div>
      <section className="bg-white">
        <div className="container">
          <Scrivito.ContentTag tag="h1" className="h2" content={ page } attribute="title" />
          <h2 className="h4">
            <i className="fa fa-calendar fa-lg" aria-hidden="true" title="location" />
            { ' ' }
            { twoDigitNumber(month) }/{ twoDigitNumber(dayOfMonth) }/{ year }
            { ' ' }
            <i className="fa fa-map-marker fa-lg" aria-hidden="true" title="location" />
            { ' ' }
            <Scrivito.ContentTag tag="span" content={ page } attribute="location" />
          </h2>
        </div>
      </section>
    </div>
  );
});

export default Event;
