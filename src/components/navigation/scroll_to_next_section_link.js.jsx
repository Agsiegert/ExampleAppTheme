import Scroll from 'react-scroll';

function ScrollToNextSectionLink({ heigthClassName }) {
  if (heigthClassName !== 'full-height') { return null; }

  return (
    <Scroll.Link
      to="nextSection"
      smooth={ true }
      duration={ 500 }
      className="btn-round btn-white-transparent hidden-xs"
    >
      <i className="fa fa-angle-down" aria-hidden="true" />
    </Scroll.Link>
  );
}

export default ScrollToNextSectionLink;
