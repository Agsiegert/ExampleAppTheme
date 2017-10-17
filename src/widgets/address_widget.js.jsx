import AddressListItemWidget from 'widgets/address_list_item_widget';
import { registerTextExtract } from 'utils/text_extract_registry';

const AddressWidget = Scrivito.createWidgetClass({
  name: 'AddressWidget',
  attributes: {
    address: 'html',
    listItems: ['widgetlist', { only: 'AddressListItemWidget' }],
    showLogo: ['enum', { values: ['yes', 'no'] }],
    showBorderBottom: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('AddressWidget', [
  { attribute: 'address', type: 'html' },
  { attribute: 'listItems', type: 'widgetlist' },
]);


Scrivito.provideEditingConfig(AddressWidget, {
  title: 'Address',
  description: 'A widget, which shows an address',
  attributesConfig: {
    showLogo: {
      title: 'Show logo',
      description: 'Should the logo be shown? Default: yes',
    },
    address: {
      title: 'Address',
      description: 'The actual address',
    },
    showBorderBottom: {
      title: 'Show border bottom?',
      description: 'Should a border be shown at the bottom? Default: no.',
    },
    listItems: {
      title: 'Address list items',
      description: 'E.g. phone numbers',
    },
  },
});

const AddMoreItems = Scrivito.connect(({ widget }) => {
  if (!Scrivito.isInPlaceEditingActive()) { return null; }
  if (widget.get('listItems').length) { return null; }

  return (
    <tr>
      <td className="text-center" colSpan="2">
        <a
          href='#'
          onClick={
            e => {
              e.preventDefault();
              e.stopPropagation();

              const newListItems =
                [...widget.get('listItems'), new AddressListItemWidget({})];
              widget.update({ listItems: newListItems });
            }
          }
        >
          Add first list item.
        </a>
      </td>
    </tr>
  );
});

Scrivito.provideComponent(AddressWidget, ({ widget }) => {
  return (
    <div>
      { widget.get('showLogo') !== 'no' && <Logo /> }
      <address>
        <Scrivito.ContentTag content={ widget } attribute="address" />
        <table>
          <tbody>
            {
              widget.get('listItems').map((listItem, i) =>
                <tr key={ i }>
                  <Scrivito.ContentTag content={ listItem } attribute="key" tag="td" />
                  <Scrivito.ContentTag content={ listItem } attribute="value" tag="td" />
                </tr>
              )
            }
            <AddMoreItems widget={ widget } />
          </tbody>
        </table>
      </address>
      { widget.get('showBorderBottom') === 'yes' && <div className="border-bottom" /> }
    </div>
  );
});

const Logo = Scrivito.connect(() => {
  if (!Scrivito.Obj.root()) { return null; }

  const logo = Scrivito.Obj.root().get('logoDark');
  if (!logo) { return null; }

  return (
    <Scrivito.LinkTag to={ Scrivito.Obj.root() }>
      <Scrivito.ImageTag content={ logo } className="logo" />
    </Scrivito.LinkTag>
  );
});

export default AddressWidget;
