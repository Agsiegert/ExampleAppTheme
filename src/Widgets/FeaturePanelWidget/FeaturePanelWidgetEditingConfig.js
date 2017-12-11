import featurePanelWidgetIcon from 'assets/images/feature_panel_widget.svg';

Scrivito.provideEditingConfig('FeaturePanelWidget', {
  title: 'Feature Panel',
  thumbnail: `/${featurePanelWidgetIcon}`,
  attributes: {
    icon: {
      title: 'Icon',
      description: 'Default: fa-check',
    },
  },
  properties: [
    'icon',
  ],
  initialContent: {
    icon: 'fa-check',
  },
});
