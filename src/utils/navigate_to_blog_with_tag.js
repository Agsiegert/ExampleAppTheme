function navigateToBlogWithTag(tag) {
  const params = Scrivito.currentPageParams();
  if (tag) {
    params.tag = tag;
  } else {
    delete params.tag;
  }

  Scrivito.navigateTo(
    () => Scrivito.Obj.getByPermalink('blog'),
    { params }
  );
}

export default navigateToBlogWithTag;
