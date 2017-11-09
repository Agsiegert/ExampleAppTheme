import devicePixelRatio from 'utils/devicePixelRatio';
import Slider from 'react-slick';

function sliderSettings(images) {
  const imageUrls = images.map(image => {
    const binary = image.get('blob');
    const croppedBinary = binary.transform({
      width: 300 * devicePixelRatio(),
      height: 200 * devicePixelRatio(),
      fit: 'crop',
    });
    return croppedBinary.url();
  });

  return {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    centerMode: true,
    centerPadding: '0px',
    cssEase: 'linear',
    dots: true,
    fade: true,
    infinite: true,
    slide: 'li',
    slidesToShow: 1,
    speed: 500,
    variableWidth: false,
    responsive: [{
      breakpoint: 800,
      settings: {
        centerMode: false,
      },
    }],
    customPaging: i => {
      const imageUrl = imageUrls[i];
      return (
        <button className="tab">
          <img src={ imageUrl } />
        </button>
      );
    },
  };
}

function GalleryWidgetComponent({ widget }) {
  const images = widget.get('images');

  if (!images.length) {
    if (Scrivito.isInPlaceEditingActive()) {
      return (
        <p>
          No Images (yet)!
          Please go to the widget properties to select images to show.
        </p>
      );
    }

    return null;
  }

  const settings = sliderSettings(images);
  return (
    <div className="slick-gallary-fluid">
      <Slider { ...settings } className="slickslide">
        {
          images.map((image, index) =>
            <Scrivito.ImageTag content={ image } key={ `${image.id()}${index}` } />)
        }
      </Slider>
    </div>
  );
}

Scrivito.provideComponent('GalleryWidget', GalleryWidgetComponent);
