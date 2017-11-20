import sectionWidgetIcon from 'assets/images/section_widget.svg';

Scrivito.provideEditingConfig('SectionWidget', {
  title: 'Section',
  description: 'A section',
  thumbnail: `/${sectionWidgetIcon}`,
  attributesConfig: {
    backgroundColor: {
      title: 'Background Color',
      description: 'Which background color should this section have?' +
        ' Does not apply, if a background image is set. Default: white',
      values: [
        { value: 'white', title: 'white' },
        { value: 'greywhite', title: 'white grey' },
        { value: 'greylight', title: 'light grey' },
        { value: 'greymiddle', title: 'grey' },
        { value: 'greydark', title: 'dark grey' },
        { value: 'brand-primary', title: 'primary color' },
        { value: 'brand-secondary', title: 'secondary color' },
      ],
    },
    useFullWidth: {
      title: 'Use full width?',
      description: 'Should this section use the full screen width?',
    },
    useFullHeight: {
      title: 'Use full height?',
      description: 'Should this section use the full screen height?',
    },
    showPadding: {
      title: 'Show padding?',
      description: 'Padding adds space around this section. Default: Yes',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
    backgroundImage: {
      title: 'Background Image',
      description: 'Which background image should be shown?',
    },
  },
  generalProperties: [
    'backgroundColor',
    'backgroundImage',
    'useFullWidth',
    'useFullHeight',
    'showPadding',
  ],
});
