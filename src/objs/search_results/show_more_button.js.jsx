function ShowMoreButton({ currentMaxItems, totalCount, onClick }) {
  if (currentMaxItems >= totalCount) { return null; }

  return [
    // Don't forget the keys :)
    <br key="A" />,
    <div key="B" className="text-center">
      <a className="btn btn-primary" onClick={ onClick }>
        Load more<i className="fa fa-angle-right fa-4" aria-hidden="true" />
      </a>
    </div>,
  ];
}

export default ShowMoreButton;
