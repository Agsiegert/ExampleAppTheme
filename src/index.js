import 'Globals';
import 'scrivito_sdk';
import 'Objs/index';
import 'Widgets/index';
import App from 'App';
import 'config/scrivito';
import 'config/scrivitoContentBrowser';

const application = document.getElementById('application');
if (application) {
  ReactDOM.render(<App />, application);
}
