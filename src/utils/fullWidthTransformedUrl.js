import fullScreenWidthPixels from 'utils/fullScreenWidthPixels';

function fullWidthTransformedUrl(obj) {
  if (!obj) { return ''; }

  const binary = obj.get('blob');
  // The binary service never scales up, so we transform all images, regardless of their width.
  const transformedBinary = binary.transform({ width: fullScreenWidthPixels() });

  return transformedBinary.url();
}

export default fullWidthTransformedUrl;
