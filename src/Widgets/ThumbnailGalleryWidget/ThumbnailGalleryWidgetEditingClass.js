import thumbnailGalleryWidgetIcon from 'assets/images/thumbnail_gallery_widget.svg';

Scrivito.provideEditingConfig('ThumbnailGalleryWidget', {
  title: 'Thumbnail Gallery',
  description: 'A widget with an thumbnail image gallery.',
  thumbnail: `/${thumbnailGalleryWidgetIcon}`,
  attributesConfig: {
    images: {
      title: 'Images',
      description: 'The list of images',
    },
    showTags: {
      title: 'Show tags?',
      description: 'Should the list of tags be shown? Default: no',
    },
  },
  generalProperties: [
    'images',
    'showTags',
  ],
});
