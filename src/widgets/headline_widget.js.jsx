import { registerTextExtract } from 'utils/text_extract_registry';

const HeadlineWidget = Scrivito.createWidgetClass({
  name: 'HeadlineWidget',
  attributes: {
    headline: 'string',
    level: ['enum', { values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    style: ['enum', { values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    showDividingLine: ['enum', { values: ['yes', 'no'] }],
    marginDisabled: ['enum', { values: ['yes', 'no'] }],
  },
});

registerTextExtract('HeadlineWidget', [
  { attribute: 'headline', type: 'string' },
]);

Scrivito.provideEditingConfig(HeadlineWidget, {
  title: 'Headline',
  description: 'A widget with a headline.',
  attributesConfig: {
    level: {
      title: 'Level',
      description: 'The level of the headline.',
    },
    style: {
      title: 'Style',
      description: 'The style of the headline (how big it should be).',
    },
    alignment: {
      title: 'Alignment',
      description: 'How should this headline be aligned? Default: left',
    },
    showDividingLine: {
      title: 'Show dividing line',
      description: 'Should this headline show a dividing line? Default: no',
    },
    marginDisabled: {
      title: 'Disable Margin?',
      description: 'Should this headline use no margin (empty space around this headline)?',
    },
  },
  titleForContent: widget => widget.get('headline'),
});

Scrivito.provideComponent(HeadlineWidget, ({ widget }) => {
  const level = widget.get('level') || 'h1';
  const style = widget.get('style') || level;
  const classNames = [style];
  if (widget.get('alignment')) {
    classNames.push(`text-${widget.get('alignment')}`);
  }
  if (widget.get('showDividingLine') === 'yes') {
    classNames.push('border-bottom');
  }
  if (widget.get('marginDisabled') === 'yes') {
    classNames.push('no-margin');
  }

  return <Scrivito.ContentTag
    tag={ level }
    content={ widget }
    attribute="headline"
    className={ classNames.join(' ') }
  />;
});

export default HeadlineWidget;
