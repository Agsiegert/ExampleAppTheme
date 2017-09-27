import Event from 'objs/event';
import fullWidthTransformedUrl from 'utils/full_width_transformed_url';
import TagList from 'components/tag_list';
import twoDigitNumber from 'utils/two_digit_number';

const EventOverviewWidget = Scrivito.createWidgetClass({
  name: 'EventOverviewWidget',
  attributes: {
    maxItems: 'integer',
  },
});

Scrivito.provideUiConfig(EventOverviewWidget, {
  title: 'EventOverviewWidget',
  description: 'A widget showing all events.',
  attributes: {
    maxItems: {
      title: 'Maximum number of events',
      description: 'How many events should be shown maximally.',
    },
  },
});

const EventItem = Scrivito.connect(({ event }) => {
  const month = event.get('date').getMonth() + 1; // getMonth return 0 to 11.
  const dayOfMonth = event.get('date').getDate(); // getDate returns 1 to 31.

  return (
    <div className="col-sm-6">
      <Scrivito.LinkTag
        to={ event }
        className="box-card"
        style={ {
          background: 'no-repeat center / cover',
          backgroundImage: `linear-gradient(rgba(46, 53, 60, 0.7),
            rgba(46, 53, 60, 0.7)),
            url(${fullWidthTransformedUrl(event.get('image'))})`,
        } }
      >
        <span className="box-date">
          { twoDigitNumber(month) }/{ twoDigitNumber(dayOfMonth) }
        </span>
        <span className="box-topic dark-background">
          <h3 className="h3">{ event.get('title') }</h3>
          <span>
            <i
              className={ `fa ${event.get('location') ? 'fa-map-marker' : ''} fa-2x` }
              aria-hidden="true"
              title="location"
            />
            <span>{ event.get('location') }</span>
          </span>
        </span>
      </Scrivito.LinkTag>
    </div>
  );
});

class EventOverviewWidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTag: '' };

    this.setTag = this.setTag.bind(this);
  }

  render() {
    let eventsSearch = Scrivito.Obj.where('_objClass', 'equals', 'Event').order('date', 'asc');
    if (this.state.currentTag) {
      eventsSearch = eventsSearch.and('tags', 'equals', this.state.currentTag);
    }

    const tags = [...Event.all().facet('tags')].map(facet => facet.name());

    const maxItems = this.props.widget.get('maxItems');
    let events;
    if (maxItems) {
      events = eventsSearch.take(maxItems);
    } else {
      events = [...eventsSearch];
    }

    return (
      <div>
        <TagList
          showTags={ true }
          currentTag={ this.state.currentTag }
          setTag={ this.setTag }
          tags={ tags }
        />
        <section className="bg-white">
          <div className="row">
            {
              events.map((event, index) =>
                <EventItem key={ `${event.id}${index}` } event={ event } />)
            }
          </div>
        </section>
      </div>
    );
  }

  setTag(tag) {
    this.setState({
      currentTag: tag,
    });
  }
}

Scrivito.provideComponent(EventOverviewWidget, EventOverviewWidgetComponent);

export default EventOverviewWidget;
