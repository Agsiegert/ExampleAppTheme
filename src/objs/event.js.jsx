const BaseEvent = Scrivito.createObjClass({
  name: 'Event',
  attributes: {
    date: 'date',
    image: 'reference',
    location: 'string',
    headline: 'string',
    tags: 'stringlist',
  },
});

class Event extends BaseEvent {
  navigationOptions() {
    if (this.get('image')) {
      return {
        navigationStyle: 'transparentDark',
        backgroundImage: this.get('image'),
        heigthClassName: 'min-height',
      };
    }

    return {
      navigationStyle: 'solidWhite',
      backgroundImage: null,
      heigthClassName: null,
    };
  }
}

Scrivito.registerClass('Event', Event);

Scrivito.provideUiConfig(Event, {
  title: 'Event',
  description: 'An Event.',
  attributes: {
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
    headline: {
      title: 'Headline',
      description: 'The headline of the event.',
    },
    tags: {
      title: 'Tags',
      description: 'Which tags can be associated with this event.',
    },
  },
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(Event, ({ page }) => {
  return (
    <div>
      <section className="bg-white">
        <div className="container">
          <Scrivito.React.Content tag="h1" className="h2" content={ page } attribute="headline" />
          <span>
            <i className="fa fa-map-marker fa-2x" aria-hidden="true" title="location" />
            <Scrivito.React.Content tag="span" content={ page } attribute="location" />
          </span>
        </div>
      </section>
    </div>
  );
});

export default Event;
