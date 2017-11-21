Scrivito.provideComponent('DividerWidget', () => {
  let logo = null;
  const root = Scrivito.Obj.root();
  logo = root.get('dividerLogo');

  return (
    <div className="hr-icon">
      <Scrivito.ImageTag content={ logo } />
    </div>
  );
});
