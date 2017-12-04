import Slider from 'react-slick';
import devicePixelRatio from 'utils/devicePixelRatio';
import placeholderCss from 'utils/placeholderCss';
import TestimonialWidget from 'Widgets/TestimonialWidget/TestimonialWidgetClass';

Scrivito.provideComponent('TestimonialSliderWidget', ({ widget }) => {
  const testimonials = widget.get('testimonials');
  const settings = sliderSettings(testimonials);

  return ([
    <Slider key="slider" { ...settings }>
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
    </Slider>,
    <AddTestimonial key="add testimonial" widget={ widget } />,
  ]);
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

// Source: https://unsplash.com/photos/K2u71wv2eI4/
const fallbackImageUrl = 'https://images.unsplash.com/photo-1481437642641-2f0ae875f836' +
  '?dpr=1&auto=compress,format&fit=crop&w=200&h=200&q=80&cs=tinysrgb&crop=&bg=';

const AddTestimonial = ({ widget }) => {
  if (!Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  return (
    <div key="add more" className="text-center">
      <a
        href="#"
        style={ placeholderCss }
        onClick={
          e => {
            e.preventDefault();
            e.stopPropagation();

            const newTestimonials = [...widget.get('testimonials'), new TestimonialWidget({})];
            widget.update({ testimonials: newTestimonials });
          }
        }
      >
        Click to add a testimonial
      </a>
    </div>
  );
};
