/* eslint no-unused-vars: "off" */

import Video from './video';

const allJsFiles = require.context('./', true, /\/(\w+)\/(\w+)\.js$/);
allJsFiles.keys().forEach(key => {
  const name = key.split('/')[1];

  switch (key) {
    case `./${name}/${name}.js`: return allJsFiles(key);
    case `./${name}/${name}Component.js`: return allJsFiles(key);
    case `./${name}/${name}EditingConfig.js`: return allJsFiles(key);
  }
});
