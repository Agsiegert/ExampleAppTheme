import tickListWidgetIcon from 'assets/images/tick_list_widget.svg';
import { registerTextExtract } from 'utils/text_extract_registry';

const TickListWidget = Scrivito.provideWidgetClass('TickListWidget', {
  attributes: {
    items: ['widgetlist', { only: 'TickListItemWidget' }],
  },
});

registerTextExtract('TickListWidget', [
  { attribute: 'items', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig('TickListWidget', {
  title: 'Tick List',
  description: 'A list of checked statements.',
  thumbnail: `/${tickListWidgetIcon}`,
  attributesConfig: {
    items: {
      title: 'Items',
      description: 'Add tick list items to display.',
    },
  },
  generalProperties: [
    'items',
  ],
});

Scrivito.provideComponent('TickListWidget', ({ widget }) =>
  <ul className="tick-list">
    {
      widget.get('items').map((itemWidget, index) =>
        <Scrivito.ContentTag
          key={ `${itemWidget.id()}${index}` }
          content={ itemWidget }
          attribute="statement"
          tag="li"
        />
      )
    }
  </ul>
);

export default TickListWidget;