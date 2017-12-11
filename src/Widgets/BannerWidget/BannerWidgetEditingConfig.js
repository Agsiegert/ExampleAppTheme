Scrivito.provideEditingConfig('BannerWidget', {
  title: 'Banner',
  description: 'A Directive widget with formatting.',
  attributes: {
    location: {
      title: 'Location of widget',
      description: 'styled for either top or bottom of the page.  Default: top',
      values: [
        { value: 'header', title: 'Top' },
        { value: 'footer', title: 'Bottom' },
      ],
    },
  },
  properties: [
    'location',
  ],
});
