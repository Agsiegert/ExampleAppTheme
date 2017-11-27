import IconComponent from 'Components/Icon';
import fontAwesomeIcons from './fontAwesomeIcons.json';

class IconEditorTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const widget = this.props.widget;

    return (
      <div className="icon-editor-tab">
        <div className="scrivito_detail_content">
          <IconPreview widget={ widget } />
          <div key="label" className="scrivito_detail_label">
            <span>Icon</span>
          </div>
          <AllIcons widget={ widget } />
        </div>
      </div>
    );
  }
}

Scrivito.registerComponent('IconEditorTab', IconEditorTab);

const IconPreview = Scrivito.connect(({ widget }) => {
  return [
    <div key="label" className="scrivito_detail_label">
      <span>Preview</span>
    </div>,
    <IconComponent
      key="thePreviewIcon"
      icon={ widget.get('icon') }
      size={ widget.get('size') }
    />,
  ];
});

const categoryMap = {};
fontAwesomeIcons.forEach(
  icon => icon.categories.forEach(
    category => {
      categoryMap[category] = categoryMap[category] || new Set();
      categoryMap[category].add(icon);
    }
  )
);

const AllIcons = ({ widget }) => {
  return (
    <div id="icons">
      {
        Object.entries(categoryMap).map(([category, icons], index) =>
          <section key={ `${category}${index}` }>
            <i>{ category }</i>
            <div className="row">
              {
                [...icons].map((icon, innerIndex) =>
                  <SingleIcon
                    key={ `${icon.id}${innerIndex}` }
                    icon={ icon }
                    widget={ widget }
                  />)
              }
            </div>
          </section>
        )
      }
    </div>
  );
};

const SingleIcon = Scrivito.connect(({ icon, widget }) => {
  const cssIcon = `fa-${icon.id}`;
  const aClassNames = [];
  if (widget.get('icon') === `fa-${icon.id}`) {
    aClassNames.push('active');
  }

  return (
    <div className="fa-hover col-md-3 col-sm-4">
      <a
        href="#"
        className={ aClassNames.join(' ') }
        onClick={
          e => {
            e.preventDefault();
            e.stopPropagation();
            widget.update({ icon: cssIcon });
          }
        }
      >
        <IconComponent icon={ cssIcon } />
        <span className="sr-only">Example of </span>
        { icon.name }
      </a>
    </div>
  );
});
