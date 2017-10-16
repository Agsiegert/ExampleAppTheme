import { registerTextExtract } from 'utils/text_extract_registry';

const Job = Scrivito.createObjClass({
  name: 'Job',
  attributes: {
    body: ['widgetlist', { only: 'SectionWidget' }],
    image: 'reference',
    location: 'string',
    title: 'string',
  },
});

registerTextExtract('Job', [
  { attribute: 'location', type: 'string' },
]);

Scrivito.provideEditingConfig(Job, {
  title: 'Job',
  description: 'A Job.',
  attributesConfig: {
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
          <Scrivito.ContentTag tag="h1" className="h2" content={ page } attribute="title" />
          <h2 className="h4">
            <i className="fa fa-map-marker fa-lg" aria-hidden="true" title="location" />
            { ' ' }
            <Scrivito.ContentTag tag="span" content={ page } attribute="location" />
          </h2>
        </div>
      </section>
      <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
    </div>
  );
});

export default Job;
