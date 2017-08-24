Scrivito.registerComponent('SocialCardsTab', ({ obj }) =>
  <div>
    <div className="seo_card_preview">
      <h3>Twitter card</h3>
        <div className="row">
          <div className="col-md-12">
            Twitter handle for post:
            <Scrivito.React.Content content={ obj } attribute="tcCreator">
              { obj.get('tcCreator') || '@Scrivito' }
            </Scrivito.React.Content>
          </div>
        </div>
        <div className="row card twitter_card">
          <div className="col-md-3 seo_card_preview_img">
             <Scrivito.React.Image src={ obj } attribute="tcImage"/>
          </div>
          <div className="col-md-9">
            Title:
              <Scrivito.React.Content content={ obj } attribute="tcTitle" tag="h5"/>
            Description:
              <Scrivito.React.Content content={ obj } attribute="tcDescription" tag="div"/>
          </div>
        </div>
      </div>
    <div className="seo_card_preview">
      <h3>Facebook card</h3>
        <div className="row card fb_card">
          <div className="col-md-4 seo_card_preview_img">
            <Scrivito.React.Image src={ obj } attribute="ogImage"/>
          </div>
          <div className="col-md-8">
            Title: <Scrivito.React.Content content={ obj } attribute="ogTitle"/>
            Description: <Scrivito.React.Content content={ obj } attribute="ogDescription"/>
          </div>
        </div>
      </div>
  </div>
);
