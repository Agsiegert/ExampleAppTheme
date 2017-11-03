import testimonialSliderWidgetIcon from 'assets/images/testimonial_slider_widget.svg';

Scrivito.provideEditingConfig('TestimonialSliderWidget', {
  title: 'Testimonial Slider',
  description: 'A testimonial slider.',
  thumbnail: `/${testimonialSliderWidgetIcon}`,
  attributesConfig: {
    testimonials: {
      title: 'Testimonials',
      description: 'Add testimonials.',
    },
  },
  generalProperties: [
    'testimonials',
  ],
});
