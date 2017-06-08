import 'globals';
import 'scrivito_with_js_sdk';
import App from 'app';

scrivito.configure({
  tenant: 'c1bd936ef25b6dcccfd7b72b71fe969d',
});

ReactDOM.render(<App />, document.getElementById('application'));
