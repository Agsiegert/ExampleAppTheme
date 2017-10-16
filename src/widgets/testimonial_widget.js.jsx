import truncate from 'lodash.truncate';
import { registerTextExtract } from 'utils/text_extract_registry';

const TestimonialWidget = Scrivito.createWidgetClass({
  onlyInside: 'TestimonialSliderWidget',
  name: 'TestimonialWidget',
  attributes: {
    testimonial: 'string',
    author: 'string',
    authorImage: 'reference',
  },
});

registerTextExtract('TestimonialWidget', [
  { attribute: 'testimonial', type: 'string' },
]);

Scrivito.provideEditingConfig(TestimonialWidget, {
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
      description: 'How does the author look like?',
    },
  },
  titleForContent: widget => `${widget.get('author')}: ${truncate(widget.get('testimonial'))}`,
});

export default TestimonialWidget;
