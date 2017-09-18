function textExtractFromObj(obj) {
  if (obj.textExtract) { return obj.textExtract(); }

  return '';
}

export default textExtractFromObj;
