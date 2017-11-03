import googleMapsWidgetIcon from 'assets/images/google_maps_widget.svg';

Scrivito.provideEditingConfig('GoogleMapsWidget', {
  title: 'Google Maps',
  description: 'A widget with google maps.',
  thumbnail: `/${googleMapsWidgetIcon}`,
  attributesConfig: {
    address: {
      title: 'Address',
      description: 'The address that should be shown on the map.'
        + ' Default: Brandenburg Gate, Berlin, Germany',
    },
    zoom: {
      title: 'Zoom',
      description: 'Zoom level of the map.'
       + ' 1 - world level, 15 - street level, 20 - building level. Default: 15',
    },
    showWidgets: {
      title: 'Show widgets?',
      description: 'Should widgets be shown on top of this map? Default: no',
    },
  },
  generalProperties: [
    'address',
    'zoom',
    'showWidgets',
  ],
});
