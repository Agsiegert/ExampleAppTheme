Scrivito.registerComponent('SocialCardsTab', obj =>
  <div>
    <h3>Twitter card</h3>
    <div className="seo_card_preview">
      <div className="row">
        <Scrivito.React.Content content={ obj } attribute="tcCreator" className="col-md-12" />
      </div>
    </div>
  </div>
);
