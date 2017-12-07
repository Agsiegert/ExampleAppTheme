import priceWidgetIcon from 'assets/images/price_widget.png';

Scrivito.provideEditingConfig('PriceWidget', {
  title: 'Price',
  description: 'A widget with a price',
  thumbnail: `/${priceWidgetIcon}`,
  initialContent: {
    currency: '$',
    price: '20',
    period: '/mo',
  },
});
