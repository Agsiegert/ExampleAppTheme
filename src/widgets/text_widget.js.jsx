import textExtractFromHtml from 'utils/text_extract_from_html';

const BaseTextWidget = Scrivito.createWidgetClass({
  name: 'TextWidget',
  attributes: {
    text: 'html',
    alignment: ['enum', { validValues: ['left', 'center', 'right'] }],
  },
});

class TextWidget extends BaseTextWidget {
  textExtract() {
    return textExtractFromHtml(this.get('text'));
  }
}

Scrivito.registerClass('TextWidget', TextWidget);

Scrivito.provideUiConfig(TextWidget, {
  title: 'Text',
  description: 'A widget with html text.',
  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'How should this text be aligned? Default: left',
    },
    text: {
      title: 'Text',
      description: 'The actual source code of this text',
    },
  },
});

Scrivito.provideComponent(TextWidget, ({ widget }) => {
  const classNames = [];
  if (widget.get('alignment')) {
    classNames.push(`text-${widget.get('alignment')}`);
  }

  return <Scrivito.ContentTag
    tag="div"
    className={ classNames.join(' ') }
    content={ widget }
    attribute="text"
    />;
});

export default TextWidget;
