/* eslint no-console: 0 */

const textExtractRegistry = {};

function registerTextExtract(className, attributes) {
  if (textExtractRegistry[className]) {
    console.warn(`registerTextExtract: className '${className}' is already registered!`);
  }

  textExtractRegistry[className] = attributes;
}

function lookupTextExtract(className) {
  return textExtractRegistry[className];
}

export {
  registerTextExtract,
  lookupTextExtract,
};
