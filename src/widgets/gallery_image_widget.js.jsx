const GalleryImageWidget = Scrivito.createWidgetClass({
  onlyInside: 'GalleryWidget',
  name: 'GalleryImageWidget',
  attributes: {
    image: 'reference',
    title: 'string',
    subtitle: 'string',
  },
});

Scrivito.provideUiConfig(GalleryImageWidget, {
  title: 'GalleryImage',
  description: 'A Gallery Image - Can only live inside a Gallery',
  attributes: {
    image: {
      title: 'Image',
      description: 'The image to show',
    },
    title: {
      title: 'Title',
      description: 'The title of the image',
    },
    subtitle: {
      title: 'Subtitle',
      description: 'The subtitle of the image',
    },
  },
  titleForContent: widget => `${widget.get('title')} - ${widget.get('subtitle')}`,
});

export default GalleryImageWidget;
