import textWidgetIcon from 'assets/images/text_widget.svg';

Scrivito.provideEditingConfig('TextWidget', {
  title: 'Text',
  description: 'A widget with html text.',
  thumbnail: `/${textWidgetIcon}`,
  attributesConfig: {
    alignment: {
      title: 'Alignment',
      description: 'How should this text be aligned? Default: left',
    },
    text: {
      title: 'Text',
      description: 'The actual source code of this text',
    },
  },
  generalProperties: [
    'alignment',
    'text',
  ],
});
