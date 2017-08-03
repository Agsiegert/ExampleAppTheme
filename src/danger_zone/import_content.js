/* eslint no-console: 0 */
/* global fetch */
import loremIpsum from 'lorem-ipsum';

import homepage1ScreenshotData from './binary_data/homepage1_screenshot';
import homepage2ScreenshotData from './binary_data/homepage2_screenshot';
import scrivitoLogoBWData from './binary_data/scrivito_logo_bw';
import scrivitoLogoDarkData from './binary_data/scrivito_logo_dark';
import scrivitoLogoWhiteData from './binary_data/scrivito_logo_white';
import unsplashDeskRulerData from './binary_data/unsplash_desk_ruler';
import unsplashFemaleBehindWindowData from './binary_data/unsplash_female_behind_window';
import unsplashFemalePortrait1Data from './binary_data/unsplash_female_portrait_1';
import unsplashFemalePortrait2Data from './binary_data/unsplash_female_portrait_2';
import unsplashHandcraftData from './binary_data/unsplash_handcraft';
import unsplashLadyInCoffeeShopData from './binary_data/unsplash_lady_in_coffee_shop';
import unsplashLaptopKeyboardData from './binary_data/unsplash_laptop_keyboard';
import unsplashMalePortrait1Data from './binary_data/unsplash_male_portrait_1';
import unsplashMalePortrait2Data from './binary_data/unsplash_male_portrait_2';
import unsplashMaleWithSunglassesData from './binary_data/unsplash_male_with_sunglasses';
import unsplashOfficeWindowData from './binary_data/unsplash_office_window';
import unsplashOfficeWithGlassData from './binary_data/unsplash_office_with_glass';
import unsplashOutdoorMeetingData from './binary_data/unsplash_outdoor_meeting';
import unsplashPlantData from './binary_data/unsplash_plant';
import unsplashScreenWithClockData from './binary_data/unsplash_screen_with_clock';
import unsplashWhiteMeetingRoomData from './binary_data/unsplash_white_meeting_room';

const Author = Scrivito.getClass('Author');
const Blog = Scrivito.getClass('Blog');
const BlogPost = Scrivito.getClass('BlogPost');
const Homepage = Scrivito.getClass('Homepage');
const Image = Scrivito.getClass('Image');
const Page = Scrivito.getClass('Page');

const BlogOverviewWidget = Scrivito.getClass('BlogOverviewWidget');
const ButtonWidget = Scrivito.getClass('ButtonWidget');
const ColumnWidget = Scrivito.getClass('ColumnWidget');
const FontAwesomeIconWidget = Scrivito.getClass('FontAwesomeIconWidget');
const GalleryImageWidget = Scrivito.getClass('GalleryImageWidget');
const GalleryWidget = Scrivito.getClass('GalleryWidget');
const HeadlineWidget = Scrivito.getClass('HeadlineWidget');
const ImageWidget = Scrivito.getClass('ImageWidget');
const PageListWidget = Scrivito.getClass('PageListWidget');
const SectionWidget = Scrivito.getClass('SectionWidget');
const TestimonialSliderWidget = Scrivito.getClass('TestimonialSliderWidget');
const TestimonialWidget = Scrivito.getClass('TestimonialWidget');
const TextWidget = Scrivito.getClass('TextWidget');

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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default () => {
  // Logos
  const scrivitoLogoDark = uploadImage(scrivitoLogoDarkData, 'Scrivito Logo (Dark)');
  uploadImage(scrivitoLogoBWData, 'Scrivito Logo (Black & White)');
  const scrivitoLogoWhite = uploadImage(scrivitoLogoWhiteData, 'Scrivito Logo (White)');

  // Images
  const unsplashDeskRuler = uploadImage(unsplashDeskRulerData, 'Ruler on a desk', UNSPLASH_TAGS);
  const unsplashFemaleBehindWindow = uploadImage(
    unsplashFemaleBehindWindowData, 'Female behind window', UNSPLASH_TAGS);
  const unsplashFemalePortrait1 = uploadImage(
    unsplashFemalePortrait1Data, 'Female Portrait 1', UNSPLASH_TAGS);
  const unsplashFemalePortrait2 = uploadImage(
    unsplashFemalePortrait2Data, 'Female Portrait 2', UNSPLASH_TAGS);
  const unsplashHandcraft = uploadImage(unsplashHandcraftData, 'Handcraft', UNSPLASH_TAGS);
  const unsplashLadyInCoffeeShop = uploadImage(unsplashLadyInCoffeeShopData, 'Lady in coffee shop',
    UNSPLASH_TAGS);
  const unsplashLaptopKeyboard = uploadImage(unsplashLaptopKeyboardData, 'Laptop keyboard',
    UNSPLASH_TAGS);
  const unsplashMalePortrait1 = uploadImage(
    unsplashMalePortrait1Data, 'Male Portrait 1', UNSPLASH_TAGS);
  const unsplashMalePortrait2 = uploadImage(
    unsplashMalePortrait2Data, 'Male Portrait 1', UNSPLASH_TAGS);
  const unsplashMaleWithSunglasses = uploadImage(
    unsplashMaleWithSunglassesData, 'Male with glasses', UNSPLASH_TAGS);
  const unsplashOfficeWindow = uploadImage(unsplashOfficeWindowData, 'Office Window',
    UNSPLASH_TAGS);
  const unsplashOfficeWithGlass = uploadImage(unsplashOfficeWithGlassData, 'Glass office',
    UNSPLASH_TAGS);
  const unsplashOutdoorMeeting = uploadImage(unsplashOutdoorMeetingData, 'Outdoor meeting',
    UNSPLASH_TAGS);
  const unsplashPlant = uploadImage(unsplashPlantData, 'Plant on desk', UNSPLASH_TAGS);
  const unsplashScreenWithClock = uploadImage(unsplashScreenWithClockData, 'Screen with clock',
    UNSPLASH_TAGS);
  const unsplashWhiteMeetingRoom = uploadImage(unsplashWhiteMeetingRoomData, 'White meeting room',
    UNSPLASH_TAGS);

  const homepage1Screenshot = uploadImage(homepage1ScreenshotData, 'Homepage variant 1 screenshot');
  const homepage2Screenshot = uploadImage(homepage2ScreenshotData, 'Homepage variant 2 screenshot');

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

  // Authors for BlogPosts
  const janeDoe = Author.create({
    name: 'Jane Doe',
    description: loremIpsum({ units: 'sentences', count: 3 }),
    picture: unsplashFemaleBehindWindow,
  });

  const johnDoe = Author.create({
    name: 'John Doe',
    description: loremIpsum({ units: 'sentences', count: 3 }),
    picture: unsplashMaleWithSunglasses,
  });

  // BlogPosts
  BlogPost.create({
    author: janeDoe,
    title: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 5 })),
    titleImage: unsplashLadyInCoffeeShop,
    subtitle: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 7 })),
    tags: ['Design', 'Marketing'],
    publishedAt: new Date(2017, 6, 15, 12),
    body: [
      new SectionWidget({
        content: [
          new TextWidget({
            text: loremIpsum({
              units: 'paragraphs',
              format: 'html',
              count: 3,
              paragraphLowerBound: 1,
              paragraphUpperBound: 10,
            }),
          }),
          new ImageWidget({ image: unsplashDeskRuler }),
          new TextWidget({
            text: loremIpsum({
              units: 'paragraphs',
              format: 'html',
              count: 3,
              paragraphLowerBound: 1,
              paragraphUpperBound: 10,
            }),
          }),
        ],
      }),
    ],
  });

  BlogPost.create({
    author: johnDoe,
    title: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 5 })),
    // no titleImage
    subtitle: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 7 })),
    tags: ['Development', 'Business'],
    publishedAt: new Date(2017, 6, 13, 12),
    body: [
      new SectionWidget({
        content: [
          new TextWidget({
            text: loremIpsum({
              units: 'paragraphs',
              format: 'html',
              count: 3,
              paragraphLowerBound: 1,
              paragraphUpperBound: 10,
            }),
          }),
          new ImageWidget({ image: unsplashLaptopKeyboard }),
          new TextWidget({
            text: loremIpsum({
              units: 'paragraphs',
              format: 'html',
              count: 3,
              paragraphLowerBound: 1,
              paragraphUpperBound: 10,
            }),
          }),
        ],
      }),
    ],
  });

  // BLOG
  const blog = Blog.create({
    _path: '/blog',
    _permalink: 'blog',
    title: 'Blog',
    navigationBackgroundImage: unsplashPlant,
    body: [
      new SectionWidget({ content: [
        new HeadlineWidget({
          level: 'h1',
          style: 'h2',
          showDividingLine: 'yes',
          headline: 'Latest news from our blog',
        }),
        new HeadlineWidget({
          level: 'h2',
          style: 'h4',
          centered: 'yes',
          headline: loremIpsum({ count: 2 }),
        }),
      ] }),
    ],
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
      new ButtonWidget({ text: 'Call to action' }),
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
            new ButtonWidget({
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
            new ButtonWidget({
              text: 'Call to action',
            }),
          ],
          column2: [new ImageWidget({ image: unsplashDeskRuler })],
        }),
      ] }),
      new SectionWidget({ content: [
        new HeadlineWidget({
          headline: 'Different homepage variants',
          level: 'h1',
          style: 'h2',
          showDividingLine: 'yes',
        }),
        new ColumnWidget({
          nrOfColumns: 2,
          column1: [
            new ImageWidget({ image: homepage1Screenshot }),
            new HeadlineWidget({
              headline: 'Choose a different homepage version',
              centered: 'yes',
              level: 'h3',
            }),
            new TextWidget({
              centered: 'yes',
              text: loremIpsum({
                units: 'paragraphs',
                format: 'html',
                count: 1,
                paragraphLowerBound: 3,
                paragraphUpperBound: 5,
              }),
            }),
            new ButtonWidget({
              centered: 'yes',
              text: 'Open home version',
              target: homeV1,
            }),
          ],
          column2: [
            new ImageWidget({ image: homepage2Screenshot }),
            new HeadlineWidget({
              headline: 'Choose a different homepage version',
              centered: 'yes',
              level: 'h3',
            }),
            new TextWidget({
              centered: 'yes',
              text: loremIpsum({
                units: 'paragraphs',
                format: 'html',
                count: 1,
                paragraphLowerBound: 3,
                paragraphUpperBound: 5,
              }),
            }),
            new ButtonWidget({
              centered: 'yes',
              text: 'Open home version',
              target: homeV2,
            }),
          ],
        }),
      ] }),
      new SectionWidget({ content: [
        new HeadlineWidget({
          headline: 'Short collection of our awarded work',
          level: 'h1',
          style: 'h2',
          showDividingLine: 'yes',
        }),
        new TextWidget({
          centered: 'yes',
          text: loremIpsum({
            units: 'paragraphs',
            format: 'html',
            count: 1,
            paragraphLowerBound: 3,
            paragraphUpperBound: 5,
          }),
        }),
      ] }),
      new SectionWidget({
        useFullWidth: 'yes',
        paddingDisabled: 'yes',
        content: [
          new GalleryWidget({
            images: [
              new GalleryImageWidget({
                title: 'Project 01',
                subtitle: loremIpsum({ units: 'words', count: 5 }),
                image: unsplashWhiteMeetingRoom,
              }),
              new GalleryImageWidget({
                title: 'Project 02',
                subtitle: loremIpsum({ units: 'words', count: 5 }),
                image: unsplashHandcraft,
              }),
              new GalleryImageWidget({
                title: 'Project 03',
                subtitle: loremIpsum({ units: 'words', count: 5 }),
                image: unsplashLaptopKeyboard,
              }),
              new GalleryImageWidget({
                title: 'Project 04',
                subtitle: loremIpsum({ units: 'words', count: 5 }),
                image: unsplashDeskRuler,
              }),
              new GalleryImageWidget({
                title: 'Project 05',
                subtitle: loremIpsum({ units: 'words', count: 5 }),
                image: unsplashOfficeWithGlass,
              }),
              new GalleryImageWidget({
                title: 'Project 06',
                subtitle: loremIpsum({ units: 'words', count: 5 }),
                image: unsplashOfficeWindow,
              }),
              new GalleryImageWidget({
                title: 'Project 07',
                subtitle: loremIpsum({ units: 'words', count: 5 }),
                image: unsplashOutdoorMeeting,
              }),
              new GalleryImageWidget({
                title: 'Project 08',
                subtitle: loremIpsum({ units: 'words', count: 5 }),
                image: unsplashScreenWithClock,
              }),
            ],
          }),
        ],
      }),
      new SectionWidget({
        useFullWidth: 'yes',
        content: [
          new HeadlineWidget({
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
            headline: 'Our latest blog news',
          }),
          new BlogOverviewWidget({}),
          new ButtonWidget({
            centered: 'yes',
            text: 'Load all blog entries',
            target: blog,
          }),
        ],
      }),
      new SectionWidget({
        backgroundColor: 'dark-image',
        backgroundImage: unsplashWhiteMeetingRoom,
        content: [
          new TestimonialSliderWidget({
            testimonials: [
              new TestimonialWidget({
                testimonial: loremIpsum({ units: 'sentences', count: 2 }),
                author: 'Alice Smith, CEO @ Acme',
                authorImage: unsplashFemalePortrait1,
              }),
              new TestimonialWidget({
                testimonial: loremIpsum({ units: 'sentences', count: 2 }),
                author: 'Bob Johnson, CTO @ MegaCorp',
                authorImage: unsplashMalePortrait1,
              }),
              new TestimonialWidget({
                testimonial: loremIpsum({ units: 'sentences', count: 2 }),
                author: 'Mary Williams, CTO @ The Company',
                authorImage: unsplashFemalePortrait2,
              }),
              new TestimonialWidget({
                testimonial: loremIpsum({ units: 'sentences', count: 2 }),
                author: 'Robert Jones, CEO @ Next Big Thing',
                authorImage: unsplashMalePortrait2,
              }),
            ],
          }),
        ],
      }),
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
