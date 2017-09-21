const defaultPageAttributes = {
  body: ['widgetlist', { only: 'SectionWidget' }],
  navigationBackgroundImage: 'reference',
  navigationSection: 'widgetlist',
  navigationStyle: ['enum', {
    validValues: [
      'solidWhite',
      'transparentDark full-height',
      'transparentDark full-height gradient',
      'transparentDark min-height',
    ],
  }],
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
  const navStyle = obj.get('navigationStyle') || 'solidWhite';

  let navigationStyle = navStyle;
  if (navStyle.startsWith('transparentDark')) { navigationStyle = 'transparentDark'; }

  const heigthClassName = navStyle.split(' ')[1] || 'full-height';

  const backgroundImage = obj.get('navigationBackgroundImage') || null;

  const useGradient = navStyle.includes('gradient');

  return {
    navigationStyle,
    backgroundImage,
    heigthClassName,
    useGradient,
  };
}

export {
  defaultNavigationOptions,
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
};
