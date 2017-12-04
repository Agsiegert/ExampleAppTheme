import take from 'lodash/take';
import fontAwesomeIcons from './fontAwesomeIcons';
import SingleIcon from './SingleIcon';

class AllIcons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialRender: true,
    };

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

  componentDidMount() {
    if (this.state.initialRender === true) {
      setTimeout(() => this.setState({ initialRender: false }), 10);
    }
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
            <CategoriesAndIcons
              initialRender={ this.state.initialRender }
              categoryMap={ this.categoryMap }
              currentIcon={ currentIcon }
              setWidgetIcon={ setWidgetIcon }
            />
          }
        </div>
      </React.Fragment>
    );
  }
}

function CategoriesAndIcons({ initialRender, categoryMap, currentIcon, setWidgetIcon }) {
  if (initialRender) {
    const [category, categoryIcons] = Object.entries(categoryMap)[0];
    const icons = take(categoryIcons, 50);

    return ([
      <Category
        key={ category }
        category={ category }
        icons={ icons }
        currentIcon={ currentIcon }
        setWidgetIcon={ setWidgetIcon }
      />,
    ]);
  }

  return (
    Object.entries(categoryMap).map(([category, icons]) =>
      <Category
        key={ category }
        category={ category }
        icons={ icons }
        currentIcon={ currentIcon }
        setWidgetIcon={ setWidgetIcon }
      />
    )
  );
}

function Category({ category, icons, currentIcon, setWidgetIcon }) {
  return (
    <section>
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
  );
}

export default AllIcons;
