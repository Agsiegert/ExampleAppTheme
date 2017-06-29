/* eslint no-console: 0 */
import logoSvgData from './logo_svg_data';

export default () => {
  // HOME VARIANTS
  const home3 = window.ExampleApp.Page.create({
    _path: '/home_2/home_3',
    title: 'Homepage variant 3',
  });
  const home = window.ExampleApp.Page.create({
    _path: '/home_2',
    title: 'Homepage variant 2',
    navigationTitle: 'Home',
    childOrder: [home3],
  });

  // PRODUCT
  const product = window.ExampleApp.Page.create({
    _path: '/product',
    title: 'Product',
  });

  // ABOUT
  const ourWork = window.ExampleApp.Page.create({
    _path: '/about/our_work',
    title: 'Our Work',
  });
  const ourClients = window.ExampleApp.Page.create({
    _path: '/about/our_clients',
    title: 'Our Clients',
  });
  const about = window.ExampleApp.Page.create({
    _path: '/about',
    _permalink: 'about',
    title: 'About',
    childOrder: [ourWork, ourClients],
  });

  // BLOG
  const blog = window.ExampleApp.Blog.create({
    _path: '/blog',
    _permalink: 'blog',
    title: 'Blog',
  });

  // ALL WIDGETS
  const allWidgets = window.ExampleApp.Page.create({
    _path: '/all_widgets',
    title: 'All Widgets',
  });

  // navigation logo
  const svgBlob = new Blob([logoSvgData], { type: 'image/svg+xml' });
  const binary = window.Scrivito.Binary.upload(svgBlob, { filename: 'scrivito_logo_sw.svg' });
  const logo = window.ExampleApp.Image.create({
    title: 'Scrivito Logo SW',
  });
  binary.into(logo).then(newBinary => {
    logo.update({ blob: newBinary });
    console.log('Import done');
  });

  // Obj.root
  window.ExampleApp.Homepage.create({
    _path: '/',
    title: 'Welcome to the Scrivito Example App JS!',
    childOrder: [home, product, about, blog, allWidgets],
    logo: logo,
  });
};
