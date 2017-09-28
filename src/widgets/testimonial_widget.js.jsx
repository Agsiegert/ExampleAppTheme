const BaseTestimonialWidget = Scrivito.createWidgetClass({
  onlyInside: 'TestimonialSliderWidget',
  name: 'TestimonialWidget',
  attributes: {
    testimonial: 'string',
    author: 'string',
    authorImage: 'reference',
  },
});

class TestimonialWidget extends BaseTestimonialWidget {
  textExtract() {
    return this.get('testimonial');
  }
}

Scrivito.registerClass('TestimonialWidget', TestimonialWidget);

Scrivito.provideEditingConfig(TestimonialWidget, {
  title: 'Testimonial',
  description: 'A testimonial',
  attributes: {
    testimonial: {
      title: 'Testimonial',
      description: 'The testimonial.',
    },
    author: {
      title: 'Author',
      description: 'Who said it?',
    },
    authorImage: {
      title: 'Author Image',
      description: 'How does the author look like?',
    },
  },
});

export default TestimonialWidget;
