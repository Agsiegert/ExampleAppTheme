import truncate from 'lodash/truncate';

Scrivito.provideEditingConfig('TestimonialWidget', {
  title: 'Testimonial',
  description: 'A testimonial',
  attributes: {
    testimonial: {
      title: 'Testimonial',
    },
    author: {
      title: 'Author',
      description: 'Who said it?',
    },
    authorImage: {
      title: 'Author image',
    },
  },
  properties: [
    'testimonial',
    'author',
    'authorImage',
  ],
  titleForContent: widget => `${widget.get('author')}: ${truncate(widget.get('testimonial'))}`,
});
