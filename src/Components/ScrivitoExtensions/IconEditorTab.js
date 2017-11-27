import IconComponent from 'Components/Icon';

class IconEditorTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="icon-editor-tab">
        <div className="scrivito_detail_content">
          <IconPreview widget={ this.props.widget } />
        </div>
      </div>
    );
  }
}

Scrivito.registerComponent('IconEditorTab', IconEditorTab);

const IconPreview = Scrivito.connect(({ widget }) => {
  return [
    <div key="label" className="scrivito_detail_label">
      <span>
        Preview
      </span>
    </div>,
    <IconComponent
      key="thePreviewIcon"
      icon={ widget.get('icon') }
      size={ widget.get('size') }
    />,
  ];
});
