/* eslint no-unused-vars: "off" */

import Author from './author';
import Download from './download';
import Event from './event';
import Homepage from './homepage';
import Image from './image';
import Job from './job';
import LandingPage from './landing_page';
import Page from './page';
import SearchResults from './search_results';
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
