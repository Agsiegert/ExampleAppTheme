function textExtractFromHtml(html) {
  const element = document.createElement('div');
  element.innerHTML = html;
  return element.innerText || element.textContent;
}

export default textExtractFromHtml;
