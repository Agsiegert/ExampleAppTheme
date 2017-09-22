function currentPageNavigationOptions() {
  if (Scrivito.currentPage()) {
    switch (Scrivito.currentPage().objClass()) {
      case 'Homepage':
        return pageNavigationOptions(Scrivito.currentPage());
      case 'Page':
        return pageNavigationOptions(Scrivito.currentPage());
    }

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

function pageNavigationOptions(obj) {
  const navStyle = obj.get('navigationStyle') || 'solidWhite';

  let navigationStyle = navStyle;
  if (navStyle.startsWith('transparentDark')) { navigationStyle = 'transparentDark'; }

  const heigthClassName = navStyle.split(' ')[1] || 'full-height';

  const backgroundImage = obj.get('navigationBackgroundImage') || null;

  const useGradient = navStyle.includes('gradient');

  return {
    navigationStyle,
    backgroundImage,
    heigthClassName,
    useGradient,
  };
}

export default currentPageNavigationOptions;
