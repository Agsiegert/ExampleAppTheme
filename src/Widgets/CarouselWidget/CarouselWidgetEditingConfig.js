import carouselWidgetIcon from 'assets/images/carousel_widget.svg';

Scrivito.provideEditingConfig('CarouselWidget', {
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
