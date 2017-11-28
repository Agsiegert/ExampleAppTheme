import carouselWidgetIcon from 'assets/images/carousel_widget.svg';

Scrivito.provideEditingConfig('CarouselWidget', {
  title: 'Carousel',
  description: 'A widget with sliding images.',
  thumbnail: `/${carouselWidgetIcon}`,
  attributes: {
    images: {
      title: 'Images',
    },
    showDescription: {
      title: 'Show description?',
      description: 'This allows to show an image and some text below this carousel. Default: No',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
  },
  properties: [
    'images',
    'showDescription',
  ],
});
