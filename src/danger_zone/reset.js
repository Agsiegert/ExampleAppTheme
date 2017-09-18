/* eslint no-console: "off" */

function reset(hardReset) {
  Scrivito.load(() => {
    if (hardReset) {
      return [...Scrivito.Obj.all()];
    }
    return [...Scrivito.Obj.all().andNot('_objClass', 'equals', 'Image')];
  }).then(objs => {
    if (hardReset) {
      console.log('Deleting all objs...');
    } else {
      console.log('Deleting all objs, except for images...');
    }

    objs.forEach(o => {
      console.log(`Deleting ${o.id()}...`);
      o.destroy();
    });
    console.log('Done deleting all objs.');
  });
}

export default reset;
