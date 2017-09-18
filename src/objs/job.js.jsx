const BaseJob = Scrivito.createObjClass({
  name: 'Job',
  attributes: {
    image: 'reference',
    location: 'string',
    title: 'string',
  },
});

class Job extends BaseJob {
  navigationOptions() {
    if (this.get('image')) {
      return {
        navigationStyle: 'transparentDark',
        backgroundImage: this.get('image'),
        heigthClassName: 'min-height',
      };
    }

    return {
      navigationStyle: 'solidWhite',
      backgroundImage: null,
      heigthClassName: null,
    };
  }
}

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
      <section className="bg-white">
        <div className="container">
          <Scrivito.React.Content tag="h1" className="h2" content={ page } attribute="title" />
          <span>
            <i className="fa fa-map-marker fa-2x" aria-hidden="true" title="location" />
            <Scrivito.React.Content tag="span" content={ page } attribute="location" />
          </span>
        </div>
      </section>
    </div>
  );
});

export default Job;
