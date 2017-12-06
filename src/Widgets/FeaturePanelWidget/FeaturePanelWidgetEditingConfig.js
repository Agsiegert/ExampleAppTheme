import featurePanelWidgetIcon from 'assets/images/feature_panel_widget.svg';

Scrivito.provideEditingConfig('FeaturePanelWidget', {
  title: 'Feature Panel',
  description:
    'A feature panel, with an icon to the left and a headline and description to the right.',
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
