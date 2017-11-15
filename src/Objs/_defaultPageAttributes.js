const defaultPageAttributes = {
  body: ['widgetlist', { only: 'SectionWidget' }],
  navigationBackgroundImage: 'reference',
  navigationHeight: ['enum', {
    values: [
      'small',
      'medium-height',
      'full-height',
    ],
  }],
  navigationSection: 'widgetlist',
  navigationStyle: ['enum', {
    values: [
      'solidWhite',
      'transparentDark',
      'transparentDark gradient',
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
  navigationHeight: {
    title: 'Navigation Height',
    description: 'How high should the navigation be? Default: small',
  },
};

const defaultGeneralProperties = [
  'title',
  'navigationHeight',
  'navigationBackgroundImage',
  'navigationStyle',
];

export {
  defaultGeneralProperties,
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
};
