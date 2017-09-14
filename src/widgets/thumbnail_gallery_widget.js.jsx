import Lightbox from 'react-images';

const ThumbnailGalleryWidget = Scrivito.createWidgetClass({
  name: 'ThumbnailGalleryWidget',
  attributes: {
    images: ['widgetlist', { only: 'ThumbnailGalleryImageWidget' }],
  },
});

Scrivito.provideUiConfig(ThumbnailGalleryWidget, {
  title: 'Thumbnail Gallery',
  description: 'A widget with an thumbnail image gallery.',
  attributes: {
    images: {
      title: 'Images',
      description: 'The list of images',
    },
  },
});

function BaseThumbnail({ widget, openLightbox }) {
  const title = widget.get('title');
  const subtitle = widget.get('subtitle');
  const image = widget.get('image');

  let imageUrl = '';
  if (image) {
    // Transform image to max. 50% of the screen width
    const binary = image.get('blob').transform({ width: fullScreenWidthPixels() / 2 });
    imageUrl = binary.url();
  }

  return (
    <div className="col-md-3 col-sm-4 col-xs-6 gallery-box">
      <div
        className="gallery-box-image"
        style={ { background: 'no-repeat center / cover', backgroundImage: `url(${imageUrl})` } }>
      </div>
      <a href="#" className="gallery-box-content-wrapper" onClick={ openLightbox }>
        <span className="gallery-box-content">
          <i className="fa fa-camera" aria-hidden="true"></i>
          <span className="title">{ title }</span>
          <span className="subtitle">{ subtitle }</span>
        </span>
      </a>
    </div>
  );
}

const Thumbnail = Scrivito.React.connect(BaseThumbnail);

class ThumbnailGalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  render() {
    const widget = this.props.widget;
    const images = widget.get('images');
    const lightboxImages = images.map(image => lightboxOptions(image));

    return (
      <div className="row">
        {
          images.map((image, imageIndex) =>
            <Thumbnail
              key={ image.id }
              widget={ image }
              openLightbox={ event => this.openLightbox(imageIndex, event) }
            />)
        }
        <Lightbox
          images={ lightboxImages }
          currentImage={ this.state.currentImage }
          isOpen={ this.state.lightboxIsOpen }
          onClickImage={ this.handleClickImage }
          onClickNext={ this.gotoNext }
          onClickPrev={ this.gotoPrevious }
          onClickThumbnail={ this.gotoImage }
          onClose={ this.closeLightbox }
          showThumbnails
          backdropClosesModal
        />
      </div>
    );
  }
}

Scrivito.provideComponent(ThumbnailGalleryWidget, ThumbnailGalleryComponent);

function lightboxOptions(galleryImageWidget) {
  const image = galleryImageWidget.get('image');
  let srcUrl = '';
  let thumbnailUrl = '';

  if (image) {
    const binary = image.get('blob');

    srcUrl = binary.transform({ width: fullScreenWidthPixels() }).url();

    const thumbnailSize = 50 * devicePixelRatio();
    thumbnailUrl = binary.transform(
      { width: thumbnailSize, height: thumbnailSize, fit: 'crop' }).url();
  }

  return {
    src: srcUrl,
    thumbnail: thumbnailUrl,
    caption: [galleryImageWidget.get('title'), galleryImageWidget.get('subtitle')].join(' - '),
  };
}

function devicePixelRatio() {
  return window.devicePixelRatio || 1;
}

function fullScreenWidthPixels() {
  const screenWidth = window.screen.width;
  return screenWidth * devicePixelRatio();
}

export default ThumbnailGalleryWidget;
