import getMetaData from 'utils/get_meta_data';

Scrivito.registerComponent('SocialCardsTab', ({ obj }) =>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-6'>
        <div className='seo_card_input'>
          <h2>Optional Inputs</h2>
          <TwitterInput obj={ obj } />
          <br/>
          <FacebookInput obj={ obj } />
        </div>
      </div>
      <div className='col-md-6'>
        <div className='seo_card_preview'>
          <h2>Card Preview</h2>
          <TwitterPreview obj={ obj } />
          <FacebookPreview obj={ obj } />
        </div>
      </div>
    </div>
  </div>
);

const TwitterInput = Scrivito.React.connect(({ obj }) =>
  <div>
    <h3>Twitter</h3>
    <div className='label'>
      Creator
    </div>
    <div className='input'>
      <Scrivito.React.Content content={ obj } attribute='tcCreator'/>
    </div>
    <div className='hint'>
      Twitter handle of the tweet creator.
    </div>
    <div className='label'>
      Image
    </div>
    <div className='seo_card_img'>
      <Scrivito.React.Image src={ obj } attribute='tcImage'/>
    </div>
    <div className='hint'/>
    <div className='label'>
      Title
    </div>
    <div className='input'>
      <Scrivito.React.Content content={ obj } attribute='tcTitle'/>
    </div>
    <div className='hint'>
      Title for tweet.
    </div>
    <div className='label'>
      Description
    </div>
    <div className='input'>
      <Scrivito.React.Content content={ obj } attribute='tcDescription'/>
    </div>
    <div className='hint'>
      Tweet (limit to 144 characters)
    </div>
  </div>
);

const FacebookInput = Scrivito.React.connect(({ obj }) =>
  <div>
    <h3>Facebook</h3>
    <div className='label'>
      Image
    </div>
    <div className='seo_card_img'>
      <Scrivito.React.Image src={ obj } attribute='ogImage'/>
    </div>
    <div className='hint'/>
    <div className='label'>
      Title
    </div>
    <div className='input'>
      <Scrivito.React.Content content={ obj } attribute='ogTitle'/>
    </div>
    <div className='hint'>
      Add a catchy title for the post
    </div>
    <div className='label'>
      Description
    </div>
    <div className='input'>
      <Scrivito.React.Content content={ obj } attribute='ogDescription'/>
    </div>
    <div className='hint'>
      What is this post about and why would someone want to read it.
    </div>
  </div>
);

const TwitterPreview = Scrivito.React.connect(({ obj }) =>
  <div>
    <div className='row'>
      <div className='col-md-12'>
        <h3>Twitter</h3>
        <div className='creator'>
          Tweet from: { lookupMetaData(obj, 'twitter:creator') }
        </div>
      </div>
    </div>
    <div className='row card twitter_card'>
      <div className='col-md-3 seo_card_preview_img'>
         <img src={ (lookupMetaData(obj, 'twitter:image')) }/>
      </div>
      <div className='col-md-9'>
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
    <h3>Facebook</h3>
    <div className='row card fb_card'>
      <div className='col-md-3 seo_card_preview_img'>
        <img src={ lookupMetaData(obj, 'og:image') }/>
      </div>
      <div className='col-md-9'>
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
