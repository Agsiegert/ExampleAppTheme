import IconWidgetComponent from 'Widgets/IconWidget/IconWidgetComponent';
import AllIcons from './IconEditorTab/AllIcons';
import IconSearch from './IconEditorTab/IconSearch';
import IconSearchResults from './IconEditorTab/IconSearchResults';

class IconEditorTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };

    this.setSearchValue = this.setSearchValue.bind(this);
    this.setWidgetIcon = this.setWidgetIcon.bind(this);
  }

  setSearchValue(event, searchValue) {
    event.preventDefault();
    event.stopPropagation();

    if (this.state.searchValue !== searchValue) {
      this.setState({ searchValue });
    }
  }

  setWidgetIcon(event, icon) {
    event.preventDefault();
    event.stopPropagation();

    this.props.widget.update({ icon });
  }

  render() {
    const widget = this.props.widget;
    const currentIcon = widget.get('icon');

    return (
      <div className="icon-editor-tab">
        <div className="scrivito_detail_content">
          <div className="scrivito_detail_label">
            <span>Preview</span>
          </div>
          <IconWidgetComponent key="thePreviewIcon" widget={ widget } />
          <div
            key="label"
            className="scrivito_detail_label"
          >
            <span>Icon</span>
          </div>
          <IconSearch
            searchValue={ this.state.searchValue }
            setSearchValue={ this.setSearchValue }
          />
          <IconSearchResults
            currentIcon={ currentIcon }
            searchValue={ this.state.searchValue }
            setWidgetIcon={ this.setWidgetIcon }
          />
          <AllIcons
            currentIcon={ currentIcon }
            hide={ this.state.searchValue.length }
            setWidgetIcon={ this.setWidgetIcon }
          />
        </div>
      </div>
    );
  }
}

// TODO: Remove Scrivito.connect,
// once https://github.com/infopark/rails_connector/issues/3636 is resolved.
Scrivito.registerComponent('IconEditorTab', Scrivito.connect(IconEditorTab));
