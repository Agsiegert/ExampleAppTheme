const Job = Scrivito.createObjClass({
  name: 'Job',
  attributes: {
    image: 'reference',
    location: 'string',
    title: 'string',
  },
});

Scrivito.registerClass('Job', Job);

Scrivito.provideUiConfig(Job, {
  title: 'Job',
  description: 'A Job.',
  attributes: {
    image: {
      title: 'Image',
      description: 'The preview image of the job.',
    },
    location: {
      title: 'Location',
      description: 'Where is this job located.',
    },
    title: {
      title: 'Title',
      description: 'The title of the job.',
    },
  },
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(Job, ({ page }) => {
  return (
    <div>
      <section className='bg-white'>
        <div className='container'>
          <Scrivito.React.Content tag="h1" className="h2" content={ page } attribute="title" />
          <Scrivito.React.Content tag="h2" className="h4" content={ page } attribute="location" />
          <Scrivito.React.Image src={ page } attribute="image" />
        </div>
      </section>
    </div>
  );
});

export default Job;
