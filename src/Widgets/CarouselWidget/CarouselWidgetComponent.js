import Carousel from 'react-bootstrap/lib/Carousel';

Scrivito.provideComponent('CarouselWidget', ({ widget }) =>
  <div>
    <Carousel
      indicators={ false }
      className="carousel-images"
      prevIcon={ <span className="fa fa-arrow-left" aria-hidden="true" /> }
      nextIcon={ <span className="fa fa-arrow-right" aria-hidden="true" /> }
    >
      {
        widget.get('images').map((image, index) => {
          return (
            <Carousel.Item key={ `${image.id()}${index}` }>
              <Scrivito.ImageTag content={ image } />
            </Carousel.Item>
          );
        })
      }
    </Carousel>
    <DescriptionBox widget={ widget } />
  </div>
);

function DescriptionBox({ widget }) {
  if (widget.get('showDescription') !== 'yes') {
    return null;
  }

  return (
    <div className="container">
      <div className="client-wrapper">
        <div className="client-logo">
          <Scrivito.ImageTag content={ widget } attribute="descriptionLogo" />
        </div>
        <div className="client-text">
          <Scrivito.ContentTag content={ widget } attribute="description" />
        </div>
      </div>
    </div>
  );
}
