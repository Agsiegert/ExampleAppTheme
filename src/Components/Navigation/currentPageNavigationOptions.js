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
  const backgroundImage = obj.get('navigationBackgroundImage');
  return imageWithMediumHeightOrMinHeight(backgroundImage);
}

function blogPostNavigationOptions(obj) {
  let backgroundImage = obj.get('titleImage');
  if (!backgroundImage) {
    const blog = Scrivito.Obj.getByPermalink('blog');
    if (blog) {
      backgroundImage = blog.get('navigationBackgroundImage');
    }
  }

  return imageWithMediumHeightOrMinHeight(backgroundImage);
}

function eventNavigationOptions(obj) {
  const backgroundImage = obj.get('image');
  return imageWithMediumHeightOrNothing(backgroundImage);
}

function jobNavigationOptions(obj) {
  const backgroundImage = obj.get('image');
  return imageWithMediumHeightOrNothing(backgroundImage);
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
  return imageWithMediumHeightOrMinHeight(backgroundImage);
}

function imageWithMediumHeightOrNothing(image) {
  if (image) {
    return {
      navigationStyle: 'transparentDark',
      backgroundImage: image,
      heigthClassName: 'medium-height',
    };
  }

  return {
    navigationStyle: 'solidWhite',
    backgroundImage: null,
    heigthClassName: null,
  };
}

function imageWithMediumHeightOrMinHeight(image) {
  if (image) {
    return {
      navigationStyle: 'transparentDark',
      backgroundImage: image,
      heigthClassName: 'medium-height',
    };
  }

  return {
    navigationStyle: 'solidWhite',
    backgroundImage: null,
    heigthClassName: 'min-height',
  };
}

export default currentPageNavigationOptions;
