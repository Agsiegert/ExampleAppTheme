import Event from 'objs/event';
import fullWidthTransformedUrl from 'utils/full_width_transformed_url';
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

const EventItem = Scrivito.React.connect(({ event }) => {
  const month = event.get('date').getMonth() + 1; // getMonth return 0 to 11.
  const dayOfMonth = event.get('date').getDate(); // getDate returns 1 to 31.

  return (
    <div className="col-sm-6">
      <Scrivito.React.Link
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
          <h3 className="h3">{ event.get('headline') }</h3>
          <span>
            <i
                className={ `fa ${event.get('location') ? 'fa-map-marker' : ''} fa-2x` }
                aria-hidden="true"
                title="location"
              />
            <span>{ event.get('location') }</span>
          </span>
        </span>
      </Scrivito.React.Link>
    </div>
  );
});

function TagList({ tags, currentTag, setTag }) {
  const onClick = (e, tag) => {
    e.preventDefault();
    e.stopPropagation();
    setTag(tag);
  };

  return (
    <section className="bg-nav-content">
      <div className="container">
        <div className="nav-centered select-icon">
          <ul className="nav nav-pills hidden-xs">
            <li role="presentation" className={ !currentTag ? 'active' : '' }>
              <a onClick={ e => onClick(e, '') } href='#'>All</a>
            </li>
            {
              tags.map(tag =>
                <li
                    role="presentation"
                    key={ tag }
                    className={ currentTag === tag ? 'active' : '' }
                  >
                  <a onClick={ e => onClick(e, tag) } href='#'>{ tag }</a>
                </li>
              )
            }
          </ul>
          <select
            onChange={ e => setTag(e.target.value) }
            value={ currentTag }
            className="visible-xs"
          >
            <option value="">All</option>
            {
              tags.map(tag => <option key={ tag } value={ tag }>{ tag }</option>)
            }
          </select>
        </div>
      </div>
    </section>
  );
}

class EventOverviewWidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTag: '' };

    this.setTag = this.setTag.bind(this);
  }

  render() {
    let events = Scrivito.Obj.where('_objClass', 'equals', 'Event')
      .order('date', 'asc');
    if (this.state.currentTag) {
      events = events.and('tags', 'equals', this.state.currentTag);
    }

    const tags = [...Event.all().facet('tags')].map(facet => facet.name);

    return (
      <div>
        <TagList
            currentTag={ this.state.currentTag }
            setTag={ this.setTag }
            tags={ tags }
          />
        <section className="bg-white">
          <div className="row">
            {
              [...events].slice(0, this.props.widget.get('maxItems')).map((event, index) => {
                return <EventItem key={ `${event.id}${index}` } event={ event } />;
              })
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
