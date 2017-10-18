const defaultPageAttributes = {
  body: ['widgetlist', { only: 'SectionWidget' }],
  navigationBackgroundImage: 'reference',
  navigationSection: 'widgetlist',
  navigationStyle: ['enum', {
    values: [
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
    description: 'The title of this page.',
  },
  navigationStyle: {
    title: 'Navigation Style',
    description: 'The style of the navigation.',
  },
  navigationBackgroundImage: {
    title: 'Navigation Background Image',
    description: 'The background image of the navigation.',
  },
};

const defaultGeneralProperties = [
  'title',
  'navigationBackgroundImage',
  'navigationStyle',
];

export {
  defaultGeneralProperties,
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
};
