function Icon({ icon, size, title }) {
  const actualIcon = icon || 'fa-coffee';
  return <i className= { ['fa', actualIcon, size].join(' ') } aria-hidden="true" title={ title }/>;
}

function IconWithLinkComponent({ icon, size, link }) {
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

class IconPlainComponent extends React.Component {
  render() {
    const widget = this.props.widget;
    const icon = widget.get('icon') || 'fa-coffee';
    const link = widget.get('link');
    const size = widget.get('size');

    if (widget.get('centered') === 'yes') {
      return (
        <div className='text-center'>
          <IconWithLinkComponent icon={ icon } size={ size } link={ link } />
        </div>
      );
    }

    return <IconWithLinkComponent icon={ icon } size={ size } link={ link } />;
  }
}

const IconComponent = Scrivito.React.connect(IconPlainComponent);

export { IconPlainComponent, IconWithLinkComponent };
export default IconComponent;
