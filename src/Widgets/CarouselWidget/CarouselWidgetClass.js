import { registerTextExtract } from 'utils/text_extract_registry';

const CarouselWidget = Scrivito.provideWidgetClass('CarouselWidget', {
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

export default CarouselWidget;
