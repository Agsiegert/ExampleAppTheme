import sectionWidgetIcon from 'assets/images/section_widget.svg';

Scrivito.provideEditingConfig('SectionWidget', {
  title: 'Section',
  description: 'A section',
  thumbnail: `/${sectionWidgetIcon}`,
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
