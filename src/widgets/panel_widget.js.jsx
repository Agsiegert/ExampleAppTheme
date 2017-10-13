import { registerTextExtract } from 'utils/text_extract_registry';

const PanelWidget = Scrivito.createWidgetClass({
  name: 'PanelWidget',
  attributes: {
    body: 'widgetlist',
    useOffset: ['enum', { validValues: ['yes', 'no'] }],
  },
});

registerTextExtract('PanelWidget', [
  { attribute: 'body', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(PanelWidget, {
  title: 'Panel',
  description: 'A panel widget',
  attributesConfig: {
    useOffset: {
      title: 'Use offset?',
      description: 'Should an offset be used? If so, the panel will move "up". Default: no',
    },
  },
});

Scrivito.provideComponent(PanelWidget, ({ widget }) => {
  const classNames = ['panel', 'panel-theme'];
  if (widget.get('useOffset') === 'yes') { classNames.push('box-offset'); }

  return (
    <div className={ classNames.join(' ') }>
      <Scrivito.ContentTag content={ widget } attribute="body" className="panel-body" />
    </div>
  );
});

export default PanelWidget;
