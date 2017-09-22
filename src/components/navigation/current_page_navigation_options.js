function currentPageNavigationOptions() {
  if (Scrivito.currentPage()) {
    if (Scrivito.currentPage().navigationOptions) {
      return Scrivito.currentPage().navigationOptions();
    }
  }

  return {
    navigationStyle: 'solidWhite',
    backgroundImage: null,
    heigthClassName: null,
    useGradient: false,
  };
}

export default currentPageNavigationOptions;
