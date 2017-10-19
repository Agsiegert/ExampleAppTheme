const Author = Scrivito.createObjClass({
  name: 'Author',
  attributes: {
    name: 'string',
    description: 'string',
    picture: 'reference',
  },
});

Scrivito.provideEditingConfig(Author, {
  title: 'Author',
  description: 'An Author',
  attributesConfig: {
    name: {
      title: 'Name',
      description: 'The name of the author.',
    },
    description: {
      title: 'Description',
      description: 'The description of the author.',
    },
    picture: {
      title: 'Picture',
      description: 'The picture of the author.',
    },
  },
  generalProperties: [
    'name',
    'description',
    'picture',
  ],
  titleForContent: obj => obj.get('name'),
});

export default Author;
