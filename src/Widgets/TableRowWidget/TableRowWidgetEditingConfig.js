Scrivito.provideEditingConfig('TableRowWidget', {
  title: 'TableRowWidget',
  description: 'A table row widget.',
  attributesConfig: {
    feature: {
      title: 'Feature Name',
      description: 'The name of the feature described by this row.',
    },
    basicFeature: {
      title: 'Basic Feature',
      description: 'The feature described for the basic plan.',
    },
    teamFeature: {
      title: 'Team Feature',
      description: 'The feature described for the team plan.',
    },
    corporateFeature: {
      title: 'Corporate Feature',
      description: 'The feature described for the corporate plan.',
    },
  },
  generalProperties: [
    'feature',
    'basicFeature',
    'teamFeature',
    'corporateFeature',
  ],
  titleForContent: widget => widget.get('feature'),
});
