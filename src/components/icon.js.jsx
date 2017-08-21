function Icon({ icon, size, title }) {
  const actualIcon = icon || 'fa-coffee';
  return <i className= { ['fa', actualIcon, size].join(' ') } aria-hidden="true" title={ title }/>;
}

function IconComponent({ icon, size, link }) {
  if (!link) {
    return <Icon icon={ icon } size={ size } />;
  }

  const title = link.title || '';

  return (
    <Scrivito.React.Link to={ link }>
      <Icon icon={ icon } size={ size } title={ title } />
    </Scrivito.React.Link>
  );
}

export default IconComponent;
