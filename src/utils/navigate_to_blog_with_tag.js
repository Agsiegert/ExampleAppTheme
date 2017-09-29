function navigateToBlogWithTag(tag) {
  const params = Scrivito.currentPageParams();
  delete params.tag;
  if (tag) {
    params.tag = tag;
  }

  Scrivito.navigateTo(
    () => Scrivito.Obj.getByPermalink('blog'),
    { params }
  );
}

export default navigateToBlogWithTag;
