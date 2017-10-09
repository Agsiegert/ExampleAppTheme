import Highlighter from 'react-highlight-words';
import textExtractFromObj from 'utils/text_extract_from_obj';
import truncate from 'lodash.truncate';

const PreviewImage = Scrivito.connect(({ item }) => {
  const image = item.get('navigationBackgroundImage') || item.get('titleImage');
  if (!image) { return null; }

  return (
    <Scrivito.LinkTag to={ item } className="result-image">
      <Scrivito.ImageTag content={ image } />
    </Scrivito.LinkTag>
  );
});

function SearchResultItem({ resultItem, q }) {
  const searchWords = q.split(/\s+/);
  const textExtract = textExtractFromObj(resultItem);
  const textToHighlight = truncate(textExtract, { length: 200, separator: /,? +/ });

  return (
    <div className="result-item">
      <PreviewImage item={ resultItem } />
      <div className="result-content">
        <Scrivito.LinkTag to={ resultItem }>
          <h3 className="h3">{ resultItem.get('title') }</h3>
        </Scrivito.LinkTag>
        <Highlighter
          highlightTag="mark"
          searchWords={ searchWords }
          textToHighlight={ textToHighlight }
        />
      </div>
      <div className="result-options">
        <Scrivito.LinkTag to={ resultItem } className="btn btn-clear">
          Read more<i className="fa fa-angle-right fa-4" aria-hidden="true" />
        </Scrivito.LinkTag>
      </div>
    </div>
  );
}

export default Scrivito.connect(SearchResultItem);
