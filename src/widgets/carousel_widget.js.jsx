import { Carousel } from 'react-bootstrap';

const CarouselWidget = Scrivito.createWidgetClass({
  name: 'CarouselWidget',
  attributes: {
    images: 'referencelist',
    showDescription: ['enum', { validValues: ['yes', 'no'] }],
    descriptionLogo: 'reference',
    description: 'widgetlist',
  },
});

Scrivito.registerClass('CarouselWidget', CarouselWidget);

Scrivito.provideUiConfig(CarouselWidget, {
  title: 'Carousel',
  description: 'A widget with sliding images.',
  attributes: {
    images: {
      title: 'Images',
      description: 'The list of images.',
    },
    showDescription: {
      title: 'Show description',
      description: 'Should there be a description?',
    },
  },
});

function descriptionBox(widget) {
  return (
    <div className="container">
      <div className="client-wrapper row">
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

Scrivito.provideComponent(CarouselWidget, ({ widget }) =>
  <div>
    <Carousel
      indicators={ false }
      className="carousel-images row"
      prevIcon={ <span className="fa fa-arrow-left" aria-hidden="true" /> }
      nextIcon={ <span className="fa fa-arrow-right" aria-hidden="true" /> }
    >
      { widget.get('images').map((image, index) => {
        return (
          <Carousel.Item key={ `${image.id()}${index}` }>
            <Scrivito.ImageTag content={ image } />
          </Carousel.Item>
        );
      })}
    </Carousel>
    { widget.get('showDescription') === 'yes' && descriptionBox(widget) }
  </div>
);

export default CarouselWidget;
