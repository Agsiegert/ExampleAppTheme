import { registerTextExtract } from 'utils/text_extract_registry';

const TestimonialSliderWidget = Scrivito.provideWidgetClass('TestimonialSliderWidget', {
  attributes: {
    testimonials: ['widgetlist', { only: 'TestimonialWidget' }],
  },
});

registerTextExtract('TestimonialSliderWidget', [
  { attribute: 'testimonials', type: 'widgetlist' },
]);

export default TestimonialSliderWidget;
