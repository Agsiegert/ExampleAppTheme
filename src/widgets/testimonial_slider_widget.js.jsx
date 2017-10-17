import Slider from 'react-slick';
import devicePixelRatio from 'utils/device_pixel_ratio';
import { registerTextExtract } from 'utils/text_extract_registry';

const TestimonialSliderWidget = Scrivito.createWidgetClass({
  name: 'TestimonialSliderWidget',
  attributes: {
    testimonials: ['widgetlist', { only: 'TestimonialWidget' }],
  },
});

registerTextExtract('TestimonialSliderWidget', [
  { attribute: 'testimonials', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(TestimonialSliderWidget, {
  title: 'Testimonial Slider',
  description: 'A testimonial slider',
  attributesConfig: {
    testimonials: {
      title: 'Testimonials',
      description: 'The list of testimonials',
    },
  },
});

// Source: https://unsplash.com/photos/K2u71wv2eI4/
const fallbackImageUrl = 'https://images.unsplash.com/photo-1481437642641-2f0ae875f836' +
  '?dpr=1&auto=compress,format&fit=crop&w=200&h=200&q=80&cs=tinysrgb&crop=&bg=';

function sliderSettings(testimonials) {
  const testimonialAuthorImageUrls = testimonials.map(testimonial => {
    const authorImage = testimonial.get('authorImage');
    if (!authorImage) { return fallbackImageUrl; }

    const binary = authorImage.get('blob');
    const croppedBinary = binary.transform({
      width: 200 * devicePixelRatio(),
      height: 200 * devicePixelRatio(),
      fit: 'crop',
    });
    return croppedBinary.url();
  });

  return {
    dots: true,
    infinite: true,
    speed: 500,
    dotsClass: 'quote-portrait-wrapper',
    customPaging: i => {
      const imageUrl = testimonialAuthorImageUrls[i];
      return (<a><img src={ imageUrl } alt="" /></a>);
    },
  };
}

Scrivito.provideComponent(TestimonialSliderWidget, ({ widget }) => {
  const testimonials = widget.get('testimonials');
  if (!testimonials.length) { return null; }

  const settings = sliderSettings(testimonials);
  return (
    <Slider { ...settings }>
      {
        testimonials.map(testimonial =>
          <div key={ testimonial.id() }>
            <h1 className="quote-headline text-center">&quot;</h1>
            <Scrivito.ContentTag
              content={ testimonial }
              attribute="testimonial"
              tag="p"
              className="h4 text-center"
            />
            <Scrivito.ContentTag
              content={ testimonial }
              attribute="author"
              tag="p"
              className="small text-center"
            />
          </div>
        )
      }
    </Slider>
  );
});

export default TestimonialSliderWidget;
