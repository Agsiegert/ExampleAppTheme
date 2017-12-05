Scrivito.provideEditingConfig('LinkWidget', {
  title: 'Link List item',
  description: 'A widget for the link list widget.',
  attributes: {
    link: {
      title: 'Link',
      description: "If no title is given, the obj's title or the external URl will be shown.",
    },
  },
  properties: [
    'link',
  ],
});
