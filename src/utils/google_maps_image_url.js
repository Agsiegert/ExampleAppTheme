const separator = '|';

// Some styling sources:
// * https://mapstyle.withgoogle.com
// * https://snazzymaps.com
const googleStyles = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#1d2c4d' }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#8ec3b9' }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#1a3646' }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#4b6878' }],
  }, {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#64779e' }],
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#4b6878' }],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#334e87' }],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{ color: '#023e58' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#283d6a' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6f9ba5' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#1d2c4d' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#023e58' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#3C7680' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#304a7d' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#98a5be' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#1d2c4d' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#2c6675' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#255763' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#b0d5ce' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#023e58' }],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#98a5be' }],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#1d2c4d' }],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry.fill',
    stylers: [{ color: '#283d6a' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{ color: '#3a4762' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#0e1626' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#4e6d70' }],
  },
];

function isColor(value) {
  return /^#[0-9a-f]{6}$/i.test(value.toString());
}

function toColor(value) {
  return `0x${value.slice(1)}`;
}

function computeTag(featureType, elementType) {
  if (!featureType && !elementType) { return 'feature:all'; }

  const target = [];

  if (featureType) { target.push(`feature:${featureType}`); }
  if (elementType) { target.push(`element:${elementType}`); }

  return target.join(separator);
}

function computeStyler(stylers) {
  const styles = [];

  stylers.forEach(styler => {
    const key = Object.keys(styler)[0]; // there is only one per element
    const value = styler[key];
    const normalizedValue = isColor(value) ? toColor(value) : value;

    styles.push(`${key}:${normalizedValue}`);
  });

  return styles.join(separator);
}

function computeStyle(item) {
  const target = computeTag(item.featureType, item.elementType);
  const styler = computeStyler(item.stylers);

  return target + separator + styler;
}

function stylingParamsArray() {
  return googleStyles.map(i => computeStyle(i)).map(i => ['style', i]);
}

function googleMapsImageUrl(params) {
  const paramsArray = Object.entries(params).concat(stylingParamsArray());
  const flattenParams = paramsArray.map(([key, value]) => `${key}=${value}`).join('&');
  const uri = `https://maps.google.com/maps/api/staticmap?${flattenParams}`;

  return encodeURI(uri);
}

export default googleMapsImageUrl;
