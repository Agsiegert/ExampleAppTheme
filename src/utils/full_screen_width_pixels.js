import devicePixelRatio from 'utils/device_pixel_ratio';

function fullScreenWidthPixels() {
  const screenWidth = window.screen.width;

  return screenWidth * devicePixelRatio();
}

export default fullScreenWidthPixels;
