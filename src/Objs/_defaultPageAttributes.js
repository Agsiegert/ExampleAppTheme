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
    title: 'Header Image',
    description: 'The background image of the header.',
  },
  navigationBackgroundImageGradient: {
    title: 'Header Image Gradient',
    description: 'Should the header image have a gradient?' +
      ' Only applies, if a header image is selected. Default: no',
  },
  navigationHeight: {
    title: 'Header Height',
    description: 'How high should the header be? Default: small',
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
