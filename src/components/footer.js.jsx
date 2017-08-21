import IconComponent from 'components/icon';

function Footer() {
  const root = Scrivito.Obj.root();

  if (!root) { return null; }

  return (
    <footer>
      <div className="bg-greywhite">
        <div className="container">
          <Scrivito.React.Content content={ root } attribute="footer" />
        </div>
      </div>
      <div className="bg-greydark height-center social-footer">
        <div className="container">
          {
            root.get('iconButtons').map(iconButton =>
              <IconComponent
                  widget={ iconButton }
                  key= { iconButton.id }
                />
            )
          }
        </div>
      </div>
    </footer>
  );
}

export default Scrivito.React.connect(Footer);
