import TagList from 'Components/tag_list';

function SearchResultsTagList({ tags, params }) {
  return (
    <TagList
      tags={ tags }
      showTags={ tags.length }
      setTag={
        newTag => {
          const newParams = { q: params.q };
          if (newTag) { newParams.tag = newTag; }

          Scrivito.navigateTo(() => Scrivito.currentPage(), newParams);
        }
      }
      currentTag={ params.tag }
    />
  );
}

export default SearchResultsTagList;
