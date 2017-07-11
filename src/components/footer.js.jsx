import FontAwesomeIconComponent from 'components/font_awesome_icon';

const Footer = Scrivito.createComponent(() => {
  const root = Scrivito.Obj.root();
  return (
    <footer>
      <Scrivito.React.Content content={ root } attribute="footer" />
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
});

export default Footer;
