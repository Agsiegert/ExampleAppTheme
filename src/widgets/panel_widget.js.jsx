import { registerTextExtract } from 'utils/text_extract_registry';

const PanelWidget = Scrivito.createWidgetClass({
  name: 'PanelWidget',
  attributes: {
    body: 'widgetlist',
  },
});

registerTextExtract('PanelWidget', [
  { attribute: 'body', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(PanelWidget, {
  title: 'Panel',
  description: 'A panel widget',
});

Scrivito.provideComponent(PanelWidget, ({ widget }) =>
  <div className="panel panel-theme">
    <Scrivito.ContentTag content={ widget } attribute="body" className="panel-body" />
  </div>
);

export default PanelWidget;
