/* eslint no-console: "off" */

export default () => {
  Scrivito.load(() => {
    return [...Scrivito.Obj.all()];
  }).then(objs => {
    console.log('Deleting all objs...');
    objs.forEach(o => {
      console.log(`Deleting ${o.id}...`);
      o.destroy();
    });
    console.log('Done deleting all objs.');
  });
};
