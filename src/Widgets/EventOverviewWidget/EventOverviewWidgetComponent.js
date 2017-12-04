import Event from 'Objs/Event/EventObjClass';
import fullWidthTransformedUrl from 'utils/fullWidthTransformedUrl';
import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';
import TagList from 'Components/TagList';
import twoDigitNumber from 'utils/twoDigitNumber';

class EventOverviewWidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTag: '' };

    this.setTag = this.setTag.bind(this);
  }

  render() {
    let eventsSearch = Scrivito.Obj.where('_objClass', 'equals', 'Event').order('date', 'asc');
    const filterTags = this.props.widget.get('tags');
    if (filterTags.length) {
      eventsSearch = eventsSearch.and('tags', 'equals', filterTags);
    } else if (this.state.currentTag) {
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

    if (!events.length) {
      return (
        <InPlaceEditingPlaceholder center={ true }>
          There are no event pages. Create one using the page menu.
        </InPlaceEditingPlaceholder>
      );
    }

    return (
      <div>
        <TagList
          showTags={ !filterTags.length && this.props.widget.get('showTags') === 'yes' }
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

Scrivito.provideComponent('EventOverviewWidget', EventOverviewWidgetComponent);

const EventItem = Scrivito.connect(({ event }) =>
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
        { formatDate(event.get('date')) }
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

function formatDate(date) {
  if (!date) { return null; }

  const month = date.getMonth() + 1; // getMonth return 0 to 11.
  const dayOfMonth = date.getDate(); // getDate returns 1 to 31.

  return `${twoDigitNumber(month)}/${twoDigitNumber(dayOfMonth)}`;
}
