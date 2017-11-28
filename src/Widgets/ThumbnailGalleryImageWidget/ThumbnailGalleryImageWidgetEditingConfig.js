Scrivito.provideEditingConfig('ThumbnailGalleryImageWidget', {
  title: 'Thumbnail Gallery Image',
  description: 'A thumbnail gallery image - Use only inside a Thumbnail Gallery',
  attributes: {
    image: {
      title: 'Image',
    },
    title: {
      title: 'Title',
    },
    subtitle: {
      title: 'Subtitle',
    },
    tags: {
      title: 'Tags',
    },
  },
  properties: [
    'image',
    'title',
    'subtitle',
    'tags',
  ],
  titleForContent: widget => `${widget.get('title')} - ${widget.get('subtitle')}`,
});
