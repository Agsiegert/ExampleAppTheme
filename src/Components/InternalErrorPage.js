function InternalErrorPage() {
  const backgroundImage = [
    'linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))',
    'url(https://unsplash.com/photos/wapAWmqpBJw/download)',
  ].join(', ');

  return <Scrivito.InternalErrorPage>
    <section
      className="bg-dark-image full-height"
      style={ { background: 'no-repeat center / cover', backgroundImage } }
    >
      <div className="container">
        <div className="text-center"><h1 className="hero-bold">Sorry</h1></div>
        <div className="text-center">
          <h2 className="hero-small">Something went wrong while connecting to our system.</h2>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={ () => window.location.reload(true) }
          >
            Please try again<i className="fa fa-angle-right fa-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  </Scrivito.InternalErrorPage>;
}

export default Scrivito.connect(InternalErrorPage);
