import jobOverviewWidgetIcon from 'assets/images/job_overview_widget.svg';

Scrivito.provideEditingConfig('JobOverviewWidget', {
  title: 'Job Overview',
  description: 'A widget showing all jobs.',
  thumbnail: `/${jobOverviewWidgetIcon}`,
  attributesConfig: {
    location: {
      title: 'Filter by location',
      description: 'Leave empty to see all jobs.',
    },
  },
  generalProperties: [
    'location',
  ],
});
