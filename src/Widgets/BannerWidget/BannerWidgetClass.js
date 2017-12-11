const BannerWidget = Scrivito.provideWidgetClass('BannerWidget', {
  attributes: {
    content: 'widgetlist',
    location: ['enum', { values: ['header', 'footer'] }],
  },
});

export default BannerWidget;
