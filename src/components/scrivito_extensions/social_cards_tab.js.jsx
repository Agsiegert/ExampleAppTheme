import getMetaData from 'utils/get_meta_data';

Scrivito.registerComponent('SocialCardsTab', ({ obj }) =>
  <div className=''>

    <div className='scrivito_detail_content'>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='seo_card_input'>
            <TwitterInput obj={ obj } />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='seo_card_preview'>
            <TwitterPreview obj={ obj } />
          </div>
        </div>
      </div>
    </div>

    <div className='scrivito_detail_content'>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='seo_card_input'>
            <FacebookInput obj={ obj } />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='seo_card_preview'>
            <FacebookPreview obj={ obj } />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TwitterInput = Scrivito.React.connect(({ obj }) =>
  <div>
    <div className='scrivito_detail_label'>
      <span className='headline'>Twitter</span>
    </div>
    <div className='scrivito_detail_label'><span>Creator</span></div>
      <Scrivito.React.Content content={ obj } attribute='tcCreator' className='input'/>
    <div className='scrivito_notice_body'>Twitter handle of the tweet creator.</div>
    <div className='scrivito_detail_label'><span>Image</span></div>
      <Scrivito.React.Image content={ obj } attribute='tcImage'className='seo_card_img'/>
    <div className='scrivito_notice_body'>Replace image if you like</div>
    <div className='scrivito_detail_label'><span>Title</span></div>
      <Scrivito.React.Content content={ obj } attribute='tcTitle' className='input'/>
    <div className='scrivito_notice_body'>Title for tweet.</div>
    <div className='scrivito_detail_label'><span>Description</span></div>
      <Scrivito.React.Content content={ obj } attribute='tcDescription' className='input'/>
    <div className='scrivito_notice_body'>Tweet (limit to 140 characters)</div>
  </div>
);

const FacebookInput = Scrivito.React.connect(({ obj }) =>
  <div>
    <div className='scrivito_detail_label'>
      <span className='headline'>Facebook</span>
    </div>
    <div className='scrivito_detail_label'><span>Image</span></div>
      <Scrivito.React.Image content={ obj } attribute='ogImage' className='seo_card_img'/>
    <div className='scrivito_notice_body'>Replace image if you like</div>
    <div className='scrivito_detail_label'><span>Title</span></div>
      <Scrivito.React.Content content={ obj } attribute='ogTitle' className='input'/>
    <div className='scrivito_notice_body'>Add a catchy title for the post</div>
    <div className='scrivito_detail_label'><span>Description</span></div>
      <Scrivito.React.Content content={ obj } attribute='ogDescription' className='input'/>
    <div className='scrivito_notice_body'>
      What is this post about and why would someone want to read it.
    </div>
  </div>
);

const TwitterPreview = Scrivito.React.connect(({ obj }) =>
  <div>
    <div className='scrivito_detail_label'>
      <span className='headline'>Twitter Preview</span>
      <span>Twitter (Summary Card with Large Image)</span>
    </div>
    <div className='creator'>
      Tweet from: { lookupMetaData(obj, 'twitter:creator') }
    </div>

    <div className='card twitter_card'>
      <div className='seo_card_preview_img'>
         <img src={ (lookupMetaData(obj, 'twitter:image')) }/>
      </div>
      <div className='card_text'>
        <h5>{ lookupMetaData(obj, 'twitter:title') }</h5>
        <p>
          { lookupMetaData(obj, 'twitter:description') }
        </p>
      </div>
    </div>
  </div>
);

const FacebookPreview = Scrivito.React.connect(({ obj }) =>
  <div>
    <div className='scrivito_detail_label'>
      <span className='headline'>Facebook Preview</span>
      <span>Facebook (Article style)</span>
    </div>
    <div className='card fb_card'>
      <div className='seo_card_preview_img'>
        <img src={ lookupMetaData(obj, 'og:image') }/>
      </div>
      <div className='card_text'>
        <h5>{ lookupMetaData(obj, 'og:title') }</h5>
        <p>
          { lookupMetaData(obj, 'og:description') }
        </p>
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
