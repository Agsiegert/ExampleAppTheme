import galleryWidgetIcon from 'assets/images/gallery_widget.svg';

Scrivito.provideEditingConfig('GalleryWidget', {
  title: 'Gallery',
  description: 'A widget with an image gallery.',
  thumbnail: `/${galleryWidgetIcon}`,
  attributes: {
    images: {
      title: 'Images',
    },
  },
  properties: [
    'images',
  ],
});
