import fullWidthTransformedUrl from 'utils/full_width_transformed_url';

const JobPreviewWidget = Scrivito.createWidgetClass({
  name: 'JobPreviewWidget',
});

Scrivito.provideComponent(JobPreviewWidget, () => {
  const jobs = Scrivito.getClass('Job').all();

  return (
    <div className="row">
      {
        [...jobs].map((job, index) =>
          <div key={ `${job.id()}${index}` } className="col-sm-6">
            <Scrivito.LinkTag to={ job } className="box-card">
              <span
                  className="box-image"
                  style={ {
                    background: 'no-repeat center / cover',
                    backgroundImage: `url(${fullWidthTransformedUrl(job.get('image'))})`,
                  } }
                />
              <span className="box-topic arrow-right">
                <h3 className="h3">{ job.get('title') }</h3>
                <span>
                  <i
                      className={ `fa ${job.get('location') ? 'fa-map-marker' : ''} fa-2x` }
                      aria-hidden="true"
                      title="location"
                    />
                  <span>{ job.get('location') }</span>
                </span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </Scrivito.LinkTag>
          </div>
        )
      }
    </div>
  );
});

export default JobPreviewWidget;
