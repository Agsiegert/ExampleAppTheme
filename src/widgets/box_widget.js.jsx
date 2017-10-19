import { registerTextExtract } from 'utils/text_extract_registry';

const BoxWidget = Scrivito.createWidgetClass({
  name: 'BoxWidget',
  attributes: {
    body: 'widgetlist',
    useOffset: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('BoxWidget', [
  { attribute: 'body', type: 'widgetlist' },
]);

Scrivito.provideEditingConfig(BoxWidget, {
  title: 'Box',
  description: 'A box widget.',
  attributesConfig: {
    useOffset: {
      title: 'Use offset?',
      description: 'Should an offset be used? If so, the box will move "up". Default: no',
    },
  },
  generalProperties: [
    'useOffset',
  ],
});

Scrivito.provideComponent(BoxWidget, ({ widget }) => {
  const classNames = ['panel', 'panel-theme'];
  if (widget.get('useOffset') === 'yes') { classNames.push('box-offset'); }

  return (
    <div className={ classNames.join(' ') }>
      <Scrivito.ContentTag content={ widget } attribute="body" className="panel-body" />
    </div>
  );
});

export default BoxWidget;
