function currentPageNavigationOptions() {
  if (Scrivito.currentPage()) {
    switch (Scrivito.currentPage().objClass()) {
      case 'Homepage':
        return pageNavigationOptions(Scrivito.currentPage());
      case 'Page':
        return pageNavigationOptions(Scrivito.currentPage());
      case 'Blog':
        return blogNavigationOptions(Scrivito.currentPage());
      case 'BlogPost':
        return blogPostNavigationOptions(Scrivito.currentPage());
      case 'Event':
        return eventNavigationOptions(Scrivito.currentPage());
      case 'Job':
        return jobNavigationOptions(Scrivito.currentPage());
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

function blogNavigationOptions(obj) {
  return {
    navigationStyle: 'transparentDark',
    backgroundImage: obj.get('navigationBackgroundImage') || null,
    heigthClassName: 'min-height',
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
    heigthClassName: 'min-height',
  };
}

function eventNavigationOptions(obj) {
  if (obj.get('image')) {
    return {
      navigationStyle: 'transparentDark',
      backgroundImage: obj.get('image'),
      heigthClassName: 'min-height',
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
      heigthClassName: 'min-height',
    };
  }

  return {
    navigationStyle: 'solidWhite',
    backgroundImage: null,
    heigthClassName: null,
  };
}

export default currentPageNavigationOptions;
