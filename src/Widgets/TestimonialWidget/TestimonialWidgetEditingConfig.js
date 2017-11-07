import truncate from 'lodash/truncate';

Scrivito.provideEditingConfig('TestimonialWidget', {
  title: 'Testimonial',
  description: 'A testimonial',
  attributesConfig: {
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
      description: 'Add an image of the Author.',
    },
  },
  generalProperties: [
    'testimonial',
    'author',
    'authorImage',
  ],
  titleForContent: widget => `${widget.get('author')}: ${truncate(widget.get('testimonial'))}`,
});
