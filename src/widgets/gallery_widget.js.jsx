import Lightbox from 'react-images';
import { GalleryImageWidgetComponent } from 'widgets/gallery_image_widget';

const GalleryWidget = Scrivito.createWidgetClass({
  name: 'GalleryWidget',
  attributes: {
    images: ['widgetlist', { only: 'GalleryImageWidget' }],
  },
});

Scrivito.provideUiConfig(GalleryWidget, {
  title: 'Gallery',
  description: 'A widget with an image gallery.',
  attributes: {
    images: {
      title: 'Images',
      description: 'The list of images',
    },
  },
});

class GalleryWidgetComponent extends React.Component {
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
    const lightboxImages = images.map(image => image.lightboxOptions());

    return (
      <div className="row">
        {
          images.map((image, imageIndex) =>
            <GalleryImageWidgetComponent
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

Scrivito.provideComponent(GalleryWidget, GalleryWidgetComponent);

export default GalleryWidget;
