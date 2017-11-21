import eventOverviewWidgetIcon from 'assets/images/event_overview_widget.svg';

Scrivito.provideEditingConfig('EventOverviewWidget', {
  title: 'Event Overview',
  description: 'A widget showing all events.',
  thumbnail: `/${eventOverviewWidgetIcon}`,
  attributesConfig: {
    maxItems: {
      title: 'Maximum number of events',
      description: 'Set it to 0, to show all events.',
    },
    tags: {
      title: 'Filter by tags',
      description: 'Only show events, that have one of the given tags.' +
        ' Leave it empty, to not filter by tags.',
    },
    showTags: {
      title: 'Show list of tags?',
      description: 'Default: No',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
  },
  generalProperties: [
    'maxItems',
    'showTags',
    'tags',
  ],
});
