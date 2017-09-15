import getMetaData from 'utils/get_meta_data';

Scrivito.registerComponent('SocialCardsTab', ({ obj }) =>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-xs-6'>
        <div className='seo_card_input'>
          <TwitterInput obj={ obj } />
          <br/>
        </div>
      </div>
      <div className='col-xs-6'>
        <div className='seo_card_preview'>
          <TwitterPreview obj={ obj } />
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='col-xs-6'>
        <div className='seo_card_input'>
          <FacebookInput obj={ obj } />
        </div>
      </div>
      <div className='col-xs-6'>
        <div className='seo_card_preview'>
          <FacebookPreview obj={ obj } />
        </div>
      </div>
    </div>
  </div>
);

const TwitterInput = Scrivito.React.connect(({ obj }) =>
  <div>
    <h3>Optional Inputs</h3>
    <h4>Twitter</h4>
    <div className='label'>
      Creator
    </div>
      <Scrivito.React.Content content={ obj } attribute='tcCreator' className='input'/>
    <div className='hint'>
      Twitter handle of the tweet creator.
    </div>
    <div className='label'>
      Image
    </div>
      <Scrivito.React.Image src={ obj } attribute='tcImage'className='seo_card_img'/>
    <div className='hint'/>
    <div className='label'>
      Title
    </div>
      <Scrivito.React.Content content={ obj } attribute='tcTitle' className='input'/>
    <div className='hint'>
      Title for tweet.
    </div>
    <div className='label'>
      Description
    </div>
      <Scrivito.React.Content content={ obj } attribute='tcDescription' className='input'/>
    <div className='hint'>
      Tweet (limit to 140 characters)
    </div>
  </div>
);

const FacebookInput = Scrivito.React.connect(({ obj }) =>
  <div>
    <h4>Facebook</h4>
    <div className='label'>
      Image
    </div>
      <Scrivito.React.Image src={ obj } attribute='ogImage' className='seo_card_img'/>
    <div className='hint'/>
    <div className='label'>
      Title
    </div>
      <Scrivito.React.Content content={ obj } attribute='ogTitle' className='input'/>
    <div className='hint'>
      Add a catchy title for the post
    </div>
    <div className='label'>
      Description
    </div>
      <Scrivito.React.Content content={ obj } attribute='ogDescription' className='input'/>
    <div className='hint'>
      What is this post about and why would someone want to read it.
    </div>
  </div>
);

const TwitterPreview = Scrivito.React.connect(({ obj }) =>
  <div>
    <div className='row'>
      <div className='col-xs-12'>
        <h3>Card Previews</h3>
        <h4>Twitter (Summary Card with Large Image) </h4>
        <div className='creator'>
          Tweet from: { lookupMetaData(obj, 'twitter:creator') }
        </div>
      </div>
    </div>
    <div className='row card twitter_card'>
      <div className='seo_card_preview_img'>
         <img src={ (lookupMetaData(obj, 'twitter:image')) }/>
      </div>
      <div className='card_text'>
        <h5>{ lookupMetaData(obj, 'twitter:title') }</h5>
        <div>
          { lookupMetaData(obj, 'twitter:description') }
        </div>
      </div>
    </div>
  </div>
);

const FacebookPreview = Scrivito.React.connect(({ obj }) =>
  <div>
    <h4>Facebook (Article style)</h4>
    <div className='row card fb_card'>
      <div className='seo_card_preview_img'>
        <img src={ lookupMetaData(obj, 'og:image') }/>
      </div>
      <div className='card_text'>
        <h5>{ lookupMetaData(obj, 'og:title') }</h5>
        <div>
          { lookupMetaData(obj, 'og:description') }
        </div>
      </div>
    </div>
  </div>
);

function lookupMetaData(obj, value) {
  const metaData = getMetaData(obj);

  if (value.includes('og:')) {
    const ogData = metaData.find(x => x.property === value);
    if (ogData) { return ogData.content; }
  }

  if (value.includes('twitter:')) {
    const twitterData = metaData.find(x => x.name === value);
    if (twitterData) { return twitterData.content; }
  }

  return '';
}
