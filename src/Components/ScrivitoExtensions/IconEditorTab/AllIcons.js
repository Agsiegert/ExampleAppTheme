import take from 'lodash/take';
import fontAwesomeIcons from './fontAwesomeIcons';

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
          icons.map((icon, innerIndex) => {
            const cssIcon = `fa-${icon.id}`;

            const aClassNames = [];
            if (currentIcon === cssIcon) {
              aClassNames.push('active');
            }

            return (
              <div
                key={ `${icon.id}${innerIndex}` }
                className="fa-hover col-md-3 col-sm-4"
              >
                <a
                  href="#"
                  className={ aClassNames.join(' ') }
                  onClick={ e => setWidgetIcon(e, cssIcon) }
                >
                  <i className= { ['fa', cssIcon].join(' ') } aria-hidden="true" />
                  <span className="sr-only">Example of </span>
                  { icon.name }
                </a>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}

export default AllIcons;
