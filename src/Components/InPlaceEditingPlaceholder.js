const InPlaceEditingPlaceholder = ({ children, center }) => {
  if (!Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  const innerSpan = <span style={ placeholderCss }>{ children }</span>;

  if (center) {
    return <div className="text-center">{ innerSpan }</div>;
  }

  return innerSpan;
};

const placeholderCss = {
  color: 'rgba(64, 64, 64, 0.53)',
  display: 'inline-block',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: '28px',
  verticalAlign: 'middle',
};

export default InPlaceEditingPlaceholder;
