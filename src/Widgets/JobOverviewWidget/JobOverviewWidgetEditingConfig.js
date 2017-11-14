import jobOverviewWidgetIcon from 'assets/images/job_overview_widget.svg';

Scrivito.provideEditingConfig('JobOverviewWidget', {
  title: 'Job Overview',
  description: 'A widget showing all jobs.',
  thumbnail: `/${jobOverviewWidgetIcon}`,
  attributesConfig: {
    location: {
      title: 'Location',
      description: 'Limit jobs to one location. Leave it empty, to see all jobs.',
    },
  },
  generalProperties: [
    'location',
  ],
});
