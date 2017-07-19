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

Scrivito.provideComponent(GalleryWidget, {
  getInitialState() {
    return {
      currentImage: 0,
      lightboxIsOpen: false,
    };
  },

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  },

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  },

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  },

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  },

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  },

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
  },
});

export default GalleryWidget;
