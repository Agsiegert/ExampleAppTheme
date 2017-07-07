/* eslint no-console: 0 */
/* global fetch */
import loremIpsum from 'lorem-ipsum';

import Blog from 'objs/blog';
import Homepage from 'objs/homepage';
import Image from 'objs/image';
import Page from 'objs/page';

import ColumnWidget from 'widgets/column_widget';
import FontAwesomeIconWidget from 'widgets/font_awesome_icon_widget';
import HeadlineWidget from 'widgets/headline_widget';
import ImageWidget from 'widgets/image_widget';
import PageListWidget from 'widgets/page_list_widget';
import TextWidget from 'widgets/text_widget';

import scrivitoLogoBWData from './binary_data/scrivito_logo_bw';
import scrivitoLogoGreyData from './binary_data/scrivito_logo_grey';
import scrivitoLogoWhiteData from './binary_data/scrivito_logo_white';
import unsplashOfficeWindowData from './binary_data/unsplash_office_window';

function uploadImage({ url, filename }, title) {
  const image = Image.create({ title });

  fetch(url)
    .then(res => res.blob())
    .then(blob => Scrivito.Binary.upload(blob, { filename }))
    .then(binary => binary.into(image))
    .then(newBinary => image.update({ blob: newBinary }))
    .then(() => { console.log(`Upload of ${title} done`); });

  return image;
}

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

  // Path less Objs
  const jobs = Page.create({
    _permalink: 'jobs',
    title: 'Jobs',
  });
  const contact = Page.create({
    _permalink: 'contact',
    title: 'Contact',
  });
  const imprint = Page.create({
    title: 'Imprint',
    _permalink: 'imprint',
    body: [
      new HeadlineWidget({
        level: 'h1',
        headline: 'Lorem ipsum dolor sit amet',
      }),
      new HeadlineWidget({
        level: 'h2',
        headline: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
      }),
      new TextWidget({
        text: loremIpsum({
          units: 'paragraphs',
          format: 'html',
          count: 9,
          paragraphLowerBound: 1,
          paragraphUpperBound: 10,
        }),
      }),
    ],
  });
  const login = Page.create({
    title: 'Login',
  });
  const events = Page.create({
    _permalink: 'events',
    title: 'Events & Conferences',
  });
  const landingPage = Page.create({
    _permalink: 'landing_page',
    title: 'Landing Page',
  });

  // Logos
  const scrivitoLogoGrey = uploadImage(scrivitoLogoGreyData, 'Scrivito Logo (Grey)');
  uploadImage(scrivitoLogoBWData, 'Scrivito Logo (Black & White)');
  uploadImage(scrivitoLogoWhiteData, 'Scrivito Logo (White)');

  // Images
  uploadImage(unsplashOfficeWindowData, 'Office Window');

  // social buttons
  const twitterIcon = new FontAwesomeIconWidget({
    icon: 'fa-twitter',
    link: new Scrivito.Link({
      title: 'Twitter',
      target: '_blank',
      url: 'https://twitter.com/scrivito',
    }),
  });
  const facebookIcon = new FontAwesomeIconWidget({
    icon: 'fa-facebook-f',
    link: new Scrivito.Link({
      title: 'Facebook',
      target: '_blank',
      url: 'https://www.facebook.com/Scrivito/',
    }),
  });
  const xingIcon = new FontAwesomeIconWidget({
    icon: 'fa-xing',
    link: new Scrivito.Link({
      title: 'Xing',
      target: '_blank',
      url: 'https://www.xing.com/companies/infoparkag',
    }),
  });
  const linkedinIcon = new FontAwesomeIconWidget({
    icon: 'fa-linkedin',
    link: new Scrivito.Link({
      title: 'Linkedin',
      target: '_blank',
      url: 'https://www.linkedin.com/company/infopark',
    }),
  });

  // Obj.root
  const root = Homepage.create({
    _path: '/',
    title: 'Welcome to the Scrivito Example App JS!',
    childOrder: [product, about, pricing, blog, widgetsAndPages],
    logo: scrivitoLogoGrey,
    socialButtons: [twitterIcon, facebookIcon, xingIcon, linkedinIcon],
  });

  // Footer
  const logoWidget = new ImageWidget({
    image: scrivitoLogoGrey,
  });
  const address = new TextWidget({
    text: `<p class="address">
      Infopark<br>
      Kitzingstraße, 15<br>
      12277 Berlin<br>
    </p>
    <p>
      Phone: 800 123 3456<br>
      Fax: 8888888888
    </p>
    <p>
        Mail: <a href="mainlto:info@scrivito.com">info@scrivito.com</a>
    </p>`,
  });
  const footerLinks1 = new PageListWidget({
    headline: 'Homepages',
    pages: [root, homeV1, homeV2, landingPage],
  });
  const footerLinks2 = new PageListWidget({
    headline: 'About',
    pages: [jobs, contact, imprint, events, login],
  });
  const footerRow = new ColumnWidget({
    nrOfColumns: 3,
    column1: [logoWidget, address],
    column2: [footerLinks1],
    column3: [footerLinks2],
  });

  root.update({ footer: [footerRow] });
};
