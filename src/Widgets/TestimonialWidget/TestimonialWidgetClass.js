import { registerTextExtract } from 'utils/text_extract_registry';

const TestimonialWidget = Scrivito.provideWidgetClass('TestimonialWidget', {
  onlyInside: 'TestimonialSliderWidget',
  attributes: {
    testimonial: 'string',
    author: 'string',
    authorImage: 'reference',
  },
});

registerTextExtract('TestimonialWidget', [
  { attribute: 'testimonial', type: 'string' },
]);

export default TestimonialWidget;
