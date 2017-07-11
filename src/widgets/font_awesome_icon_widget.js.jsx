import { FontAwesomeIconPlainComponent } from 'components/font_awesome_icon';

const FontAwesomeIconWidget = Scrivito.createWidgetClass({
  name: 'FontAwesomeIconWidget',
  attributes: {
    icon: 'string',
    link: 'link',
  },
});

Scrivito.provideUiConfig(FontAwesomeIconWidget, {
  title: 'Font Awesome Icon',
  description: 'A widget with a font awesome icon. See http://fontawesome.io/icons/ for all icons.',
  attributes: {
    icon: {
      title: 'Icon',
      description: 'The name of the icon. E.g. "fa-address-book"',
    },
    link: {
      title: 'Link',
      description: 'The link where this icon should lead (optional)',
    },
  },
});

Scrivito.provideComponent(FontAwesomeIconWidget, FontAwesomeIconPlainComponent);

export default FontAwesomeIconWidget;
