function IconComponent({ icon, size, title }) {
  return <i className= { ['fa', icon, size].join(' ') } aria-hidden="true" title={ title }/>;
}

function IconWithLinkComponent({ icon, size, link }) {
  if (!link) {
    return <IconComponent icon={ icon } size={ size } />;
  }

  const title = link.title || '';

  return (
    <Scrivito.React.Link to={ link }>
      <IconComponent icon={ icon } size={ size } title={ title } />
    </Scrivito.React.Link>
  );
}

class FontAwesomeIconPlainComponent extends React.Component {
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

const FontAwesomeIconComponent = Scrivito.React.connect(FontAwesomeIconPlainComponent);

export { FontAwesomeIconPlainComponent };
export default FontAwesomeIconComponent;
