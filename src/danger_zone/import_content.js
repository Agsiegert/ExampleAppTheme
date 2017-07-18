/* eslint no-console: 0 */
/* global fetch */
import loremIpsum from 'lorem-ipsum';

import Blog from 'objs/blog';
import Homepage from 'objs/homepage';
import Image from 'objs/image';
import Page from 'objs/page';

import ButtomWidget from 'widgets/buttom_widget';
import ColumnWidget from 'widgets/column_widget';
import FontAwesomeIconWidget from 'widgets/font_awesome_icon_widget';
import HeadlineWidget from 'widgets/headline_widget';
import ImageWidget from 'widgets/image_widget';
import PageListWidget from 'widgets/page_list_widget';
import SectionWidget from 'widgets/section_widget';
import TextWidget from 'widgets/text_widget';

import scrivitoLogoBWData from './binary_data/scrivito_logo_bw';
import scrivitoLogoDarkData from './binary_data/scrivito_logo_dark';
import scrivitoLogoWhiteData from './binary_data/scrivito_logo_white';
import unsplashDeskRulerData from './binary_data/unsplash_desk_ruler';
import unsplashHandcraftData from './binary_data/unsplash_handcraft';
import unsplashLaptopKeyboardData from './binary_data/unsplash_laptop_keyboard';
import unsplashOfficeWindowData from './binary_data/unsplash_office_window';

const UNSPLASH_TAGS = ['source: unsplash.com'];

function uploadImage({ url, filename }, title, tags = []) {
  const image = Image.create({ title, tags });

  fetch(url)
    .then(res => res.blob())
    .then(blob => Scrivito.Binary.upload(blob, { filename }))
    .then(binary => binary.into(image))
    .then(newBinary => image.update({ blob: newBinary }))
    .then(() => { console.log(`Upload of "${title}" done`); });

  return image;
}

export default () => {
  // PRODUCT
  const product = Page.create({
    _path: '/product',
    title: 'Product',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Product' }),
      ] }),
    ],
  });

  // ABOUT
  const ourWork = Page.create({
    _path: '/about/our_work',
    title: 'Our Work',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Our Work' }),
      ] }),
    ],
  });
  const ourClients = Page.create({
    _path: '/about/our_clients',
    title: 'Our Clients',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Our Clients' }),
      ] }),
    ],
  });
  const about = Page.create({
    _path: '/about',
    _permalink: 'about',
    title: 'About',
    childOrder: [ourWork, ourClients],
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'About' }),
      ] }),
    ],
  });

  // PRICING
  const pricing = Page.create({
    _path: '/pricing',
    title: 'Pricing',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Pricing' }),
      ] }),
    ],
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
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Homepage variant 1' }),
      ] }),
    ],
  });
  const homeV2 = Page.create({
    _path: '/widgets_and_pages/home_v2',
    title: 'Homepage variant 2',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Homepage variant 2' }),
      ] }),
    ],
  });
  const widgetsAndPages = Page.create({
    _path: '/widgets_and_pages',
    title: 'Widgets & Pages',
    childOrder: [homeV1, homeV2],
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Widgets & Pages' }),
      ] }),
    ],
  });

  // Path less Objs
  const jobs = Page.create({
    _permalink: 'jobs',
    title: 'Jobs',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Jobs' }),
      ] }),
    ],
  });
  const contact = Page.create({
    _permalink: 'contact',
    title: 'Contact',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Contact' }),
      ] }),
    ],
  });
  const imprint = Page.create({
    title: 'Imprint',
    _permalink: 'imprint',
    body: [
      new SectionWidget({
        content: [
          new HeadlineWidget({
            level: 'h1',
            style: 'h2',
            headline: 'Lorem ipsum dolor sit amet',
          }),
          new HeadlineWidget({
            level: 'h2',
            style: 'h4',
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
      }),
    ],
  });
  const login = Page.create({
    title: 'Login',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Login' }),
      ] }),
    ],
  });
  const events = Page.create({
    _permalink: 'events',
    title: 'Events & Conferences',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Events' }),
      ] }),
    ],
  });
  const landingPage = Page.create({
    _permalink: 'landing_page',
    title: 'Landing Page',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({ headline: 'Landing Page' }),
      ] }),
    ],
  });

  // Logos
  const scrivitoLogoDark = uploadImage(scrivitoLogoDarkData, 'Scrivito Logo (Dark)');
  uploadImage(scrivitoLogoBWData, 'Scrivito Logo (Black & White)');
  const scrivitoLogoWhite = uploadImage(scrivitoLogoWhiteData, 'Scrivito Logo (White)');

  // Images
  uploadImage(unsplashOfficeWindowData, 'Office Window', UNSPLASH_TAGS);
  const unsplashDeskRuler = uploadImage(unsplashDeskRulerData, 'Ruler on a desk', UNSPLASH_TAGS);
  const unsplashHandcraft = uploadImage(unsplashHandcraftData, 'Handcraft', UNSPLASH_TAGS);
  const unsplashLaptopKeyboard = uploadImage(
    unsplashLaptopKeyboardData, 'Laptop keyboard', UNSPLASH_TAGS);

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
    childOrder: [product, about, pricing, blog, widgetsAndPages],
    logoDark: scrivitoLogoDark,
    logoWhite: scrivitoLogoWhite,
    navigationBackgroundImage: unsplashHandcraft,
    navigationStyle: 'transparentDark',
    navigationSection: [
      new HeadlineWidget({ headline: 'Amazing hero widget' }),
      new TextWidget({ text: '<p>Lorem ad minim veniam, quis nostrud exercitation ullamco' +
        ' laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,' +
        ' consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore' +
        ' et dolore magna aliqua.</p>' }),
      new ButtomWidget({ text: 'Call to action' }),
    ],
    socialButtons: [twitterIcon, facebookIcon, xingIcon, linkedinIcon],
    title: 'Welcome to the Scrivito Example App JS!',
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({
          headline: 'Our top feature',
          level: 'h1',
          style: 'h2',
          showDividingLine: 'yes',
        }),
        new ColumnWidget({
          nrOfColumns: 2,
          column1: [new ImageWidget({ image: unsplashLaptopKeyboard })],
          column2: [
            new HeadlineWidget({
              level: 'h3',
              style: 'h2',
              headline: 'Content Management for Ruby on Rails Apps',
            }),
            new TextWidget({
              text: loremIpsum({
                units: 'paragraphs',
                format: 'html',
                count: 1,
                paragraphLowerBound: 3,
                paragraphUpperBound: 5,
              }),
            }),
            new ButtomWidget({
              text: 'Call to action',
            }),
          ],
        }),
        new ColumnWidget({
          nrOfColumns: 2,
          column1: [
            new HeadlineWidget({
              level: 'h3',
              style: 'h2',
              headline: 'Content Management for Ruby on Rails Apps',
            }),
            new TextWidget({
              text: loremIpsum({
                units: 'paragraphs',
                format: 'html',
                count: 1,
                paragraphLowerBound: 3,
                paragraphUpperBound: 5,
              }),
            }),
            new ButtomWidget({
              text: 'Call to action',
            }),
          ],
          column2: [new ImageWidget({ image: unsplashDeskRuler })],
        }),
      ] }),
    ],
  });

  // Footer
  const logoWidget = new ImageWidget({
    image: scrivitoLogoDark,
    cssClass: 'logo',
  });
  const address = new TextWidget({
    text: `<address>
      25, Lorem Lis Street, Orange <br>
      California, US<br>
      <br>
      <table>
        <tr><td>Phone: </td><td><a href="tel:+8001233567">800 123 3567</a></td></tr>
        <tr><td>Fax:   </td><td><a href="tel:+8004664422">800 466 4422</a></td></tr>
        <tr><td>Mail:  </td><td><a href="mailto:info@scrivito.com">info@scrivito.com</a></td></tr>
      </table>
    </address>
    `,
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
