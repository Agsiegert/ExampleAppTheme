import textWidgetIcon from 'assets/images/text_widget.svg';
import { registerTextExtract } from 'utils/text_extract_registry';

const TextWidget = Scrivito.provideWidgetClass('TextWidget', {
  attributes: {
    text: 'html',
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
  },
});

registerTextExtract('TextWidget', [
  { attribute: 'text', type: 'html' },
]);

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

Scrivito.provideComponent('TextWidget', ({ widget }) => {
  const classNames = [];
  if (widget.get('alignment')) {
    classNames.push(`text-${widget.get('alignment')}`);
  }

  return (
    <Scrivito.ContentTag
      tag="div"
      className={ classNames.join(' ') }
      content={ widget }
      attribute="text"
    />
  );
});

export default TextWidget;