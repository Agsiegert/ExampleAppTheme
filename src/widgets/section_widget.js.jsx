import fullWidthTransformedUrl from 'utils/full_width_transformed_url';
import { registerTextExtract } from 'utils/text_extract_registry';

const SectionWidget = Scrivito.createWidgetClass({
  name: 'SectionWidget',
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

Scrivito.provideEditingConfig(SectionWidget, {
  title: 'Section',
  description: 'A section',
  attributesConfig: {
    backgroundColor: {
      title: 'Background Color',
      description: 'Which background color should this section have?',
    },
    useFullWidth: {
      title: 'Use full width?',
      description: 'Should this section use the full screen width?',
    },
    useFullHeight: {
      title: 'Use full height?',
      description: 'Should this section use the full screen height?',
    },
    paddingDisabled: {
      title: 'Disable padding?',
      description: 'Should this section use no padding (empty space around this section)?',
    },
    backgroundImage: {
      title: 'Background image',
      description: 'Which background image should be shown?',
    },
  },
  generalProperties: [
    'backgroundColor',
    'backgroundImage',
    'useFullWidth',
    'useFullHeight',
    'paddingDisabled',
  ],
});

Scrivito.provideComponent(SectionWidget, ({ widget }) => {
  const sectionClassNames = [];

  const backgroundColor = widget.get('backgroundColor') || 'white';
  sectionClassNames.push(`bg-${backgroundColor}`);

  if (widget.get('paddingDisabled') === 'yes') {
    sectionClassNames.push('no-padding');
  }

  let contentClassName = 'container';
  if (widget.get('useFullWidth') === 'yes') {
    contentClassName = 'container-fluid gutter0';
  }

  if (widget.get('useFullHeight') === 'yes') {
    sectionClassNames.push('full-height');
  }

  const sectionStyle = {};
  if (backgroundColor === 'dark-image') {
    const backgroundImage = widget.get('backgroundImage');
    if (backgroundImage) {
      const backgroundUrl = fullWidthTransformedUrl(backgroundImage);
      sectionStyle.background = 'no-repeat center / cover';
      sectionStyle.backgroundImage = [
        'linear-gradient(rgba(46, 53, 60, 0.7)',
        'rgba(46, 53, 60, 0.7))',
        `url(${backgroundUrl})`,
      ].join(', ');
    }
  }

  return (<section className={ sectionClassNames.join(' ') } style={ sectionStyle }>
    <Scrivito.ContentTag className={ contentClassName } content={ widget } attribute="content" />
  </section>);
});

export default SectionWidget;
