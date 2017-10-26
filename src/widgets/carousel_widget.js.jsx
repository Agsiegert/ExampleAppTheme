import Carousel from 'react-bootstrap/lib/Carousel';
import carouselWidgetIcon from 'assets/images/carousel_widget.svg';
import { registerTextExtract } from 'utils/text_extract_registry';

const CarouselWidget = Scrivito.createWidgetClass({
  name: 'CarouselWidget',
  attributes: {
    images: 'referencelist',
    showDescription: ['enum', { values: ['yes', 'no'] }],
    descriptionLogo: 'reference',
    description: 'widgetlist',
  },
});

registerTextExtract('CarouselWidget', [
  { attribute: 'description', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(CarouselWidget, {
  title: 'Carousel',
  description: 'A widget with sliding images.',
  thumbnail: `/${carouselWidgetIcon}`,
  attributesConfig: {
    images: {
      title: 'Images',
      description: 'The list of images.',
    },
    showDescription: {
      title: 'Show description',
      description: 'Should there be a description?' +
        ' This allows to show an image and some text below this carousel.',
    },
  },
  generalProperties: [
    'images',
    'showDescription',
  ],
});

function descriptionBox(widget) {
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

Scrivito.provideComponent(CarouselWidget, ({ widget }) =>
  <div>
    <Carousel
      indicators={ false }
      className="carousel-images"
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
