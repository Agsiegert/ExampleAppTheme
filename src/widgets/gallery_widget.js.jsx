import SliderGallery from 'widgets/gallery_widget/slider_gallery';
import ThumbnailGallery from 'widgets/gallery_widget/thumbnail_gallery';

const GalleryWidget = Scrivito.createWidgetClass({
  name: 'GalleryWidget',
  attributes: {
    galleryStyle: ['enum', { validValues: ['thumbnail', 'slider'] }],
    images: ['widgetlist', { only: 'GalleryImageWidget' }],
  },
});

Scrivito.provideUiConfig(GalleryWidget, {
  title: 'Gallery',
  description: 'A widget with an image gallery.',
  attributes: {
    images: {
      title: 'Images',
      description: 'The list of images',
    },
    galleryStyle: {
      title: 'Gallery Style',
      description: 'How should this gallery be shown?',
    },
  },
});

Scrivito.provideComponent(GalleryWidget, ({ widget }) => {
  if (widget.get('galleryStyle') === 'slider') {
    return <SliderGallery widget={ widget } />;
  }

  return <ThumbnailGallery widget={ widget } />;
});

export default GalleryWidget;
