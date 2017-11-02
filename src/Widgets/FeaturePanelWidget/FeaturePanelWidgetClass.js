import { registerTextExtract } from 'utils/text_extract_registry';

const FeaturePanelWidget = Scrivito.provideWidgetClass('FeaturePanelWidget', {
  attributes: {
    icon: 'string',
    headline: 'string',
    description: 'string',
  },
});

registerTextExtract('FeaturePanelWidget', [
  { attribute: 'headline', type: 'string' },
  { attribute: 'description', type: 'string' },
]);

export default FeaturePanelWidget;
