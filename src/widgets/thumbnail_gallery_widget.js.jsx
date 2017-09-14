import Lightbox from 'react-images';
import devicePixelRatio from 'utils/device_pixel_ratio';
import fullScreenWidthPixels from 'utils/full_screen_width_pixels';

const ThumbnailGalleryWidget = Scrivito.createWidgetClass({
  name: 'ThumbnailGalleryWidget',
  attributes: {
    images: ['widgetlist', { only: 'ThumbnailGalleryImageWidget' }],
    showTags: ['enum', { validValues: ['yes', 'no'] }],
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
    showTags: {
      title: 'Show tags?',
      description: 'Should the list of tags be shown? Default: no',
    },
  },
});

const TagButton = Scrivito.React.connect(({ tag, isActive, onClick }) => {
  const classNames = ['btn', 'btn-default', 'filter-button'];
  if (isActive) { classNames.push('active'); }

  return <button className={ classNames.join(' ') } onClick={ onClick }>{ tag }</button>;
});

const TagList = Scrivito.React.connect(({ showTags, tags, currentTag, setTag }) => {
  if (!showTags) { return null; }

  return (
    <div className="container">
      <div className="text-center">
        <TagButton
          tag="All"
          isActive={ currentTag === null }
          onClick={ () => setTag(null) }
        />
        {
          tags.map(tag =>
            <TagButton
              key={ tag }
              tag={ tag }
              isActive={ currentTag === tag }
              onClick={ () => setTag(tag) }
            />
          )
        }
      </div>
      <br />
    </div>
  );
});

const Thumbnail = Scrivito.React.connect(({ widget, openLightbox, currentTag }) => {
  const title = widget.get('title');
  const subtitle = widget.get('subtitle');
  const image = widget.get('image');
  const tags = widget.get('tags');

  let imageUrl = '';
  if (image) {
    // Transform image to max. 50% of the screen width
    const binary = image.get('blob').transform({ width: fullScreenWidthPixels() / 2 });
    imageUrl = binary.url();
  }

  const classNames = ['col-md-3', 'col-sm-4', 'col-xs-6', 'gallery-box'];
  if (currentTag && tags.includes(currentTag)) { classNames.push('squeezed'); }

  return (
    <div className={ classNames.join(' ') }>
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
});

class ThumbnailGalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      currentTag: null,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.setTag = this.setTag.bind(this);
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

  setTag(tag) {
    this.setState({
      currentTag: tag,
    });
  }

  render() {
    const widget = this.props.widget;
    const images = widget.get('images');
    const lightboxImages = images.map(image => lightboxOptions(image));

    return (
      <div>
        <TagList
          showTags={ widget.get('showTags') === 'yes' }
          tags={ allTags(images) }
          currentTag={ this.state.currentTag }
          setTag={ this.setTag }
        />
        <div className="row">
          {
            images.map((image, imageIndex) =>
              <Thumbnail
                key={ image.id }
                widget={ image }
                openLightbox={ event => this.openLightbox(imageIndex, event) }
                currentTag={ this.state.currentTag }
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
      </div>
    );
  }
}

Scrivito.provideComponent(ThumbnailGalleryWidget, ThumbnailGalleryComponent);

function allTags(images) {
  const tagsArray = images.map(image => image.get('tags'));

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), []);

  // unique tags
  const uniqueTags = [...new Set(tags)];

  // sort tags
  return uniqueTags.sort();
}

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

export default ThumbnailGalleryWidget;
