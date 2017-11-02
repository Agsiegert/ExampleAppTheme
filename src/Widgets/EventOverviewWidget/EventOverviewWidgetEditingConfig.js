import eventOverviewWidgetIcon from 'assets/images/event_overview_widget.svg';

Scrivito.provideEditingConfig('EventOverviewWidget', {
  title: 'Event Overview',
  description: 'A widget showing all events.',
  thumbnail: `/${eventOverviewWidgetIcon}`,
  attributesConfig: {
    maxItems: {
      title: 'Maximum number of events',
      description: 'Maximum number of events to be shown?',
    },
  },
  generalProperties: [
    'maxItems',
  ],
});
