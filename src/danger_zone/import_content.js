export default () => {
  window.ExampleApp.Homepage.create({
    _path: '/',
    title: 'Welcome to the Scrivito Example App JS!',
  });

  // HOME VARIANTS
  window.ExampleApp.Page.create({
    _path: '/home_2',
    title: 'Homepage variant 2',
  });
  window.ExampleApp.Page.create({
    _path: '/home_2/home_3',
    title: 'Homepage variant 3',
  });

  // PRODUCT
  window.ExampleApp.Page.create({
    _path: '/product',
    title: 'Product',
  });

  // ABOUT
  window.ExampleApp.Page.create({
    _path: '/about',
    _permalink: 'about',
    title: 'About',
  });
  window.ExampleApp.Page.create({
    _path: '/about/our_work',
    title: 'Our Work',
  });
  window.ExampleApp.Page.create({
    _path: '/about/our_clients',
    title: 'Our Clients',
  });

  // BLOG
  window.ExampleApp.Blog.create({
    _path: '/blog',
    _permalink: 'blog',
    title: 'Blog',
  });

  // ALL WIDGETS
  window.ExampleApp.Blog.create({
    _path: '/all_widgets',
    title: 'All Widgets',
  });
};
