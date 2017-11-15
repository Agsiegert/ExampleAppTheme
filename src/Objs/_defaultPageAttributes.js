const defaultPageAttributes = {
  body: ['widgetlist', { only: 'SectionWidget' }],
  navigationBackgroundImage: 'reference',
  navigationBackgroundImageGradient: ['enum', { values: ['yes', 'no'] }],
  navigationHeight: ['enum', {
    values: [
      'small',
      'medium-height',
      'full-height',
    ],
  }],
  navigationSection: 'widgetlist',
  title: 'string',
};

const defaultPageUiConfigAttributes = {
  title: {
    title: 'Title',
    description: 'The title of this page.',
  },
  navigationBackgroundImage: {
    title: 'Navigation Background Image',
    description: 'The background image of the navigation.',
  },
  navigationBackgroundImageGradient: {
    title: 'Navigation Background Image Gradient',
    description: 'Should the background image have a gradient? Only applies,' +
      ' if a background image is selected. Default: no',
  },
  navigationHeight: {
    title: 'Navigation Height',
    description: 'How high should the navigation be? Default: small',
    values: [
      { value: 'small', title: 'small' },
      { value: 'medium-height', title: 'medium' },
      { value: 'full-height', title: 'fullscreen' },
    ],
  },
};

const defaultGeneralProperties = [
  'title',
  'navigationHeight',
  'navigationBackgroundImage',
  'navigationBackgroundImageGradient',
];

export {
  defaultGeneralProperties,
  defaultPageAttributes,
  defaultPageUiConfigAttributes,
};
