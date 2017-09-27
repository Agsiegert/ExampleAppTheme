const GoogleMapsWidget = Scrivito.createWidgetClass({
  name: 'GoogleMapsWidget',
  attributes: {
    address: 'string',
    zoom: ['enum', {
      validValues: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
      ],
    }],
  },
});

Scrivito.provideUiConfig(GoogleMapsWidget, {
  title: 'Google Maps',
  description: 'A widget with google maps.',
  attributes: {
    address: {
      title: 'Address',
      description: 'The address that should be shown on the map.'
        + ' Default: Brandenburg Gate, Berlin, Germany',
    },
    zoom: {
      title: 'Zoom',
      description: 'Zoom level of the map.'
       + ' 1 - world level, 15 - street level, 20 - building level. Default: 15',
    },
  },
});

const minHeight = 350;
const maxWidth = 640;

class GoogleMapsWidgetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elementHeight: 0,
      elementWidth: 0,
      height: minHeight,
      width: maxWidth,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const elementWidth = this.outerDiv.offsetWidth;
    const elementHeight = this.outerDiv.offsetHeight;

    if (this.state.elementWidth !== elementWidth || this.state.elementHeight !== elementHeight) {
      let width = elementWidth;
      let height = elementHeight;

      if (width > maxWidth) {
        width = maxWidth;

        const factor = elementHeight / elementWidth;
        height = Math.round(maxWidth * factor);
      }

      this.setState({
        elementHeight,
        elementWidth,
        height,
        width,
      });
    }
  }

  render() {
    return (
      <div
        ref={ e => { this.outerDiv = e; } }
        className="bg-map"
        style={
          {
            background: 'no-repeat center / cover',
            backgroundImage: `url(${this.googleMapsImageUrl()})`,
          }
        }
      >
      </div>
    );
  }

  googleMapsImageUrl() {
    const address = this.props.widget.get('address') || 'Brandenburg Gate, Berlin, Germany';
    const zoom = this.props.widget.get('zoom') || '15';

    // See all options at https://developers.google.com/maps/documentation/static-maps/intro
    const params = {
      size: `${this.state.width}x${this.state.height}`,
      scale: 2, // with scale 2 google maps allows more pixels.
      markers: `color:red|${address}`,
      zoom,
      ie: 'UTF8',
    };
    const flattenParams = Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
    const uri = `https://maps.google.com/maps/api/staticmap?${flattenParams}`;

    return encodeURI(uri);
  }
}

Scrivito.provideComponent(GoogleMapsWidget, GoogleMapsWidgetComponent);

export default GoogleMapsWidget;
