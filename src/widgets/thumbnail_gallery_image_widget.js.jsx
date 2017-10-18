const ThumbnailGalleryImageWidget = Scrivito.createWidgetClass({
  onlyInside: 'ThumbnailGalleryWidget',
  name: 'ThumbnailGalleryImageWidget',
  attributes: {
    image: 'reference',
    title: 'string',
    subtitle: 'string',
    tags: 'stringlist',
  },
});

Scrivito.provideEditingConfig(ThumbnailGalleryImageWidget, {
  title: 'Thumbnail Gallery Image',
  description: 'A thumbnail gallery image - Use only inside a Thumbnail Gallery',
  attributesConfig: {
    image: {
      title: 'Image',
      description: 'The image to show.',
    },
    title: {
      title: 'Title',
      description: 'The title of the image.',
    },
    subtitle: {
      title: 'Subtitle',
      description: 'The subtitle of the image.',
    },
    tags: {
      title: 'Tags',
      description: 'The tags of the image.',
    },
  },
  titleForContent: widget => `${widget.get('title')} - ${widget.get('subtitle')}`,
});

export default ThumbnailGalleryImageWidget;
