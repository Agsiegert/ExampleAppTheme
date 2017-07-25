const defaultPageAttributes = {
  body: ['widgetlist', { only: 'SectionWidget' }],
  navigationBackgroundImage: 'reference',
  navigationSection: 'widgetlist',
  navigationStyle: ['enum', { validValues: ['solidWhite', 'transparentDark'] }],
  title: 'string',
};

const defaultPageUiConfigAttributes = {
  title: {
    title: 'Title',
    description: 'Description of title',
  },
  navigationStyle: {
    title: 'Navigation Style',
    description: 'The style of the navigation',
  },
  navigationBackgroundImage: {
    title: 'Navigation Background Image',
    description: 'The background image of the navigation',
  },
};

function defaultNavigationOptions(obj) {
  return {
    navigationStyle: obj.get('navigationStyle') || 'solidWhite',
    backgroundImage: obj.get('navigationBackgroundImage') || null,
    heigthClassName: 'full-height-center',
  };
}

export {
  defaultNavigationOptions,
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
};
