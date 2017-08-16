function devicePixelRatio() {
  return window.devicePixelRatio || 1;
}

function fullScreenWidthPixels() {
  const screenWidth = window.screen.width;

  return screenWidth * devicePixelRatio();
}

function fullWidthTransformedUrl(obj) {
  const binary = obj.get('blob');
  // The binary service never scales up, so we transform all images, regardless of their width.
  const transformedBinary = binary.transform({ width: fullScreenWidthPixels() });

  return transformedBinary.url();
}

export default fullWidthTransformedUrl;
