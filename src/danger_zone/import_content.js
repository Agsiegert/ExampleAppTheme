/* eslint no-console: 0 */
import Blog from 'objs/blog';
import Homepage from 'objs/homepage';
import Image from 'objs/image';
import Page from 'objs/page';
import logoSvgData from './logo_svg_data';

export default () => {
  // PRODUCT
  const product = Page.create({
    _path: '/product',
    title: 'Product',
  });

  // ABOUT
  const ourWork = Page.create({
    _path: '/about/our_work',
    title: 'Our Work',
  });
  const ourClients = Page.create({
    _path: '/about/our_clients',
    title: 'Our Clients',
  });
  const about = Page.create({
    _path: '/about',
    _permalink: 'about',
    title: 'About',
    childOrder: [ourWork, ourClients],
  });

  // PRICING
  const pricing = Page.create({
    _path: '/pricing',
    title: 'Pricing',
  });

  // BLOG
  const blog = Blog.create({
    _path: '/blog',
    _permalink: 'blog',
    title: 'Blog',
  });

  // WIDGETS AND PAGES
  const homeV1 = Page.create({
    _path: '/widgets_and_pages/home_v1',
    title: 'Homepage variant 1',
  });
  const homeV2 = Page.create({
    _path: '/widgets_and_pages/home_v2',
    title: 'Homepage variant 2',
  });
  const widgetsAndPages = Page.create({
    _path: '/widgets_and_pages',
    title: 'Widgets & Pages',
    childOrder: [homeV1, homeV2],
  });

  // navigation logo
  const svgBlob = new Blob([logoSvgData], { type: 'image/svg+xml' });
  const binary = Scrivito.Binary.upload(svgBlob, { filename: 'scrivito_logo_sw.svg' });
  const logo = Image.create({ title: 'Scrivito Logo SW' });
  binary.into(logo).then(newBinary => {
    logo.update({ blob: newBinary });
    console.log('Import done');
  });

  // Obj.root
  Homepage.create({
    _path: '/',
    title: 'Welcome to the Scrivito Example App JS!',
    childOrder: [product, about, pricing, blog, widgetsAndPages],
    logo: logo,
  });
};
