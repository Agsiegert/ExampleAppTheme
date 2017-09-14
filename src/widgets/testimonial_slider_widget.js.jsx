import Slider from 'react-slick';
import devicePixelRatio from 'utils/device_pixel_ratio';
import fallbackImageUrl from 'utils/fallback_image_url';
import textExtractFromWidgetlist from 'utils/text_extract_from_widgetlist';

const BaseTestimonialSliderWidget = Scrivito.createWidgetClass({
  name: 'TestimonialSliderWidget',
  attributes: {
    testimonials: ['widgetlist', { only: 'TestimonialWidget' }],
  },
});

class TestimonialSliderWidget extends BaseTestimonialSliderWidget {
  textExtract() {
    return textExtractFromWidgetlist(this.get('testimonials'));
  }
}

Scrivito.registerClass('TestimonialSliderWidget', TestimonialSliderWidget);

Scrivito.provideUiConfig(TestimonialSliderWidget, {
  title: 'Testimonial Slider',
  description: 'A testimonial slider',
  attributes: {
    testimonials: {
      title: 'Testimonials',
      description: 'The list of testimonials',
    },
  },
});

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
          <div key={ testimonial.id }>
            <h1 className="quote-headline text-center">&quot;</h1>
            <Scrivito.React.Content
              content={ testimonial }
              attribute="testimonial"
              tag="p"
              className="h4 text-center"
            />
            <Scrivito.React.Content
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
