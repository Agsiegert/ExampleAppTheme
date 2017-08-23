import Slider from 'react-slick';

function sliderSettings(items) {
  const imageUrls = items.map(item => {
    const image = item.get('image');
    const binary = image.get('blob');
    const croppedBinary = binary.transform({ width: 300, height: 200, fit: 'crop' });
    return croppedBinary.url();
  });

  return {
    dots: true,
    infinite: true,
    autoplay: true,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '0px',
    autoplaySpeed: 7000,
    slidesToShow: 1,
    variableWidth: false,
    arrows: false,
    fade: true,
    responsive: [{
      breakpoint: 800,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        variableWidth: false,
        slidesToShow: 1,
        dots: true,
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

function SliderGallery({ widget }) {
  const images = widget.get('images');

  if (!images.length) { return null; }

  const settings = sliderSettings(images);
  return (
    <div className="slick-gallary-fluid">
      <Slider { ...settings } className="slickslide">
        {
          images.map(image => <Scrivito.React.Image src={ image.get('image') } key={ image.id } />)
        }
      </Slider>
    </div>
  );
}

export default Scrivito.React.connect(SliderGallery);
