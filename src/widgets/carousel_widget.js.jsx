import { Carousel } from 'react-bootstrap';

const CarouselWidget = Scrivito.createWidgetClass({
  name: 'CarouselWidget',
  attributes: {
    images: 'referencelist',
    showDescription: ['enum', { validValues: ['yes', 'no'] }],
    descriptionLogo: 'reference',
    descriptionText: 'html',
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
    descriptionLogo: {
      title: 'Description logo',
      description: 'The logo next to the description.',
    },
    descriptionText: {
      title: 'Description text',
      description: 'The text of the description.',
    },
  },
});

function descriptionBox(widget) {
  return (
    <div className="container">
      <div className="client-wrapper row">
        <div className="client-logo">
          <Scrivito.React.Image src={ widget } attribute="descriptionLogo" />
        </div>
        <div className="client-text">
          <strong>What we did?</strong>
            <Scrivito.React.Content tag="p" content={ widget } attribute="descriptionText" />
          <Scrivito.React.Link className="btn btn-clear" to={ Scrivito.currentPage() }>
            open project
            <i className="fa fa-angle-right fa-4" aria-hidden="true" />
          </Scrivito.React.Link>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
}

Scrivito.provideComponent(CarouselWidget, ({ widget }) =>
  <div>
    <Carousel>
      { widget.get('images').map((image, index) => {
        return (
          <Carousel.Item key={ `${image.id}${index}` }>
            <Scrivito.React.Image src={ image } />
          </Carousel.Item>
        );
      })}
    </Carousel>
    { widget.get('showDescription') === 'yes' && descriptionBox(widget) }
  </div>
);

export default CarouselWidget;
