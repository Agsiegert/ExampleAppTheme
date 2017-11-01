import featurePanelWidgetIcon from 'assets/images/feature_panel_widget.svg';
import { registerTextExtract } from 'utils/text_extract_registry';

const FeaturePanelWidget = Scrivito.createWidgetClass({
  name: 'FeaturePanelWidget',
  attributes: {
    icon: 'string',
    headline: 'string',
    description: 'string',
  },
});

Scrivito.provideEditingConfig('FeaturePanelWidget', {
  title: 'Feature Panel',
  description:
    'A feature panel, with an icon to the left and a headline and description to the right.',
  thumbnail: `/${featurePanelWidgetIcon}`,
  attributesConfig: {
    icon: {
      title: 'Icon',
      description: 'Which icon should be shown? Default: fa-check',
    },
  },
  generalProperties: [
    'icon',
  ],
});

registerTextExtract('FeaturePanelWidget', [
  { attribute: 'headline', type: 'string' },
  { attribute: 'description', type: 'string' },
]);

Scrivito.provideComponent('FeaturePanelWidget', ({ widget }) => {
  return (
    <div className="panel panel-theme panel-list">
      <div className="panel-icon">
        <i className={ `fa ${widget.get('icon') || 'fa-check'} fa-3x` } aria-hidden="true" />
      </div>
      <div className="panel-body">
        <Scrivito.ContentTag className="h3" tag="h3" content={ widget } attribute="headline" />
        <Scrivito.ContentTag tag="p" content={ widget } attribute="description" />
      </div>
    </div>
  );
});

export default FeaturePanelWidget;
