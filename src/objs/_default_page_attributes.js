const defaultPageAttributes = {
  body: ['widgetlist', { only: 'SectionWidget' }],
  navigationBackgroundImage: 'reference',
  navigationSection: 'widgetlist',
  navigationStyle: ['enum', {
    validValues: [
      'solidWhite',
      'transparentDark full-height',
      'transparentDark full-height gradient',
      'transparentDark medium-height',
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

export {
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
};
