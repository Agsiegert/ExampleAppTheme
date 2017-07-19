const BaseGalleryImageWidget = Scrivito.createWidgetClass({
  onlyInside: 'GalleryWidget',
  name: 'GalleryImageWidget',
  attributes: {
    image: 'reference',
    title: 'string',
    subtitle: 'string',
  },
});

class GalleryImageWidget extends BaseGalleryImageWidget {
  lightboxOptions() {
    const image = this.get('image');
    let srcUrl = '';
    let thumbnailUrl = '';

    if (image) {
      const binary = image.get('blob');

      srcUrl = binary.transform({ width: fullScreenWidthPixels() }).url;

      const thumbnailSize = 50 * devicePixelRatio();
      thumbnailUrl = binary.transform(
        { width: thumbnailSize, height: thumbnailSize, fit: 'crop' }).url;
    }

    return {
      src: srcUrl,
      thumbnail: thumbnailUrl,
      caption: [this.get('title'), this.get('subtitle')].join(' - '),
    };
  }
}

Scrivito.registerClass('GalleryImageWidget', GalleryImageWidget);

Scrivito.provideUiConfig(GalleryImageWidget, {
  title: 'GalleryImage',
  description: 'A Gallery Image - Can only live inside a Gallery',
  attributes: {
    image: {
      title: 'Image',
      description: 'The image to show',
    },
    title: {
      title: 'Title',
      description: 'The title of the image',
    },
    subtitle: {
      title: 'Subtitle',
      description: 'The subtitle of the image',
    },
  },
  titleForContent: widget => `${widget.get('title')} - ${widget.get('subtitle')}`,
});

const GalleryImageWidgetComponent = Scrivito.createComponent(({ widget, openLightbox }) => {
  const title = widget.get('title');
  const subtitle = widget.get('subtitle');
  const image = widget.get('image');

  let imageUrl = '';
  if (image) {
    // Transform image to max. 50% of the screen width
    const binary = image.get('blob').transform({ width: fullScreenWidthPixels() / 2 });
    imageUrl = binary.url;
  }

  return (<div className="col-md-3 col-sm-4 col-xs-6 gallery-box">
    <div
      className="gallery-box-image"
      style={ { background: `url(${imageUrl}) no-repeat center / cover` } }>
    </div>
    <a href="#" className="gallery-box-content-wrapper" onClick={ openLightbox }>
      <span className="gallery-box-content">
        <i className="fa fa-camera" aria-hidden="true"></i>
        <span className="title">{ title }</span>
        <span className="subtitle">{ subtitle }</span>
      </span>
    </a>
  </div>);
});

function devicePixelRatio() {
  return window.devicePixelRatio || 1;
}

function fullScreenWidthPixels() {
  const screenWidth = window.screen.width;
  return screenWidth * devicePixelRatio();
}

export { GalleryImageWidgetComponent };
export default GalleryImageWidget;
