import galleryWidgetIcon from 'assets/images/gallery_widget.svg';

Scrivito.provideEditingConfig('GalleryWidget', {
  title: 'Gallery',
  description: 'A widget with an image gallery.',
  thumbnail: `/${galleryWidgetIcon}`,
  attributesConfig: {
    images: {
      title: 'Images',
    },
  },
  generalProperties: [
    'images',
  ],
});
