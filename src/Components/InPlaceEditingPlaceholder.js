const InPlaceEditingPlaceholder = ({ children }) => {
  if (!Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  return (
    <span style={ placeholderCss }>
      { children }
    </span>
  );
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
