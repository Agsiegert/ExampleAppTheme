import tickListWidgetIcon from 'assets/images/tick_list_widget.svg';
import TickListItemWidget from 'Widgets/TickListItemWidget/TickListItemWidgetClass';

Scrivito.provideEditingConfig('TickListWidget', {
  title: 'Tick List',
  description: 'A list of checked statements.',
  thumbnail: `/${tickListWidgetIcon}`,
  attributes: {
    items: {
      title: 'Items',
    },
  },
  properties: [
    'items',
  ],
  initialContent: {
    items: () => [
      new TickListItemWidget({}),
      new TickListItemWidget({}),
      new TickListItemWidget({}),
    ],
  },
});
