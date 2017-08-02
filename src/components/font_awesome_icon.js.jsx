class FontAwesomeIconPlainComponent extends React.Component {
  render() {
    const widget = this.props.widget;
    const icon = widget.get('icon') || 'fa-coffee';
    const link = widget.get('link');
    if (!link) {
      return <i className= { ['fa', icon].join(' ') } aria-hidden="true"></i>;
    }

    const title = link.title || '';

    return (
      <Scrivito.React.Link to={ link }>
        <i className= { ['fa', icon].join(' ') } aria-hidden="true" title={ title }></i>
      </Scrivito.React.Link>
    );
  }
}

const FontAwesomeIconComponent = Scrivito.React.connect(FontAwesomeIconPlainComponent);

export { FontAwesomeIconPlainComponent };
export default FontAwesomeIconComponent;
