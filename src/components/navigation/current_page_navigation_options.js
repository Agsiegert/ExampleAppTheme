function currentPageNavigationOptions() {
  if (Scrivito.currentPage()) {
    switch (Scrivito.currentPage().objClass()) {
      case 'Blog': return blogNavigationOptions(Scrivito.currentPage());
      case 'BlogPost': return blogPostNavigationOptions(Scrivito.currentPage());
      case 'Event': return eventNavigationOptions(Scrivito.currentPage());
      case 'Homepage': return pageNavigationOptions(Scrivito.currentPage());
      case 'Job': return jobNavigationOptions(Scrivito.currentPage());
      case 'LandingPage': return landingPageNavigationOptions(Scrivito.currentPage());
      case 'Page': return pageNavigationOptions(Scrivito.currentPage());
      case 'SearchResults': return searchResultsNavigationOptions(Scrivito.currentPage());
    }
  }

  return {
    navigationStyle: 'solidWhite',
    backgroundImage: null,
    heigthClassName: null,
    isLandingPage: false,
    useGradient: false,
  };
}

function blogNavigationOptions(obj) {
  return {
    navigationStyle: 'transparentDark',
    backgroundImage: obj.get('navigationBackgroundImage') || null,
    heigthClassName: 'medium-height',
  };
}

function blogPostNavigationOptions(obj) {
  let backgroundImage = obj.get('titleImage');
  if (!backgroundImage) {
    const blog = Scrivito.Obj.getByPermalink('blog');
    if (blog) {
      backgroundImage = blog.get('navigationBackgroundImage');
    }
  }

  return {
    navigationStyle: 'transparentDark',
    backgroundImage: backgroundImage || null,
    heigthClassName: 'medium-height',
  };
}

function eventNavigationOptions(obj) {
  if (obj.get('image')) {
    return {
      navigationStyle: 'transparentDark',
      backgroundImage: obj.get('image'),
      heigthClassName: 'medium-height',
    };
  }

  return {
    navigationStyle: 'solidWhite',
    backgroundImage: null,
    heigthClassName: null,
  };
}

function jobNavigationOptions(obj) {
  if (obj.get('image')) {
    return {
      navigationStyle: 'transparentDark',
      backgroundImage: obj.get('image'),
      heigthClassName: 'medium-height',
    };
  }

  return {
    navigationStyle: 'solidWhite',
    backgroundImage: null,
    heigthClassName: null,
  };
}

function landingPageNavigationOptions(obj) {
  const navigationOptions = pageNavigationOptions(obj);

  return { ...navigationOptions, isLandingPage: true };
}

function pageNavigationOptions(obj) {
  const navStyle = obj.get('navigationStyle') || 'solidWhite';

  let navigationStyle = navStyle;
  if (navStyle.startsWith('transparentDark')) { navigationStyle = 'transparentDark'; }

  const heigthClassName = navStyle.split(' ')[1] || null;

  const backgroundImage = obj.get('navigationBackgroundImage') || null;

  const useGradient = navStyle.includes('gradient');

  return {
    navigationStyle,
    backgroundImage,
    heigthClassName,
    useGradient,
  };
}

function searchResultsNavigationOptions(obj) {
  const backgroundImage = obj.get('navigationBackgroundImage');
  if (backgroundImage) {
    return {
      navigationStyle: 'transparentDark',
      backgroundImage: backgroundImage,
      heigthClassName: 'medium-height',
    };
  }

  return {
    navigationStyle: 'solidWhite',
    backgroundImage: null,
    heigthClassName: 'medium-height',
  };
}

export default currentPageNavigationOptions;
