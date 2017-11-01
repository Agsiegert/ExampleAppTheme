import dividerWidgetIcon from 'assets/images/divider_widget.svg';
import scrivitoLogoRed from 'assets/images/scrivito_logo_red.svg';

const DividerWidget = Scrivito.createWidgetClass({
  name: 'DividerWidget',
});

Scrivito.provideEditingConfig('DividerWidget', {
  title: 'Divider',
  description: 'Adds a divider.',
  thumbnail: `/${dividerWidgetIcon}`,
});

Scrivito.provideComponent('DividerWidget', () =>
  <div className="hr-icon">
    <img src={ `/${scrivitoLogoRed}` } />
  </div>
);

export default DividerWidget;
