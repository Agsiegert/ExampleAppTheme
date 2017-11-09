import { registerTextExtract } from 'utils/textExtractRegistry';

const SectionWidget = Scrivito.provideWidgetClass('SectionWidget', {
  attributes: {
    content: 'widgetlist',
    useFullWidth: ['enum', { values: ['yes', 'no'] }],
    useFullHeight: ['enum', { values: ['yes', 'no'] }],
    paddingDisabled: ['enum', { values: ['yes', 'no'] }],
    backgroundColor: [
      'enum',
      {
        values: [
          'white',
          'greywhite',
          'greylight',
          'greymiddle',
          'greydark',
          'grey',
          'brand-primary',
          'brand-secondary',
          'dark-image',
        ],
      },
    ],
    backgroundImage: 'reference',
  },
});

registerTextExtract('SectionWidget', [
  { attribute: 'content', type: 'widgetlist' },
]);

export default SectionWidget;
