import fontAwesomeIcons from './fontAwesomeIcons.json';
import SingleIcon from './SingleIcon';

function AllIcons({ setWidgetIcon, currentIcon, hide }) {
  if (hide) { return null; }

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
                    currentIcon={ currentIcon }
                    setWidgetIcon={ setWidgetIcon }
                  />)
              }
            </div>
          </section>
        )
      }
    </div>
  );
}

const categoryMap = {};
fontAwesomeIcons.forEach(
  icon => icon.categories.forEach(
    category => {
      categoryMap[category] = categoryMap[category] || new Set();
      categoryMap[category].add(icon);
    }
  )
);

export default AllIcons;
