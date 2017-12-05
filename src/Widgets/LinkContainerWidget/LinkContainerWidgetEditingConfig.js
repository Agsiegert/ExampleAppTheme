import linkListWidgetIcon from 'assets/images/link_list_widget.svg';

Scrivito.provideEditingConfig('LinkContainerWidget', {
  title: 'Link List',
  description: 'A widget which lists links.',
  thumbnail: `/${linkListWidgetIcon}`,
  attributes: {
    headline: {
      title: 'Headline',
      description: 'Leave empty to not show a headline.',
    },
    links: {
      title: 'Links',
    },
  },
  properties: [
    'headline',
    'links',
  ],
});
