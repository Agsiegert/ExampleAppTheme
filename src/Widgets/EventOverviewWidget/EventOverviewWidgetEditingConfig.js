import eventOverviewWidgetIcon from 'assets/images/event_overview_widget.svg';

Scrivito.provideEditingConfig('EventOverviewWidget', {
  title: 'Event Overview',
  description: 'A widget showing all events.',
  thumbnail: `/${eventOverviewWidgetIcon}`,
  attributesConfig: {
    maxItems: {
      title: 'Maximum number of events',
      description: 'How many events should be shown? Set it to 0, to show all events.',
    },
    tags: {
      title: 'Filter tags',
      description: 'Only show events, that have one of the given tags.' +
        ' Leave it empty, to not filter by tags.',
    },
    showTags: {
      title: 'Show tags?',
      description: 'Should the list of tags be shown? Default: no',
    },
  },
  generalProperties: [
    'maxItems',
    'showTags',
    'tags',
  ],
});
