import fontAwesomeIcons from './fontAwesomeIcons';
import SingleIcon from './SingleIcon';

class AllIcons extends React.Component {
  constructor(props) {
    super(props);

    this.categoryMap = {};
    fontAwesomeIcons.forEach(
      icon => icon.categories.forEach(
        category => {
          if (!this.categoryMap[category]) { this.categoryMap[category] = []; }
          this.categoryMap[category].push(icon);
        }
      )
    );
  }

  render() {
    const { setWidgetIcon, currentIcon, hide } = this.props;

    if (hide) { return null; }

    return (
      <React.Fragment>
        <div className="scrivito_detail_label">
          <span>All icons</span>
        </div>
        <div id="icons">
          {
            Object.entries(this.categoryMap).map(([category, icons], index) =>
              <section key={ `${category}${index}` }>
                <i>{ category }</i>
                <div className="row">
                  {
                    icons.map((icon, innerIndex) =>
                      <SingleIcon
                        key={ `${icon.id}${innerIndex}` }
                        icon={ icon }
                        currentIcon={ currentIcon }
                        setWidgetIcon={ setWidgetIcon }
                      />)
                  }
                </div>
              </section>
            )
          }
        </div>
      </React.Fragment>
    );
  }
}

export default AllIcons;
