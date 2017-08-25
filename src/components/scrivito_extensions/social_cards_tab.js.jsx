import getMetaData from 'utils/get_meta_data';

Scrivito.registerComponent('SocialCardsTab', ({ obj }) =>
  <div>
    <div className='col-md-4'>
      <h2>Optional Inputs</h2>
      <h3>Twitter</h3>
      <div>
        <div>Creator: </div>
        <div>
          <Scrivito.React.Content content={ obj } attribute='tcCreator'/>
        </div>
      </div>
      Image:
        <div className='seo_card_preview_img'>
          <Scrivito.React.Image src={ obj } attribute='tcImage'/>
        </div>
      Title: <Scrivito.React.Content content={ obj } attribute='tcTitle' tag='h5'/>
      Description: <Scrivito.React.Content content={ obj } attribute='tcDescription' tag='div'/>
      <br/>
      <h3>Facebook</h3>
        <div>
          <div className="seo_card_preview_img">
            <Scrivito.React.Image src={ obj } attribute="ogImage"/>
          </div>
          <div>
            Title: <Scrivito.React.Content content={ obj } attribute="ogTitle"/>
            Description: <Scrivito.React.Content content={ obj } attribute="ogDescription"/>
          </div>
        </div>
      </div>
    <div className='col-md-6 pull-right'>
      <h2>Card Preview</h2>
      <div className='seo_card_preview'>
        <h3>Twitter</h3>
          <div className='row'>
            <div className='col-md-12'>
              Twitter handle for post: { LookupMetaData(obj, 'twitter:creator') }
            </div>
          </div>
          <div className='row card twitter_card'>
            <div className='col-md-3 seo_card_preview_img'>
               <img src={ LookupMetaData(obj, 'twitter:image') }/>
            </div>
            <div className='col-md-9'>
              <h5>{ LookupMetaData(obj, 'twitter:title') }</h5>
              <div>
                { LookupMetaData(obj, 'twitter:description') }
              </div>
            </div>
          </div>
        </div>
      <div className='seo_card_preview'>
        <h3>Facebook</h3>
          <div className='row card fb_card'>
            <div className='col-md-3 seo_card_preview_img'>
              <img src={ LookupMetaData(obj, 'og:image') }/>
            </div>
            <div className='col-md-9'>
              <h5>{ LookupMetaData(obj, 'og:title') }</h5>
              <div>
                { LookupMetaData(obj, 'og:description') }
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
);

function LookupMetaData(obj, value) {
  let data = '';

  if (value.includes('og:')) {
    data = getMetaData(obj).find(x => x.property === value);
    if (!data) {
      return '';
    }
  } if (value.includes('twitter')) {
    data = getMetaData(obj).find(x => x.name === value);
    if (!data) {
      return '';
    }
  }
  return data.content;
}
