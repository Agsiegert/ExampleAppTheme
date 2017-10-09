function ShowMoreButton({ currentMaxItems, totalCount, onClick }) {
  if (currentMaxItems >= totalCount) { return null; }

  // TODO: Remove upper div, once React 16 is used.
  return (
    <div>
      <br />
      <div className="text-center">
        <a className="btn btn-primary" onClick={ onClick }>
          Load more<i className="fa fa-angle-right fa-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default ShowMoreButton;
