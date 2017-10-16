function twoDigitNumber(number) {
  if (!number) { return null; }
  return (`0${number}`).slice(-2);
}

export default twoDigitNumber;
