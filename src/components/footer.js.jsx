import FontAwesomeIconComponent from 'components/font_awesome_icon';

function Footer() {
  const root = Scrivito.Obj.root();

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
            root.get('socialButtons').map(socialButton =>
              <FontAwesomeIconComponent
                  widget={ socialButton }
                  key= { socialButton.id }
                />
            )
          }
        </div>
      </div>
    </footer>
  );
}

export default Scrivito.React.connect(Footer);
