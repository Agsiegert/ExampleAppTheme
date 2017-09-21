/* eslint no-console: "off" */

function reset(hardReset) {
  Scrivito.load(() => {
    const all = [...Scrivito.Obj.all()];

    if (hardReset) {
      return all;
    }
    return all.filter(obj => !obj.isBinary());
  }).then(objs => {
    if (hardReset) {
      console.log('Deleting all objs...');
    } else {
      console.log('Deleting all objs, except for binaries...');
    }

    objs.forEach(o => {
      console.log(`Deleting ${o.id()}...`);
      o.destroy();
    });
    console.log('Done deleting all objs.');
  });
}

export default reset;
