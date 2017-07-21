const Author = Scrivito.createObjClass({
  name: 'Author',
  attributes: {
    name: 'string',
    description: 'string',
    picture: 'reference',
  },
});

Scrivito.provideUiConfig(Author, {
  title: 'Author',
  description: 'A Author.',
  attributes: {
    name: {
      title: 'Name',
      description: 'The name of the author',
    },
    description: {
      title: 'Description',
      description: 'The description of the author',
    },
    picture: {
      title: 'Picture',
      description: 'The picture of the author',
    },
  },
  titleForContent: obj => obj.get('name'),
});

export default Author;
