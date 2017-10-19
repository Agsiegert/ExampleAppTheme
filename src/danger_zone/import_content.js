/* eslint no-console: 0 */
/* global fetch */
import loremIpsum from 'lorem-ipsum';

import homepage1ScreenshotData from './binary_data/homepage1_screenshot';
import homepage2ScreenshotData from './binary_data/homepage2_screenshot';
import ipadData from './binary_data/ipad';
import iphoneData from './binary_data/iphone';
import iphoneFrontData from './binary_data/iphone_front';
import logo1Data from './binary_data/logo_1';
import logo2Data from './binary_data/logo_2';
import logo3Data from './binary_data/logo_3';
import logo4Data from './binary_data/logo_4';
import logo5Data from './binary_data/logo_5';
import logo6Data from './binary_data/logo_6';
import logo7Data from './binary_data/logo_7';
import logo8Data from './binary_data/logo_8';
import scrivitoLogoBWData from './binary_data/scrivito_logo_bw';
import scrivitoLogoDarkData from './binary_data/scrivito_logo_dark';
import scrivitoLogoWhiteData from './binary_data/scrivito_logo_white';
import unsplashAllesCandleWoodTableData from './binary_data/unsplash_alles_candle_wood_table';
import unsplashAppleWorkstationCalendarIpadData from './binary_data/unsplash_apple_workstation_calendar_ipad';
import unsplashAppleWorkstationWindcaveData from './binary_data/unsplash_apple_workstation_windcave';
import unsplashArchitectureData from './binary_data/unsplash_architecture';
import unsplashBikelaneData from './binary_data/unsplash_bikelane';
import unsplashBlackTablesWhiteChairsData from './binary_data/unsplash_black_tables_white_chairs';
import unsplashBuildingCornerCloudsData from './binary_data/unsplash_building_corner_clouds';
import unsplashBusinessPaperRedSocksData from './binary_data/unsplash_business_paper_red_socks';
import unsplashBusinessPaperWristwatchData from './binary_data/unsplash_business_paper_wristwatch';
import unsplashBusyStreetDuskData from './binary_data/unsplash_busy_street_dusk';
import unsplashBwCoffeeKeyboardMouseData from './binary_data/unsplash_bw_coffee_keyboard_mouse';
import unsplashBwSuitPolkadotsLaptopData from './binary_data/unsplash_bw_suit_polkadots_laptop';
import unsplashCactusMacPurpleData from './binary_data/unsplash_cactus_mac_purple';
import unsplashClosingLaptopData from './binary_data/unsplash_closing_laptop';
import unsplashComputerBeCreativeData from './binary_data/unsplash_computer_be_creative';
import unsplashDeskLaptopData from './binary_data/unsplash_desk_laptop_speaker';
import unsplashDeskRulerData from './binary_data/unsplash_desk_ruler';
import unsplashDeveloperSunriseData from './binary_data/unsplash_developer_sunrise';
import unsplashDimLaptopStandData from './binary_data/unsplash_dim_laptop_stand';
import unsplashDistractingWindowsTableData from './binary_data/unsplash_distracting_windows_table';
import unsplashDoMoreDeskData from './binary_data/unsplash_do_more';
import unsplashDualingLaptopsData from './binary_data/unsplash_dualing_laptops_blur';
import unsplashEmptyCafeWindowsData from './binary_data/unsplash_empty_cafe_windows';
import unsplashEurekaTowerData from './binary_data/unsplash_eureka_tower_night';
import unsplashFemaleBehindWindowData from './binary_data/unsplash_female_behind_window';
import unsplashFemalePortrait1Data from './binary_data/unsplash_female_portrait_1';
import unsplashFemalePortrait2Data from './binary_data/unsplash_female_portrait_2';
import unsplashFemalePortrait3Data from './binary_data/unsplash_female_portrait_3';
import unsplashFemalePortrait3SquareData from './binary_data/unsplash_female_portrait_3_square';
import unsplashFemalePortrait4Data from './binary_data/unsplash_female_portrait_4';
import unsplashFemalePortrait4SquareData from './binary_data/unsplash_female_portrait_4_square';
import unsplashFemalePortrait5Data from './binary_data/unsplash_female_portrait_5';
import unsplashFemalePortrait5SquareData from './binary_data/unsplash_female_portrait_5_square';
import unsplashFinanceIpadCoffeeData from './binary_data/unsplash_finance_ipad_coffee';
import unsplashGlassesOnMacData from './binary_data/unsplash_glasses_on_mac';
import unsplashGlassesSunsetData from './binary_data/unsplash_glasses_sunset';
import unsplashGlovedTweedData from './binary_data/unsplash_gloved_tweed';
import unsplashGoldWatchCufflinksData from './binary_data/unsplash_gold_watch_cufflinks';
import unsplashGrandCentralStationData from './binary_data/unsplash_grand_central_station';
import unsplashHandcraftData from './binary_data/unsplash_handcraft';
import unsplashHighriseData from './binary_data/unsplash_highrise';
import unsplashHoleyKneesCollageData from './binary_data/unsplash_holey_knees_collage';
import unsplashHotpinkData from './binary_data/unsplash_hotpink_nails_iphone_macbook_fob';
import unsplashHustleMugData from './binary_data/unsplash_hustle_mug';
import unsplashiPadChartsData from './binary_data/unsplash_strips_and_charts';
import unsplashLadyInCoffeeShopData from './binary_data/unsplash_lady_in_coffee_shop';
import unsplashLadyWalkingNightData from './binary_data/unsplash_lady_walking_night';
import unsplashLaptopKeyboardData from './binary_data/unsplash_laptop_keyboard';
import unsplashLongWhiteTableData from './binary_data/unsplash_long_white_tables_black_chairs';
import unsplashLookupHighriseData from './binary_data/unsplash_lookup_highrises';
import unsplashMacbookDeveloperData from './binary_data/unsplash_macbook_developer';
import unsplashMainstreetBlackcoatData from './binary_data/unsplash_mainstreet_blackcoat';
import unsplashMalePortrait1Data from './binary_data/unsplash_male_portrait_1';
import unsplashMalePortrait1SquareData from './binary_data/unsplash_male_portrait_1_square';
import unsplashMalePortrait2Data from './binary_data/unsplash_male_portrait_2';
import unsplashMalePortrait2SquareData from './binary_data/unsplash_male_portrait_2_square';
import unsplashMalePortrait3Data from './binary_data/unsplash_male_portrait_3';
import unsplashMalePortrait3SquareData from './binary_data/unsplash_male_portrait_3_square';
import unsplashMaleWithSunglassesData from './binary_data/unsplash_male_with_sunglasses';
import unsplashManCheckingWatchData from './binary_data/unsplash_man_checking_watch';
import unsplashManTieStraightenData from './binary_data/unsplash_man_tie_straighten';
import unsplashMeetingRoomMetalData from './binary_data/unsplash_meeting_room_metal_chairs';
import unsplashMeetingRoomthreeData from './binary_data/unsplash_meeting_room_three_white_plants';
import unsplashModernChairDeskData from './binary_data/unsplash_modern_chair_at_desk';
import unsplashMouseWoodenDeskData from './binary_data/unsplash_mouse_wooden_desk';
import unsplashNeonTrueData from './binary_data/unsplash_neon_true';
import unsplashNightBuildingData from './binary_data/unsplash_night_building';
import unsplashNotebookPencilData from './binary_data/unsplash_notebook_pencil';
import unsplashOfficeWindowData from './binary_data/unsplash_office_window';
import unsplashOfficeWithGlassData from './binary_data/unsplash_office_with_glass';
import unsplashOutdoorMeetingData from './binary_data/unsplash_outdoor_meeting';
import unsplashPlantData from './binary_data/unsplash_plant';
import unsplashScreenWithClockData from './binary_data/unsplash_screen_with_clock';
import unsplashSilhouetteDancingData from './binary_data/unsplash_silhouette_dancing';
import unsplashSkylineDuskData from './binary_data/unsplash_skyline_dusk';
import unsplashSkylineHarborData from './binary_data/unsplash_skyline_harbor';
import unsplashSkylineNightData from './binary_data/unsplash_skyline_night';
import unsplashSkyscraperNightData from './binary_data/unsplash_skyscraper_night';
import unsplashSolePalmtreeHighriseData from './binary_data/unsplash_sole_palmtree_highrise';
import unsplashSparseDeskData from './binary_data/unsplash_neutral_sparse_desk';
import unsplashSpeakerShelfData from './binary_data/unsplash_speaker_monitor_shelf';
import unsplashTidyDeskTouchScreenData from './binary_data/unsplash_tidy_desk_touch_screen';
import unsplashTwoLaptopsPencilData from './binary_data/unsplash_two_laptops_pencil';
import unsplashTypistLaptopData from './binary_data/unsplash_ringed_typist_laptop';
import unsplashUxDesignerData from './binary_data/unsplash_ux_designer';
import unsplashWatchTypeBookCoffeeData from './binary_data/unsplash_watch_type_book_coffee';
import unsplashWhiteMeetingRoomData from './binary_data/unsplash_white_meeting_room';
import unsplashWoodTableData from './binary_data/unsplash_wood_table_conversation';
import unsplashWritingPapersData from './binary_data/unsplash_writing_papers';
import unsplashYellowWatchTypingData from './binary_data/unsplash_yellow_watch_typing';
import videoWaterfall1Data from './binary_data/video_waterfall_1';

const Author = Scrivito.getClass('Author');
const Blog = Scrivito.getClass('Blog');
const BlogPost = Scrivito.getClass('BlogPost');
const Event = Scrivito.getClass('Event');
const Homepage = Scrivito.getClass('Homepage');
const Image = Scrivito.getClass('Image');
const Job = Scrivito.getClass('Job');
const LandingPage = Scrivito.getClass('LandingPage');
const Page = Scrivito.getClass('Page');
const SearchResults = Scrivito.getClass('SearchResults');
const Video = Scrivito.getClass('Video');

const AddressListItemWidget = Scrivito.getClass('AddressListItemWidget');
const AddressWidget = Scrivito.getClass('AddressWidget');
const BlogOverviewWidget = Scrivito.getClass('BlogOverviewWidget');
const BoxWidget = Scrivito.getClass('BoxWidget');
const ButtonWidget = Scrivito.getClass('ButtonWidget');
const CarouselWidget = Scrivito.getClass('CarouselWidget');
const ColumnWidget = Scrivito.getClass('ColumnWidget');
const ContactFormWidget = Scrivito.getClass('ContactFormWidget');
const DividerWidget = Scrivito.getClass('DividerWidget');
const EventOverviewWidget = Scrivito.getClass('EventOverviewWidget');
const FactWidget = Scrivito.getClass('FactWidget');
const FeaturePanelWidget = Scrivito.getClass('FeaturePanelWidget');
const GalleryWidget = Scrivito.getClass('GalleryWidget');
const GoogleMapsWidget = Scrivito.getClass('GoogleMapsWidget');
const HeadlineWidget = Scrivito.getClass('HeadlineWidget');
const IconListItemWidget = Scrivito.getClass('IconListItemWidget');
const IconListWidget = Scrivito.getClass('IconListWidget');
const IconWidget = Scrivito.getClass('IconWidget');
const ImageWidget = Scrivito.getClass('ImageWidget');
const JobOverviewWidget = Scrivito.getClass('JobOverviewWidget');
const LoginFormWidget = Scrivito.getClass('LoginFormWidget');
const PageListWidget = Scrivito.getClass('PageListWidget');
const PricingSpecWidget = Scrivito.getClass('PricingSpecWidget');
const PricingWidget = Scrivito.getClass('PricingWidget');
const SectionWidget = Scrivito.getClass('SectionWidget');
const SignUpFormWidget = Scrivito.getClass('SignUpFormWidget');
const TableRowWidget = Scrivito.getClass('TableRowWidget');
const TableWidget = Scrivito.getClass('TableWidget');
const TestimonialSliderWidget = Scrivito.getClass('TestimonialSliderWidget');
const TestimonialWidget = Scrivito.getClass('TestimonialWidget');
const TextWidget = Scrivito.getClass('TextWidget');
const ThumbnailGalleryImageWidget = Scrivito.getClass('ThumbnailGalleryImageWidget');
const ThumbnailGalleryWidget = Scrivito.getClass('ThumbnailGalleryWidget');
const TickListItemWidget = Scrivito.getClass('TickListItemWidget');
const TickListWidget = Scrivito.getClass('TickListWidget');
const TopFeaturesWidget = Scrivito.getClass('TopFeaturesWidget');
const VideoWidget = Scrivito.getClass('VideoWidget');

const UNSPLASH_TAGS = ['source: unsplash.com'];
const DEFAULT_TAGS = ['Design', 'Development', 'Marketing', 'Business'];

function allExistingBinaries() {
  return Scrivito.load(() => {
    const allObjs = [...Scrivito.Obj.all()];
    const allBinaries = allObjs.filter(obj => obj.isBinary());
    return allBinaries.map(obj => {
      return {
        id: obj.id(),
        filename: obj.metadata().get('filename'),
      };
    });
  });
}

let existingBinaries;

function uploadBinary({ title, url, filename, thingPlaceholder, createMethod }) {
  const existingBinary = existingBinaries.filter(i => i.filename === filename);
  if (existingBinary.length) {
    console.log(`Skipping ${thingPlaceholder} "${title}" - already uploaded.`);
    return Scrivito.Obj.get(existingBinary[0].id);
  }

  const obj = createMethod();

  fetch(url)
    .then(res => res.blob())
    .then(blob => Scrivito.Binary.upload(blob, { filename }))
    .then(binary => binary.into(obj))
    .then(newBinary => obj.update({ blob: newBinary }))
    .then(() => { console.log(`Upload of "${title}" done`); });

  return obj;
}

function uploadImage({ url, filename }, title, tags = []) {
  const createMethod = () => Image.create({ title, tags });

  return uploadBinary({ title, url, filename, createMethod, thingPlaceholder: 'image' });
}

function uploadVideo({ url, filename }, title, tags = []) {
  const createMethod = () => Video.create({ title, tags });

  return uploadBinary({ title, url, filename, createMethod, thingPlaceholder: 'video' });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function random(array) {
  const randomNumber = Math.floor(Math.random() * (array.length));
  return array[randomNumber];
}

function randomShuffle(array) {
  const shuffled = array.sort(() => { return 0.5 - Math.random(); });
  return shuffled.slice(0, Math.floor(Math.random() * ((array.length) + 1)));
}

// Returns a random date in the past ~5 months(9960000000)
function randomPastDate() {
  return new Date(+(new Date()) - (Math.floor(Math.random() * 9960000000)));
}

function createBoxWidgetWithIconHeadlineAndText(icon, headline) {
  return new BoxWidget({
    body: [
      new IconWidget({
        icon,
        size: 'fa-4x',
        alignment: 'center',
      }),
      new HeadlineWidget({
        headline,
        level: 'h3',
        style: 'h3',
        alignment: 'center',
      }),
      new TextWidget({
        alignment: 'center',
        text: loremIpsum({
          units: 'paragraphs',
          format: 'html',
          count: 1,
          paragraphLowerBound: 2,
          paragraphUpperBound: 3,
        }),
      }),
    ],
  });
}

function createFeaturePanelWidget(icon, headline) {
  return new FeaturePanelWidget({
    icon,
    headline,
    description: loremIpsum({ count: 2 }),
  });
}

function createPricingWidget(root) {
  return new PricingWidget({
    currency: '€',
    smallPlanName: 'Basic Plan',
    mediumPlanName: 'Team Plan',
    largePlanName: 'Corporate Plan',
    smallPlanPrice: '29',
    mediumPlanPrice: '59',
    largePlanPrice: '199',
    smallPlanPeriod: '/mo',
    mediumPlanPeriod: '/mo',
    largePlanPeriod: '/mo',
    smallPlanSpecs: [
      new PricingSpecWidget({ variable: '5', unit: 'projects' }),
      new PricingSpecWidget({ variable: '20', unit: 'images' }),
      new PricingSpecWidget({ variable: '9/5', unit: 'support' }),
    ],
    mediumPlanSpecs: [
      new PricingSpecWidget({ variable: '15', unit: 'projects' }),
      new PricingSpecWidget({ variable: '50', unit: 'images' }),
      new PricingSpecWidget({ variable: '12/7', unit: 'support' }),
    ],
    largePlanSpecs: [
      new PricingSpecWidget({ variable: 'unlimited', unit: 'projects' }),
      new PricingSpecWidget({ variable: 'unlimited', unit: 'images' }),
      new PricingSpecWidget({ variable: '24/7', unit: 'support' }),
    ],
    smallPlanButton: new Scrivito.Link({ title: 'Buy now', obj: root }),
    mediumPlanButton: new Scrivito.Link({ title: 'Buy now', obj: root }),
    largePlanButton: new Scrivito.Link({ title: 'Buy now', obj: root }),
  });
}

function createRandomIconListWidget() {
  return new IconListWidget({
    iconList: [
      new IconListItemWidget({
        icon: 'fa-twitter',
        link: new Scrivito.Link({
          title: 'Twitter',
          url: 'https://twitter.com',
          target: '_blank',
        }),
      }),
      new IconListItemWidget({
        icon: 'fa-facebook',
        link: new Scrivito.Link({
          title: 'Facebook',
          url: 'https://www.facebook.com',
          target: '_blank',
        }),
      }),
      new IconListItemWidget({
        icon: 'fa-instagram',
        link: new Scrivito.Link({
          title: 'Instagram',
          url: 'https://www.instagram.com',
          target: '_blank',
        }),
      }),
      new IconListItemWidget({
        icon: 'fa-linkedin',
        link: new Scrivito.Link({
          title: 'Linked In',
          url: 'https://www.linkedin.com',
          target: '_blank',
        }),
      }),
    ],
  });
}

function createCheckIcon() {
  return new IconWidget({ icon: 'fa-check' });
}

function createThumbnailGalleryImageWidget({ title, image }) {
  return new ThumbnailGalleryImageWidget({
    title,
    image,
    subtitle: loremIpsum({ units: 'words', count: 5 }),
    tags: [random(DEFAULT_TAGS)],
  });
}

function carouselProjectDescription({ target }) {
  return [
    new TextWidget({
      text: `
        <p><b>What we did</b></p>
        <p>${loremIpsum({ count: 3 })}</p>
      `,
    }),
    new ButtonWidget({
      target: new Scrivito.Link({
        title: 'Open project',
        obj: target,
      }),
      style: 'btn-clear',
    }),
  ];
}

function createAddressWidget({ showBorderBottom }) {
  return new AddressWidget({
    showLogo: 'yes',
    showBorderBottom: showBorderBottom ? 'yes' : 'no',
    address: '<p>25 Lorem Lis Street<br>Orange California, US</p>',
    listItems: [
      new AddressListItemWidget(
        { key: 'Phone:', value: '<a href="tel:+8001233567">800 123 3567</a>' }),
      new AddressListItemWidget(
        { key: 'Fax:', value: '<a href="tel:+8004664422">800 466 4422</a>' }),
      new AddressListItemWidget(
        { key: 'Mail:', value: '<a href="mailto:mail@example.com">mail@example.com</a>' }),
    ],
  });
}

function createRandomBody() {
  return [
    new SectionWidget({
      content: [
        new TextWidget({
          text: loremIpsum({
            units: 'paragraphs',
            format: 'html',
            count: 2,
            paragraphLowerBound: 1,
            paragraphUpperBound: 10,
          }),
        }),
      ],
    }),
  ];
}

function importContent() {
  allExistingBinaries().then(binaries => {
    existingBinaries = binaries;

    // Logos
    const logo1 = uploadImage(logo1Data, 'Logo 1');
    const logo2 = uploadImage(logo2Data, 'Logo 2');
    const logo3 = uploadImage(logo3Data, 'Logo 3');
    const logo4 = uploadImage(logo4Data, 'Logo 4');
    const logo5 = uploadImage(logo5Data, 'Logo 5');
    const logo6 = uploadImage(logo6Data, 'Logo 6');
    const logo7 = uploadImage(logo7Data, 'Logo 7');
    const logo8 = uploadImage(logo8Data, 'Logo 8');
    const scrivitoLogoDark = uploadImage(scrivitoLogoDarkData, 'Scrivito Logo (Dark)');
    uploadImage(scrivitoLogoBWData, 'Scrivito Logo (Black & White)');
    const scrivitoLogoWhite = uploadImage(scrivitoLogoWhiteData, 'Scrivito Logo (White)');

    // Images
    const unsplashAllesCandleWoodTable = uploadImage(unsplashAllesCandleWoodTableData, 'Alles candle on wood table', UNSPLASH_TAGS);
    const unsplashAppleWorkstationCalendarIpad = uploadImage(unsplashAppleWorkstationCalendarIpadData, 'Apple workstation with calendar and Ipad', UNSPLASH_TAGS);
    const unsplashAppleWorkstationWindcave = uploadImage(unsplashAppleWorkstationWindcaveData, 'Apple workstation with Windcave image', UNSPLASH_TAGS);
    const unsplashArchitecture = uploadImage(unsplashArchitectureData, 'Architecture', UNSPLASH_TAGS);
    const unsplashBikelane = uploadImage(unsplashBikelaneData, 'Bikelane', UNSPLASH_TAGS);
    const unsplashBlackTablesWhiteChairs = uploadImage(unsplashBlackTablesWhiteChairsData, 'Black tables with white chairs', UNSPLASH_TAGS);
    const unsplashBuildingCornerClouds = uploadImage(unsplashBuildingCornerCloudsData, 'Building corner with clouds', UNSPLASH_TAGS);
    const unsplashBusinessPaperRedSocks = uploadImage(unsplashBusinessPaperRedSocksData, 'Business paper guy in red socks', UNSPLASH_TAGS);
    const unsplashBusinessPaperWristwatch = uploadImage(unsplashBusinessPaperWristwatchData, 'Ruler on a desk', UNSPLASH_TAGS);
    const unsplashBusyStreetDusk = uploadImage(unsplashBusyStreetDuskData, 'Busy street dusk', UNSPLASH_TAGS);
    const unsplashBwCoffeeKeyboardMouse = uploadImage(unsplashBwCoffeeKeyboardMouseData, 'Coffee keyboard mouse (B/W)', UNSPLASH_TAGS);
    const unsplashBwSuitPolkadotsLaptop = uploadImage(unsplashBwSuitPolkadotsLaptopData, 'Suit Polkadots Laptop (B/W)', UNSPLASH_TAGS);
    const unsplashCactusMacPurple = uploadImage(unsplashCactusMacPurpleData, 'Cactus Mac Purple', UNSPLASH_TAGS);
    const unsplashClosingLaptop = uploadImage(unsplashClosingLaptopData, 'Closing laptop', UNSPLASH_TAGS);
    const unsplashComputerBeCreative = uploadImage(unsplashComputerBeCreativeData, 'Computer be creative', UNSPLASH_TAGS);
    const unsplashDeskLaptop = uploadImage(unsplashDeskLaptopData, 'Laptop on a desk', UNSPLASH_TAGS);
    const unsplashDeskRuler = uploadImage(unsplashDeskRulerData, 'Ruler on a desk', UNSPLASH_TAGS);
    const unsplashDeveloperSunrise = uploadImage(unsplashDeveloperSunriseData, 'Developer sunrise', UNSPLASH_TAGS);
    const unsplashDimLaptopStand = uploadImage(unsplashDimLaptopStandData, 'Dim laptop stand', UNSPLASH_TAGS);
    const unsplashDistractingWindowsTable = uploadImage(unsplashDistractingWindowsTableData, 'Distracting window stable', UNSPLASH_TAGS);
    const unsplashDoMoreDesk = uploadImage(unsplashDoMoreDeskData, 'Do more desk', UNSPLASH_TAGS);
    const unsplashDualingLaptops = uploadImage(unsplashDualingLaptopsData, 'Blurred laptop on a table', UNSPLASH_TAGS);
    const unsplashEmptyCafeWindows = uploadImage(unsplashEmptyCafeWindowsData, 'Empty cafe windows', UNSPLASH_TAGS);
    const unsplashEurekaTower = uploadImage(unsplashEurekaTowerData, 'Eureka tower at night', UNSPLASH_TAGS);
    const unsplashFemaleBehindWindow = uploadImage(unsplashFemaleBehindWindowData, 'Female behind window', UNSPLASH_TAGS);
    const unsplashFemalePortrait1 = uploadImage(unsplashFemalePortrait1Data, 'Female Portrait 1', UNSPLASH_TAGS);
    const unsplashFemalePortrait2 = uploadImage(unsplashFemalePortrait2Data, 'Female Portrait 2', UNSPLASH_TAGS);
    uploadImage(unsplashFemalePortrait3Data, 'Female Portrait 3', UNSPLASH_TAGS);
    const unsplashFemalePortrait3Square = uploadImage(unsplashFemalePortrait3SquareData, 'Female Portrait 3 (Square)', [...UNSPLASH_TAGS, 'square']);
    uploadImage(unsplashFemalePortrait4Data, 'Female Portrait 4', UNSPLASH_TAGS);
    const unsplashFemalePortrait4Square = uploadImage(unsplashFemalePortrait4SquareData, 'Female Portrait 4 (Square)', [...UNSPLASH_TAGS, 'square']);
    uploadImage(unsplashFemalePortrait5Data, 'Female Portrait 5', UNSPLASH_TAGS);
    const unsplashFemalePortrait5Square = uploadImage(unsplashFemalePortrait5SquareData, 'Female Portrait 5 (Square)', [...UNSPLASH_TAGS, 'square']);
    const unsplashFinanceIpadCoffee = uploadImage(unsplashFinanceIpadCoffeeData, 'Finance Ipad Coffee', UNSPLASH_TAGS);
    const unsplashGlassesOnMac = uploadImage(unsplashGlassesOnMacData, 'Glasses on Mac', UNSPLASH_TAGS);
    const unsplashGlassesSunset = uploadImage(unsplashGlassesSunsetData, 'Glasses Sunset', UNSPLASH_TAGS);
    const unsplashGlovedTweed = uploadImage(unsplashGlovedTweedData, 'Gloved Tweed', UNSPLASH_TAGS);
    const unsplashGoldWatchCufflinks = uploadImage(unsplashGoldWatchCufflinksData, 'Gold Watch Cufflinks', UNSPLASH_TAGS);
    const unsplashGrandCentralStation = uploadImage(unsplashGrandCentralStationData, 'Grand Central Station', UNSPLASH_TAGS);
    const unsplashHandcraft = uploadImage(unsplashHandcraftData, 'Handcraft', UNSPLASH_TAGS);
    const unsplashHighrise = uploadImage(unsplashHighriseData, 'Highrise', UNSPLASH_TAGS);
    const unsplashHoleyKneesCollage = uploadImage(unsplashHoleyKneesCollageData, 'Holey Knees Collage', UNSPLASH_TAGS);
    const unsplashHotpink = uploadImage(unsplashHotpinkData, 'Hotpink', UNSPLASH_TAGS);
    const unsplashHustleMug = uploadImage(unsplashHustleMugData, 'Hustle Mug', UNSPLASH_TAGS);
    const unsplashiPadCharts = uploadImage(unsplashiPadChartsData, 'iPad charts', UNSPLASH_TAGS);
    const unsplashLadyInCoffeeShop = uploadImage(unsplashLadyInCoffeeShopData, 'Lady in coffee shop', UNSPLASH_TAGS);
    const unsplashLadyWalkingNight = uploadImage(unsplashLadyWalkingNightData, 'Lady walking at night', UNSPLASH_TAGS);
    const unsplashLaptopKeyboard = uploadImage(unsplashLaptopKeyboardData, 'Laptop keyboard', UNSPLASH_TAGS);
    const unsplashLongWhiteTable = uploadImage(unsplashLongWhiteTableData, 'Long white table', UNSPLASH_TAGS);
    const unsplashLookupHighrise = uploadImage(unsplashLookupHighriseData, 'Looking up at highrise', UNSPLASH_TAGS);
    const unsplashMacbookDeveloper = uploadImage(unsplashMacbookDeveloperData, 'Developer MacBook', UNSPLASH_TAGS);
    const unsplashMainstreetBlackcoat = uploadImage(unsplashMainstreetBlackcoatData, 'Mainstreet Blackcoat', UNSPLASH_TAGS);
    const unsplashMalePortrait1 = uploadImage(unsplashMalePortrait1Data, 'Male Portrait 1', UNSPLASH_TAGS);
    const unsplashMalePortrait1Square = uploadImage(unsplashMalePortrait1SquareData, 'Male Portrait 1 (Square)', [...UNSPLASH_TAGS, 'square']);
    const unsplashMalePortrait2 = uploadImage(unsplashMalePortrait2Data, 'Male Portrait 2', UNSPLASH_TAGS);
    const unsplashMalePortrait2Square = uploadImage(unsplashMalePortrait2SquareData, 'Male Portrait 2 (Square)', [...UNSPLASH_TAGS, 'square']);
    uploadImage(unsplashMalePortrait3Data, 'Male Portrait 3', UNSPLASH_TAGS);
    const unsplashMalePortrait3Square = uploadImage(unsplashMalePortrait3SquareData, 'Male Portrait 3 (Square)', [...UNSPLASH_TAGS, 'square']);
    const unsplashMaleWithSunglasses = uploadImage(unsplashMaleWithSunglassesData, 'Male with glasses', UNSPLASH_TAGS);
    const unsplashManCheckingWatch = uploadImage(unsplashManCheckingWatchData, 'Man checking watch', UNSPLASH_TAGS);
    const unsplashManTieStraighten = uploadImage(unsplashManTieStraightenData, 'Man straightening tie', UNSPLASH_TAGS);
    const unsplashMeetingRoomMetal = uploadImage(unsplashMeetingRoomMetalData, 'Meeting room with metal chairs', UNSPLASH_TAGS);
    const unsplashMeetingRoomthree = uploadImage(unsplashMeetingRoomthreeData, 'Meeting room with three white plants', UNSPLASH_TAGS);
    const unsplashModernChairDesk = uploadImage(unsplashModernChairDeskData, 'Modern chair at desk', UNSPLASH_TAGS);
    const unsplashMouseWoodenDesk = uploadImage(unsplashMouseWoodenDeskData, 'Mouse wooden desk', UNSPLASH_TAGS);
    const unsplashNeonTrue = uploadImage(unsplashNeonTrueData, 'Neon true', UNSPLASH_TAGS);
    const unsplashNightBuilding = uploadImage(unsplashNightBuildingData, 'Building at night', UNSPLASH_TAGS);
    const unsplashNotebookPencil = uploadImage(unsplashNotebookPencilData, 'Notebook with pencil', UNSPLASH_TAGS);
    const unsplashOfficeWindow = uploadImage(unsplashOfficeWindowData, 'Office Window', UNSPLASH_TAGS);
    const unsplashOfficeWithGlass = uploadImage(unsplashOfficeWithGlassData, 'Glass office', UNSPLASH_TAGS);
    const unsplashOutdoorMeeting = uploadImage(unsplashOutdoorMeetingData, 'Outdoor meeting', UNSPLASH_TAGS);
    const unsplashPlant = uploadImage(unsplashPlantData, 'Plant on desk', UNSPLASH_TAGS);
    const unsplashScreenWithClock = uploadImage(unsplashScreenWithClockData, 'Screen with clock', UNSPLASH_TAGS);
    const unsplashSilhouetteDancing = uploadImage(unsplashSilhouetteDancingData, 'Silhouette dancing', UNSPLASH_TAGS);
    const unsplashSkylineDusk = uploadImage(unsplashSkylineDuskData, 'Skyline dusk', UNSPLASH_TAGS);
    const unsplashSkylineHarbor = uploadImage(unsplashSkylineHarborData, 'Skyline harbor', UNSPLASH_TAGS);
    const unsplashSkylineNight = uploadImage(unsplashSkylineNightData, 'Skyline night', UNSPLASH_TAGS);
    const unsplashSkyscraperNight = uploadImage(unsplashSkyscraperNightData, 'Skyscraper night', UNSPLASH_TAGS);
    const unsplashSolePalmtreeHighrise = uploadImage(unsplashSolePalmtreeHighriseData, 'Sole palmtree highrise', UNSPLASH_TAGS);
    const unsplashSparseDesk = uploadImage(unsplashSparseDeskData, 'Sparse desk', UNSPLASH_TAGS);
    const unsplashSpeakerShelf = uploadImage(unsplashSpeakerShelfData, 'Shelf with speaker', UNSPLASH_TAGS);
    const unsplashTidyDeskTouchScreen = uploadImage(unsplashTidyDeskTouchScreenData, 'Tidy desk with touch screen', UNSPLASH_TAGS);
    const unsplashTwoLaptopsPencil = uploadImage(unsplashTwoLaptopsPencilData, 'Two laptops with pencil', UNSPLASH_TAGS);
    const unsplashTypistLaptop = uploadImage(unsplashTypistLaptopData, 'Typist on laptop', UNSPLASH_TAGS);
    const unsplashUxDesigner = uploadImage(unsplashUxDesignerData, 'UX Designer desk', UNSPLASH_TAGS);
    const unsplashWatchTypeBookCoffee = uploadImage(unsplashWatchTypeBookCoffeeData, 'Watch Type Book Coffee', UNSPLASH_TAGS);
    const unsplashWhiteMeetingRoom = uploadImage(unsplashWhiteMeetingRoomData, 'White meeting room', UNSPLASH_TAGS);
    const unsplashWoodTable = uploadImage(unsplashWoodTableData, 'Wooden table', UNSPLASH_TAGS);
    const unsplashWritingPapers = uploadImage(unsplashWritingPapersData, 'Writing papers', UNSPLASH_TAGS);
    const unsplashYellowWatchTyping = uploadImage(unsplashYellowWatchTypingData, 'Yellow watch typing', UNSPLASH_TAGS);

    // Videos
    const videoWaterfall1 = uploadVideo(videoWaterfall1Data, 'Waterfall 1');

    const homepage1Screenshot = uploadImage(
      homepage1ScreenshotData, 'Homepage variant 1 screenshot');
    const homepage2Screenshot = uploadImage(
      homepage2ScreenshotData, 'Homepage variant 2 screenshot');
    const ipad = uploadImage(ipadData, 'iPad screenshot');
    const iphone = uploadImage(iphoneData, 'iPhone screenshot');
    const iphoneFront = uploadImage(iphoneFrontData, 'iPhone front screenshot');

    // Obj.root()
    const root = Homepage.create({
      _path: '/',
      // Content is at the bottom of the file
    });

    // Path less Objs
    const jobs = Page.create({
      _path: '/about/jobs',
      _permalink: 'jobs',
      title: 'Jobs',
      body: [
        new SectionWidget({
          backgroundColor: 'dark-image',
          backgroundImage: unsplashWoodTable,
          content: [
            new HeadlineWidget({
              alignment: 'center',
              level: 'h1',
              style: 'h1',
              headline: 'Join our awarded team',
            }),
            new HeadlineWidget({
              alignment: 'center',
              level: 'h2',
              style: 'h4',
              headline: loremIpsum({ count: 3 }),
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new HeadlineWidget({
              headline: 'We are hiring the following positions',
              level: 'h1',
              showDividingLine: 'yes',
              style: 'h2',
            }),
            new JobOverviewWidget({}),
          ],
        }),
        new SectionWidget({
          content: [
            new HeadlineWidget({
              headline: "Why it's great to work with us",
              level: 'h1',
              showDividingLine: 'yes',
              style: 'h2',
            }),
            new HeadlineWidget({
              alignment: 'center',
              headline: loremIpsum({ count: 2 }),
              level: 'h2',
              style: 'h4',
            }),
          ],
        }),
        new SectionWidget({
          useFullWidth: 'yes',
          content: [
            new CarouselWidget({
              images: [unsplashWhiteMeetingRoom, unsplashDoMoreDesk, unsplashTwoLaptopsPencil],
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new ColumnWidget({
              nrOfColumns: '3',
              column1: [
                createBoxWidgetWithIconHeadlineAndText('fa-star', 'Great environment'),
              ],
              column2: [
                createBoxWidgetWithIconHeadlineAndText('fa-users', 'Awarded team'),
              ],
              column3: [
                createBoxWidgetWithIconHeadlineAndText('fa-money', 'Fair payment'),
              ],
            }),
            new ColumnWidget({
              nrOfColumns: '3',
              column1: [
                createBoxWidgetWithIconHeadlineAndText('fa-child', 'Daily free meal'),
              ],
              column2: [
                createBoxWidgetWithIconHeadlineAndText('fa-laptop', 'The best equipment'),
              ],
              column3: [
                createBoxWidgetWithIconHeadlineAndText('fa-heartbeat', 'Sport activity'),
              ],
            }),
          ],
        }),
      ],
    });
    const contact = Page.create({
      _path: '/about/contact',
      _permalink: 'contact',
      title: 'Contact',
      body: [
        new SectionWidget({
          paddingDisabled: 'yes',
          useFullWidth: 'yes',
          content: [
            new GoogleMapsWidget({
              address: 'TV tower, Berlin, Germany',
              zoom: '15',
              content: [
                createAddressWidget({ showBorderBottom: true }),
                createRandomIconListWidget(),
              ],
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new BoxWidget({
              useOffset: 'yes',
              body: [
                new HeadlineWidget({
                  headline: 'Get in touch with us',
                  level: 'h1',
                  showDividingLine: 'yes',
                  style: 'h2',
                }),
                new HeadlineWidget({
                  alignment: 'center',
                  level: 'h2',
                  style: 'h4',
                  headline: loremIpsum({ count: 3 }),
                }),
                new ContactFormWidget({
                  agreementText: loremIpsum({ count: 3 }),
                  buttonText: 'Send message now',
                }),
              ],
            }),
          ],
        }),
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
      _permalink: 'login',
      body: [
        new SectionWidget({
          backgroundColor: 'dark-image',
          backgroundImage: unsplashHotpink,
          useFullHeight: 'yes',
          content: [
            new LoginFormWidget({}),
          ],
        }),
      ],
    });
    const events = Page.create({
      _path: '/about/events',
      _permalink: 'events',
      title: 'Events & Conferences',
      body: [
        new SectionWidget({
          backgroundColor: 'dark-image',
          backgroundImage: unsplashTidyDeskTouchScreen,
          content: [
            new HeadlineWidget({
              headline: 'Upcoming new events',
              level: 'h1',
              style: 'h1',
              alignment: 'center',
            }),
            new HeadlineWidget({
              headline: loremIpsum({ count: 2 }),
              level: 'h2',
              style: 'h4',
              alignment: 'center',
            }),
          ],
        }),
        new SectionWidget({
          paddingDisabled: 'yes',
          content: [
            new EventOverviewWidget({}),
          ],
        }),
      ],
    });
    const landingPage = LandingPage.create({
      _path: '/widgets_and_pages/landing_page',
      _permalink: 'landing_page',
      title: 'Landing Page',
      navigationStyle: 'transparentDark full-height gradient',
      navigationBackgroundImage: unsplashMouseWoodenDesk,
      navigationSection: [
        new ColumnWidget({
          nrOfColumns: '2',
          verticallyAligned: 'yes',
          column1: [
            new HeadlineWidget({
              headline: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 4 })),
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
              target: new Scrivito.Link({
                title: 'Call to action',
                obj: root,
              }),
            }),
          ],
          column2: [
            new SignUpFormWidget({
              isTransparent: 'yes',
              title: 'Sign up to Scrivito',
              buttonText: 'Sign up to Scrivito now',
            }),
          ],
        }),
      ],
      body: [
        new SectionWidget({
          backgroundColor: 'greydark',
          paddingDisabled: 'yes',
          content: [
            new HeadlineWidget({
              headline: 'Explore the magic features',
              level: 'h1',
              showDividingLine: 'yes',
              style: 'h2',
            }),
            new HeadlineWidget({
              alignment: 'center',
              headline: loremIpsum({ count: 2 }),
              level: 'h2',
              style: 'h4',
            }),
            new TopFeaturesWidget({
              leftColumn: [
                new HeadlineWidget({
                  headline: 'Amazing features',
                  alignment: 'right',
                  level: 'h3',
                  style: 'h3',
                }),
                new TextWidget({
                  alignment: 'right',
                  text: loremIpsum({
                    units: 'paragraphs',
                    format: 'html',
                    count: 1,
                    paragraphLowerBound: 2,
                    paragraphUpperBound: 2,
                  }),
                }),
                new HeadlineWidget({
                  headline: 'Easy to use',
                  alignment: 'right',
                  level: 'h3',
                  style: 'h3',
                }),
                new TextWidget({
                  alignment: 'right',
                  text: loremIpsum({
                    units: 'paragraphs',
                    format: 'html',
                    count: 1,
                    paragraphLowerBound: 2,
                    paragraphUpperBound: 2,
                  }),
                }),
              ],
              image: iphoneFront,
              rightColumn: [
                new HeadlineWidget({
                  headline: 'Cool and fresh design',
                  level: 'h3',
                  style: 'h3',
                }),
                new TextWidget({
                  text: loremIpsum({
                    units: 'paragraphs',
                    format: 'html',
                    count: 1,
                    paragraphLowerBound: 2,
                    paragraphUpperBound: 2,
                  }),
                }),
                new HeadlineWidget({
                  headline: 'Full responsive',
                  level: 'h3',
                  style: 'h3',
                }),
                new TextWidget({
                  text: loremIpsum({
                    units: 'paragraphs',
                    format: 'html',
                    count: 1,
                    paragraphLowerBound: 2,
                    paragraphUpperBound: 2,
                  }),
                }),
              ],
            }),
            new DividerWidget({}),
          ],
        }),
        new SectionWidget({
          backgroundColor: 'greydark',
          paddingDisabled: 'yes',
          content: [
            new ColumnWidget({
              nrOfColumns: '4',
              column1: [
                new FactWidget({
                  value: '134',
                  key: loremIpsum({ units: 'words', count: 3 }),
                }),
              ],
              column2: [
                new FactWidget({
                  value: '43',
                  key: loremIpsum({ units: 'words', count: 3 }),
                }),
              ],
              column3: [
                new FactWidget({
                  value: '13',
                  key: loremIpsum({ units: 'words', count: 3 }),
                }),
              ],
              column4: [
                new FactWidget({
                  value: '65',
                  key: loremIpsum({ units: 'words', count: 3 }),
                }),
              ],
            }),
            new DividerWidget({}),
          ],
        }),
        new SectionWidget({
          backgroundColor: 'greydark',
          paddingDisabled: 'yes',
          content: [
            new HeadlineWidget({
              headline: 'More cool highlights',
              level: 'h1',
              showDividingLine: 'yes',
              style: 'h2',
            }),
            new HeadlineWidget({
              alignment: 'center',
              headline: loremIpsum({ count: 2 }),
              level: 'h2',
              style: 'h4',
            }),
            new ColumnWidget({
              nrOfColumns: '2',
              verticallyAligned: 'yes',
              column1: [new ImageWidget({ image: ipad })],
              column2: [
                new HeadlineWidget({
                  level: 'h3',
                  style: 'h2',
                  headline: 'Content Management for React Apps',
                }),
                new TextWidget({
                  text: loremIpsum({
                    units: 'paragraphs',
                    format: 'html',
                    count: 1,
                    paragraphLowerBound: 5,
                    paragraphUpperBound: 5,
                  }),
                }),
                new ButtonWidget({
                  target: new Scrivito.Link({
                    title: 'Call to action',
                    obj: root,
                  }),
                }),
              ],
            }),
            new ColumnWidget({
              nrOfColumns: '2',
              verticallyAligned: 'yes',
              column1: [
                new HeadlineWidget({
                  level: 'h3',
                  style: 'h2',
                  headline: 'Fully Fledged CMS Service',
                }),
                new TextWidget({
                  text: loremIpsum({
                    units: 'paragraphs',
                    format: 'html',
                    count: 1,
                    paragraphLowerBound: 5,
                    paragraphUpperBound: 5,
                  }),
                }),
                new ButtonWidget({
                  target: new Scrivito.Link({
                    title: 'Call to action',
                    obj: root,
                  }),
                }),
              ],
              column2: [new ImageWidget({ image: iphone })],
            }),
            new ColumnWidget({
              nrOfColumns: '3',
              column1: [
                createBoxWidgetWithIconHeadlineAndText('fa-picture-o', 'Drag & drop widgets'),
              ],
              column2: [
                createBoxWidgetWithIconHeadlineAndText('fa-mouse-pointer', 'WYSIWYG editing'),
              ],
              column3: [
                createBoxWidgetWithIconHeadlineAndText('fa-cogs', 'Easy customization'),
              ],
            }),
            new ColumnWidget({
              nrOfColumns: '3',
              column1: [
                createBoxWidgetWithIconHeadlineAndText('fa-comments-o', 'Full support'),
              ],
              column2: [
                createBoxWidgetWithIconHeadlineAndText('fa-clone', 'Tons of widgets'),
              ],
              column3: [
                createBoxWidgetWithIconHeadlineAndText('fa-mobile', 'Fully responsive'),
              ],
            }),
            new DividerWidget({}),
          ],
        }),
        new SectionWidget({
          backgroundColor: 'greydark',
          paddingDisabled: 'yes',
          content: [
            new HeadlineWidget({
              level: 'h1',
              style: 'h2',
              showDividingLine: 'yes',
              headline: 'Choose your plan',
            }),
            new HeadlineWidget({
              level: 'h2',
              style: 'h4',
              alignment: 'center',
              headline: loremIpsum({ count: 2 }),
            }),
            createPricingWidget(root),
          ],
        }),
      ],
    });

    // PRODUCT
    const product = Page.create({
      _path: '/product',
      title: 'Product',
      body: [
        new SectionWidget({
          backgroundColor: 'dark-image',
          backgroundImage: unsplashTidyDeskTouchScreen,
          content: [
            new ColumnWidget({
              nrOfColumns: '2',
              verticallyAligned: 'yes',
              column1: [
                new HeadlineWidget({
                  level: 'h1',
                  style: 'h1',
                  headline: 'Amazing video hero widget',
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
                  target: new Scrivito.Link({
                    title: 'Call to action',
                    obj: root,
                  }),
                }),
              ],
              column2: [new ImageWidget({ image: iphone })],
            }),
          ],
        }),
        new SectionWidget({ content: [
          new HeadlineWidget({
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
            headline: 'Great feature overview',
          }),
          new HeadlineWidget({
            level: 'h2',
            style: 'h4',
            alignment: 'center',
            headline: loremIpsum({ count: 2 }),
          }),
          new ColumnWidget({
            nrOfColumns: '3',
            column1: [
              createBoxWidgetWithIconHeadlineAndText('fa-picture-o', 'Drag & drop widgets'),
            ],
            column2: [
              createBoxWidgetWithIconHeadlineAndText('fa-mouse-pointer', 'WYSIWYG editing'),
            ],
            column3: [
              createBoxWidgetWithIconHeadlineAndText('fa-cogs', 'Easy customization'),
            ],
          }),
          new ColumnWidget({
            nrOfColumns: '3',
            column1: [
              createBoxWidgetWithIconHeadlineAndText('fa-comments-o', 'Full support'),
            ],
            column2: [
              createBoxWidgetWithIconHeadlineAndText('fa-clone', 'Tons of widgets'),
            ],
            column3: [
              createBoxWidgetWithIconHeadlineAndText('fa-mobile', 'Fully responsive'),
            ],
          }),
          new ButtonWidget({
            alignment: 'center',
            target: new Scrivito.Link({
              title: 'Call to action',
              obj: root,
            }),
          }),
        ] }),
        new SectionWidget({
          useFullWidth: 'yes',
          paddingDisabled: 'yes',
          content: [
            new GalleryWidget({
              images: [
                unsplashSkylineHarbor,
                unsplashHighrise,
                unsplashGrandCentralStation,
                unsplashSkylineNight,
                unsplashSolePalmtreeHighrise,
                unsplashSkylineDusk,
              ],
            }),
          ],
        }),
        new SectionWidget({ content: [
          new HeadlineWidget({
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
            headline: 'Choose your plan',
          }),
          new HeadlineWidget({
            level: 'h2',
            style: 'h4',
            alignment: 'center',
            headline: loremIpsum({ count: 2 }),
          }),
          createPricingWidget(root),
        ] }),
      ],
    });

    // ABOUT
    const ourWork = Page.create({
      _path: '/about/our_work',
      title: 'Our Work',
      body: [
        new SectionWidget({ content: [
          new HeadlineWidget({
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
            headline: 'Our awarded work',
          }),
          new HeadlineWidget({
            level: 'h2',
            style: 'h4',
            alignment: 'center',
            headline: loremIpsum({ count: 2 }),
          }),
        ] }),
        new SectionWidget({
          useFullWidth: 'yes',
          paddingDisabled: 'yes',
          content: [
            new ThumbnailGalleryWidget({
              showTags: 'yes',
              images: [
                createThumbnailGalleryImageWidget({ title: 'Project 01', image: unsplashGlovedTweed }),
                createThumbnailGalleryImageWidget({ title: 'Project 02', image: unsplashHustleMug }),
                createThumbnailGalleryImageWidget({ title: 'Project 03', image: unsplashYellowWatchTyping }),
                createThumbnailGalleryImageWidget({ title: 'Project 04', image: unsplashMouseWoodenDesk }),
                createThumbnailGalleryImageWidget({ title: 'Project 05', image: unsplashWatchTypeBookCoffee }),
                createThumbnailGalleryImageWidget({ title: 'Project 06', image: unsplashGoldWatchCufflinks }),
                createThumbnailGalleryImageWidget({ title: 'Project 07', image: unsplashWritingPapers }),
                createThumbnailGalleryImageWidget({ title: 'Project 08', image: unsplashGlassesOnMac }),
                createThumbnailGalleryImageWidget({ title: 'Project 09', image: unsplashBusyStreetDusk }),
                createThumbnailGalleryImageWidget({ title: 'Project 10', image: unsplashBwCoffeeKeyboardMouse }),
                createThumbnailGalleryImageWidget({ title: 'Project 11', image: unsplashBwSuitPolkadotsLaptop }),
                createThumbnailGalleryImageWidget({ title: 'Project 12', image: unsplashCactusMacPurple }),
                createThumbnailGalleryImageWidget({ title: 'Project 13', image: unsplashComputerBeCreative }),
                createThumbnailGalleryImageWidget({ title: 'Project 14', image: unsplashDeveloperSunrise }),
                createThumbnailGalleryImageWidget({ title: 'Project 15', image: unsplashDistractingWindowsTable }),
                createThumbnailGalleryImageWidget({ title: 'Project 16', image: unsplashEmptyCafeWindows }),
              ],
            }),
          ],
        }),
      ],
    });

    const ourClients = Page.create({
      _path: '/about/our_clients',
      _permalink: 'clients',
      title: 'Our Clients',
    });
    ourClients.update({
      body: [
        new SectionWidget({ content: [
          new HeadlineWidget({
            headline: 'Clients and references',
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
          }),
          new HeadlineWidget({
            headline: loremIpsum({
              count: 3,
              sentenceLowerBound: 12,
            }),
            level: 'h2',
            style: 'h4',
            alignment: 'center',
          }),
        ] }),
        new SectionWidget({
          useFullWidth: 'yes',
          content: [
            new CarouselWidget({
              images: [unsplashDualingLaptops, unsplashClosingLaptop, unsplashDeskLaptop],
              showDescription: 'yes',
              descriptionLogo: logo1,
              description: carouselProjectDescription({ target: ourClients }),
            }),
            new CarouselWidget({
              images: [unsplashEurekaTower, unsplashNightBuilding, unsplashSkyscraperNight],
              showDescription: 'yes',
              descriptionLogo: logo2,
              description: carouselProjectDescription({ target: ourClients }),
            }),
            new CarouselWidget({
              images: [unsplashLongWhiteTable, unsplashSpeakerShelf, unsplashSparseDesk],
              showDescription: 'yes',
              descriptionLogo: logo3,
              description: carouselProjectDescription({ target: ourClients }),
            }),
          ],
        }),
        new SectionWidget({ content: [
          new HeadlineWidget({
            headline: 'And many many more...',
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
          }),
          new ColumnWidget({
            nrOfColumns: '4',
            verticallyAligned: 'yes',
            column1: [new ImageWidget({ image: logo1, alignment: 'center' })],
            column2: [new ImageWidget({ image: logo2, alignment: 'center' })],
            column3: [new ImageWidget({ image: logo3, alignment: 'center' })],
            column4: [new ImageWidget({ image: logo4, alignment: 'center' })],
          }),
          new ColumnWidget({
            nrOfColumns: '4',
            verticallyAligned: 'yes',
            column1: [new ImageWidget({ image: logo5, alignment: 'center' })],
            column2: [new ImageWidget({ image: logo6, alignment: 'center' })],
            column3: [new ImageWidget({ image: logo7, alignment: 'center' })],
            column4: [new ImageWidget({ image: logo8, alignment: 'center' })],
          }),
          new ColumnWidget({
            nrOfColumns: '4',
            verticallyAligned: 'yes',
            column1: [new ImageWidget({ image: logo8, alignment: 'center' })],
            column2: [new ImageWidget({ image: logo4, alignment: 'center' })],
            column3: [new ImageWidget({ image: logo5, alignment: 'center' })],
            column4: [new ImageWidget({ image: logo2, alignment: 'center' })],
          }),
          new ColumnWidget({
            nrOfColumns: '4',
            verticallyAligned: 'yes',
            column1: [new ImageWidget({ image: logo1, alignment: 'center' })],
            column2: [new ImageWidget({ image: logo8, alignment: 'center' })],
            column3: [new ImageWidget({ image: logo2, alignment: 'center' })],
            column4: [new ImageWidget({ image: logo3, alignment: 'center' })],
          }),
        ] }),
        new SectionWidget({ content: [
          new HeadlineWidget({
            headline: 'What our clients say',
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
          }),
        ] }),
        new SectionWidget({
          backgroundColor: 'dark-image',
          backgroundImage: unsplashWhiteMeetingRoom,
          content: [
            new TestimonialSliderWidget({
              testimonials: [
                new TestimonialWidget({
                  testimonial: loremIpsum({ units: 'sentences', count: 2 }),
                  author: 'Anna Boris, CEO @ United Company',
                  authorImage: unsplashFemalePortrait4Square,
                }),
                new TestimonialWidget({
                  testimonial: loremIpsum({ units: 'sentences', count: 2 }),
                  author: 'Derik Hoff, CTO @ Ultimate Business',
                  authorImage: unsplashMalePortrait2Square,
                }),
                new TestimonialWidget({
                  testimonial: loremIpsum({ units: 'sentences', count: 2 }),
                  author: 'Jane Doe, CEO @ Finances Inc.',
                  authorImage: unsplashFemalePortrait3Square,
                }),
                new TestimonialWidget({
                  testimonial: loremIpsum({ units: 'sentences', count: 2 }),
                  author: 'Christopher Stan, CEO @ InnoTech',
                  authorImage: unsplashMalePortrait3Square,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    const about = Page.create({
      _path: '/about',
      _permalink: 'about',
      title: 'About',
      childOrder: [ourWork, ourClients, jobs, contact, events],
      navigationStyle: 'transparentDark medium-height',
      navigationBackgroundImage: unsplashDimLaptopStand,
      body: [
        new SectionWidget({
          content: [
            new HeadlineWidget({
              headline: 'Who we are',
              level: 'h1',
              style: 'h2',
            }),
            new HeadlineWidget({
              level: 'h2',
              style: 'h4',
              headline: loremIpsum({ count: 3 }),
            }),
            new TextWidget({
              text: loremIpsum({
                units: 'paragraphs',
                format: 'html',
                count: 4,
                paragraphLowerBound: 4,
                paragraphUpperBound: 10,
              }),
            }),
          ],
        }),
        new SectionWidget({
          backgroundColor: 'dark-image',
          backgroundImage: unsplashNeonTrue,
          content: [
            new ColumnWidget({
              nrOfColumns: '4',
              column1: [
                new FactWidget({
                  value: '134',
                  key: loremIpsum({ units: 'words', count: 3 }),
                }),
              ],
              column2: [
                new FactWidget({
                  value: '43',
                  key: loremIpsum({ units: 'words', count: 3 }),
                }),
              ],
              column3: [
                new FactWidget({
                  value: '13',
                  key: loremIpsum({ units: 'words', count: 3 }),
                }),
              ],
              column4: [
                new FactWidget({
                  value: '65',
                  key: loremIpsum({ units: 'words', count: 3 }),
                }),
              ],
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new HeadlineWidget({
              level: 'h1',
              style: 'h2',
              showDividingLine: 'yes',
              headline: 'Meet our awarded team',
            }),
            new HeadlineWidget({
              level: 'h2',
              style: 'h4',
              alignment: 'center',
              headline: loremIpsum({ count: 2 }),
            }),
            new ColumnWidget({
              nrOfColumns: '3',
              column1: [
                new BoxWidget({
                  body: [
                    new ImageWidget({ image: unsplashFemalePortrait3Square }),
                    new HeadlineWidget({
                      headline: 'Jane Morgan',
                      level: 'h3',
                      style: 'h3',
                      alignment: 'center',
                    }),
                    new HeadlineWidget({
                      headline: 'Product Research Director',
                      level: 'h5',
                      style: 'h5',
                      showDividingLine: 'yes',
                      marginDisabled: 'yes',
                    }),
                    createRandomIconListWidget(),
                  ],
                }),
              ],
              column2: [
                new BoxWidget({
                  body: [
                    new ImageWidget({ image: unsplashMalePortrait3Square }),
                    new HeadlineWidget({
                      headline: 'Peter Doe',
                      level: 'h3',
                      style: 'h3',
                      alignment: 'center',
                    }),
                    new HeadlineWidget({
                      headline: 'Internal Applications Supervisor',
                      level: 'h5',
                      style: 'h5',
                      showDividingLine: 'yes',
                      marginDisabled: 'yes',
                    }),
                    createRandomIconListWidget(),
                  ],
                }),
              ],
              column3: [
                new BoxWidget({
                  body: [
                    new ImageWidget({ image: unsplashFemalePortrait4Square }),
                    new HeadlineWidget({
                      headline: 'Susan Summer',
                      level: 'h3',
                      style: 'h3',
                      alignment: 'center',
                    }),
                    new HeadlineWidget({
                      headline: 'Regional Agent',
                      level: 'h5',
                      style: 'h5',
                      showDividingLine: 'yes',
                      marginDisabled: 'yes',
                    }),
                    createRandomIconListWidget(),
                  ],
                }),
              ],
            }),
            new ColumnWidget({
              nrOfColumns: '3',
              column1: [
                new BoxWidget({
                  body: [
                    new ImageWidget({ image: unsplashMalePortrait2Square }),
                    new HeadlineWidget({
                      headline: 'Clarius Ceasar',
                      level: 'h3',
                      style: 'h3',
                      alignment: 'center',
                    }),
                    new HeadlineWidget({
                      headline: 'Dynamic Operations Representative',
                      level: 'h5',
                      style: 'h5',
                      showDividingLine: 'yes',
                      marginDisabled: 'yes',
                    }),
                    createRandomIconListWidget(),
                  ],
                }),
              ],
              column2: [
                new BoxWidget({
                  body: [
                    new ImageWidget({ image: unsplashFemalePortrait5Square }),
                    new HeadlineWidget({
                      headline: 'Anna Corn',
                      level: 'h3',
                      style: 'h3',
                      alignment: 'center',
                    }),
                    new HeadlineWidget({
                      headline: 'Regional Brand Producer',
                      level: 'h5',
                      style: 'h5',
                      showDividingLine: 'yes',
                      marginDisabled: 'yes',
                    }),
                    createRandomIconListWidget(),
                  ],
                }),
              ],
              column3: [
                new BoxWidget({
                  body: [
                    new ImageWidget({ image: unsplashMalePortrait1Square }),
                    new HeadlineWidget({
                      headline: 'Jason John',
                      level: 'h3',
                      style: 'h3',
                      alignment: 'center',
                    }),
                    new HeadlineWidget({
                      headline: 'Dynamic Paradigm Director',
                      level: 'h5',
                      style: 'h5',
                      showDividingLine: 'yes',
                      marginDisabled: 'yes',
                    }),
                    createRandomIconListWidget(),
                  ],
                }),
              ],
            }),
          ],
        }),
        new SectionWidget({
          backgroundColor: 'dark-image',
          backgroundImage: unsplashSilhouetteDancing,
          content: [
            new HeadlineWidget({
              headline: 'We are hiring',
              alignment: 'center',
            }),
            new TextWidget({
              alignment: 'center',
              text: loremIpsum({
                units: 'paragraphs',
                format: 'html',
                count: 1,
                paragraphLowerBound: 4,
                paragraphUpperBound: 5,
              }),
            }),
            new ButtonWidget({
              alignment: 'center',
              target: new Scrivito.Link({
                title: 'See full job list',
                obj: jobs,
              }),
            }),
          ],
        }),
      ],
    });

    // PRICING
    const pricing = Page.create({
      _path: '/pricing',
      _permalink: 'pricing',
      title: 'Pricing',
      body: [
        new SectionWidget({
          content: [
            new HeadlineWidget({
              headline: 'A great solution with great features',
              level: 'h1',
              showDividingLine: 'yes',
              style: 'h2',
            }),
            new HeadlineWidget({
              headline: loremIpsum({ count: 2 }),
              level: 'h2',
              style: 'h4',
              alignment: 'center',
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new ColumnWidget({
              nrOfColumns: '2',
              verticallyAligned: 'yes',
              column1: [new ImageWidget({ image: ipad })],
              column2: [
                new HeadlineWidget({
                  level: 'h3',
                  style: 'h2',
                  headline: 'Content Management for React Apps',
                }),
                new TextWidget({
                  text: loremIpsum({
                    units: 'paragraphs',
                    format: 'html',
                    count: 1,
                    paragraphLowerBound: 5,
                    paragraphUpperBound: 5,
                  }),
                }),
                new ButtonWidget({
                  target: new Scrivito.Link({
                    title: 'Call to action',
                    obj: root,
                  }),
                }),
              ],
            }),
            new ColumnWidget({
              nrOfColumns: '2',
              verticallyAligned: 'yes',
              column1: [
                new HeadlineWidget({
                  level: 'h3',
                  style: 'h2',
                  headline: 'Fully Fledged CMS Service',
                }),
                new TextWidget({
                  text: loremIpsum({
                    units: 'paragraphs',
                    format: 'html',
                    count: 1,
                    paragraphLowerBound: 5,
                    paragraphUpperBound: 5,
                  }),
                }),
                new ButtonWidget({
                  target: new Scrivito.Link({
                    title: 'Call to action',
                    obj: root,
                  }),
                }),
              ],
              column2: [new ImageWidget({ image: iphone })],
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new ColumnWidget({
              nrOfColumns: '2',
              column1: [createFeaturePanelWidget('fa-check', 'Drag & drop widgets')],
              column2: [createFeaturePanelWidget('fa-cogs', 'Easy customization')],
            }),
            new ColumnWidget({
              nrOfColumns: '2',
              column1: [createFeaturePanelWidget('fa-file-text-o', 'Full documentation')],
              column2: [createFeaturePanelWidget('fa-comments-o', 'Full support')],
            }),
            new ColumnWidget({
              nrOfColumns: '2',
              column1: [createFeaturePanelWidget('fa-clone', 'Tons of widgets')],
              column2: [createFeaturePanelWidget('fa-mobile', 'Fully responsive')],
            }),
            new HeadlineWidget({
              headline: 'Choose your plan',
              level: 'h1',
              showDividingLine: 'yes',
              style: 'h2',
            }),
          ],
        }),
        new SectionWidget({
          backgroundColor: 'dark-image',
          backgroundImage: unsplashHotpink,
          content: [
            createPricingWidget(root),
          ],
        }),
        new SectionWidget({
          content: [
            new HeadlineWidget({
              headline: 'Compare all features',
              level: 'h3',
              showDividingLine: 'yes',
              style: 'h2',
            }),
            new HeadlineWidget({
              alignment: 'center',
              headline: loremIpsum({ count: '2' }),
              level: 'h2',
              style: 'h4',
            }),
            new TableWidget({
              rows: [
                new TableRowWidget({
                  feature: 'Key feature 1',
                  basicFeature: [new TextWidget({ text: '<p><b>5</b></p>' })],
                  teamFeature: [new TextWidget({ text: '<p><b>10</b></p>' })],
                  corporateFeature: [new TextWidget({ text: '<p><b>unlimited</b></p>' })],
                }),
                new TableRowWidget({
                  feature: 'Key feature 2',
                  basicFeature: [new TextWidget({ text: '<p><b>20</b></p>' })],
                  teamFeature: [new TextWidget({ text: '<p><b>40</b></p>' })],
                  corporateFeature: [new TextWidget({ text: '<p><b>unlimited</b></p>' })],
                }),
                new TableRowWidget({
                  feature: 'Key feature 3',
                  basicFeature: [new TextWidget({ text: '<p><b>9/5</b></p>' })],
                  teamFeature: [new TextWidget({ text: '<p><b>12/7</b></p>' })],
                  corporateFeature: [new TextWidget({ text: '<p><b>24/7</b></p>' })],
                }),
                new TableRowWidget({
                  feature: 'Key feature 4',
                  basicFeature: [createCheckIcon()],
                  teamFeature: [createCheckIcon()],
                  corporateFeature: [createCheckIcon()],
                }),
                new TableRowWidget({
                  feature: 'Key feature 5',
                  basicFeature: [createCheckIcon()],
                  teamFeature: [createCheckIcon()],
                  corporateFeature: [createCheckIcon()],
                }),
                new TableRowWidget({
                  feature: 'Key feature 6',
                  basicFeature: [createCheckIcon()],
                  teamFeature: [createCheckIcon()],
                  corporateFeature: [createCheckIcon()],
                }),
                new TableRowWidget({
                  feature: 'Key feature 7',
                  basicFeature: [createCheckIcon()],
                  teamFeature: [createCheckIcon()],
                  corporateFeature: [createCheckIcon()],
                }),
                new TableRowWidget({
                  feature: 'Key feature 8',
                  basicFeature: [new TextWidget({ text: '<p><b>-</b></p>' })],
                  teamFeature: [createCheckIcon()],
                  corporateFeature: [createCheckIcon()],
                }),
                new TableRowWidget({
                  feature: 'Key feature 9',
                  basicFeature: [new TextWidget({ text: '<p><b>-</b></p>' })],
                  teamFeature: [new TextWidget({ text: '<p><b>-</b></p>' })],
                  corporateFeature: [createCheckIcon()],
                }),
              ],
              featureHeadline: 'Features',
              basicPlanHeadline: 'Basic',
              teamPlanHeadline: 'Team',
              corporatePlanHeadline: 'Corporate',
              pricingRow: 'Prices',
              currency: '€',
              basicPlanPrice: '29',
              teamPlanPrice: '59',
              corporatePlanPrice: '199',
              basicPlanPeriod: '/mo',
              teamPlanPeriod: '/mo',
              corporatePlanPeriod: '/mo',
            }),
          ],
        }),
      ],
    });

    Job.create({
      image: unsplashLaptopKeyboard,
      location: 'Berlin, Germany',
      title: 'SEO specialist',
      body: createRandomBody(),
    });

    Job.create({
      image: unsplashiPadCharts,
      location: 'Berlin, Germany',
      title: 'Marketing Manager',
      body: createRandomBody(),
    });

    Job.create({
      image: unsplashUxDesigner,
      location: 'Berlin, Germany',
      title: 'UX Designer',
      body: createRandomBody(),
    });

    Job.create({
      image: unsplashTypistLaptop,
      location: 'Berlin, Germany',
      title: 'Full Stack Developer',
      body: createRandomBody(),
    });

    Job.create({
      image: unsplashNotebookPencil,
      location: 'Paris, France',
      title: 'Texter',
      body: createRandomBody(),
    });

    Job.create({
      image: unsplashMacbookDeveloper,
      location: 'Frankfurt, Germany',
      title: 'Full Stack Developer',
      body: createRandomBody(),
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

    const authors = [janeDoe, johnDoe];

    const postImages = [
      unsplashAllesCandleWoodTable,
      unsplashAppleWorkstationCalendarIpad,
      unsplashAppleWorkstationWindcave,
      unsplashBikelane,
      unsplashBlackTablesWhiteChairs,
      unsplashBuildingCornerClouds,
      unsplashBusinessPaperRedSocks,
      unsplashBusinessPaperWristwatch,
      unsplashDeskRuler,
      unsplashLadyInCoffeeShop,
      unsplashLaptopKeyboard,
      unsplashOfficeWindow,
      unsplashOfficeWithGlass,
      unsplashOutdoorMeeting,
      unsplashPlant,
      unsplashScreenWithClock,
      unsplashWhiteMeetingRoom,
      null,
      null,
      null,
      null,
      null,
      null,
    ];

    const eventImages = [
      unsplashAllesCandleWoodTable,
      unsplashAppleWorkstationCalendarIpad,
      unsplashAppleWorkstationWindcave,
      unsplashBlackTablesWhiteChairs,
      unsplashBuildingCornerClouds,
      unsplashBusinessPaperRedSocks,
      unsplashBusinessPaperWristwatch,
      unsplashDeskRuler,
      unsplashLadyInCoffeeShop,
      unsplashLaptopKeyboard,
      unsplashOfficeWindow,
      unsplashOfficeWithGlass,
      unsplashOutdoorMeeting,
      unsplashPlant,
      unsplashScreenWithClock,
      unsplashWhiteMeetingRoom,
    ];

    const locations = [
      'Berlin',
      'Berlin',
      'New York',
      'Hamburg',
      'Frankfurt',
      'Berlin',
      'New York',
      'Frankfurt',
      'Hamburg',
      'Dresden',
      'Leipzig',
      'Berlin',
    ];
    const titles = [
      'Javascript Event for Beginners',
      'Just an Event for Developers',
      'SEO Event for Designers',
      'Meeting Event for Designers',
      'Design Event for Beginners',
      'Marketing Event for Developers',
      'Meeting Event for Managers',
      'Meeting Event for Everyone',
      'Meeting Event for Javascript Developers',
      'Management Event for Beginners',
      'SEO Event for Beginners',
      'Meeting Event for Developers',
    ];

    const tags = [
      ['Development'],
      ['Development'],
      ['Design', 'Marketing'],
      ['Design'],
      ['Design'],
      ['Marketing'],
      ['Business'],
      ['Development', 'Design', 'Marketing', 'Business'],
      ['Development'],
      ['Management'],
      ['Marketing'],
      ['Development'],
    ];

    // Events
    for (let i = 0; i < 12; i += 1) {
      Event.create({
        date: randomPastDate(),
        image: random(eventImages),
        location: locations[i],
        title: titles[i],
        tags: tags[i],
        body: [
          new SectionWidget({
            content: [
              new TextWidget({
                text: loremIpsum({
                  units: 'paragraphs',
                  format: 'html',
                  count: 2,
                  paragraphLowerBound: 1,
                  paragraphUpperBound: 10,
                }),
              }),
            ],
          }),
        ],
      });
    }

    // BlogPosts
    for (let i = 0; i < 20; i += 1) {
      BlogPost.create({
        author: random(authors),
        title: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 5 })),
        titleImage: random(postImages),
        subtitle: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 7 })),
        tags: randomShuffle(DEFAULT_TAGS),
        publishedAt: randomPastDate(),
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
              new ImageWidget({ image: random(postImages.filter(Boolean)) }),
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
    }

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
            alignment: 'center',
            headline: loremIpsum({ count: 2 }),
          }),
          new BlogOverviewWidget({}),
        ] }),
      ],
    });

    // WIDGETS AND PAGES
    const homeV1 = Page.create({
      _path: '/widgets_and_pages/home_v1',
      title: 'Homepage variant 1',
      navigationBackgroundImage: unsplashArchitecture,
      navigationStyle: 'transparentDark full-height',
      navigationSection: [
        new ColumnWidget({
          nrOfColumns: '2',
          verticallyAligned: 'yes',
          column1: [
            new HeadlineWidget({
              headline: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 4 })),
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
              target: new Scrivito.Link({
                title: 'Call to action',
                obj: root,
              }),
            }),
          ],
          column2: [
            new SignUpFormWidget({
              title: 'Sign up to Scrivito',
              buttonText: 'Sign up to Scrivito now',
            }),
          ],
        }),
      ],
      body: [
        new SectionWidget({ content: [
          new HeadlineWidget({
            headline: 'Our top features',
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
          }),
          new ColumnWidget({
            nrOfColumns: '2',
            verticallyAligned: 'yes',
            column1: [new ImageWidget({ image: unsplashMeetingRoomthree })],
            column2: [
              new HeadlineWidget({
                level: 'h3',
                style: 'h2',
                headline: 'Content Management for Professionals',
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
                target: new Scrivito.Link({
                  title: 'Call to action',
                  obj: root,
                }),
              }),
            ],
          }),
          new ColumnWidget({
            nrOfColumns: '2',
            verticallyAligned: 'yes',
            column1: [
              new HeadlineWidget({
                level: 'h3',
                style: 'h2',
                headline: 'Content Management for Professionals',
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
                target: new Scrivito.Link({
                  title: 'Call to action',
                  obj: root,
                }),
              }),
            ],
            column2: [new ImageWidget({ image: unsplashModernChairDesk })],
          }),
        ] }),
        new SectionWidget({ content: [
          new HeadlineWidget({
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
            headline: 'Great feature overview',
          }),
          new HeadlineWidget({
            level: 'h2',
            style: 'h4',
            alignment: 'center',
            headline: loremIpsum({ count: 2 }),
          }),
          new ColumnWidget({
            nrOfColumns: '3',
            column1: [
              createBoxWidgetWithIconHeadlineAndText('fa-picture-o', 'Drag & drop widgets'),
            ],
            column2: [
              createBoxWidgetWithIconHeadlineAndText('fa-mouse-pointer', 'WYSIWYG editing'),
            ],
            column3: [
              createBoxWidgetWithIconHeadlineAndText('fa-cogs', 'Easy customization'),
            ],
          }),
          new ColumnWidget({
            nrOfColumns: '3',
            column1: [
              createBoxWidgetWithIconHeadlineAndText('fa-comments-o', 'Full support'),
            ],
            column2: [
              createBoxWidgetWithIconHeadlineAndText('fa-clone', 'Tons of widgets'),
            ],
            column3: [
              createBoxWidgetWithIconHeadlineAndText('fa-mobile', 'Fully responsive'),
            ],
          }),
        ] }),
        new SectionWidget({
          useFullWidth: 'yes',
          content: [
            new HeadlineWidget({
              headline: 'Watch our video',
              level: 'h1',
              showDividingLine: 'yes',
              style: 'h2',
            }),
            new VideoWidget({
              source: videoWaterfall1,
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new HeadlineWidget({
              level: 'h1',
              style: 'h2',
              showDividingLine: 'yes',
              headline: 'Our latest blog news',
            }),
            new BlogOverviewWidget({
              maxItems: 2,
            }),
            new ButtonWidget({
              alignment: 'center',
              target: new Scrivito.Link({
                title: 'Load all blog entries',
                obj: blog,
              }),
            }),
          ],
        }),
      ],
    });
    const homeV2 = Page.create({
      _path: '/widgets_and_pages/home_v2',
      title: 'Homepage variant 2',
      body: [
        new SectionWidget({ content: [
          new ColumnWidget({
            nrOfColumns: '2',
            verticallyAligned: 'yes',
            column1: [
              new HeadlineWidget({
                level: 'h1',
                style: 'h2',
                headline: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 5 })),
              }),
              new ColumnWidget({
                nrOfColumns: '2',
                column1: [
                  new TickListWidget({
                    items: [
                      new TickListItemWidget({ statement: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 4 })) }),
                      new TickListItemWidget({ statement: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 4 })) }),
                      new TickListItemWidget({ statement: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 4 })) }),
                    ],
                  }),
                ],
                column2: [
                  new TickListWidget({
                    items: [
                      new TickListItemWidget({ statement: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 4 })) }),
                      new TickListItemWidget({ statement: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 4 })) }),
                      new TickListItemWidget({ statement: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 4 })) }),
                    ],
                  }),
                ],
              }),
              new ButtonWidget({
                target: new Scrivito.Link({
                  title: 'Call to action',
                  obj: root,
                }),
              }),
            ],
            column2: [
              new ImageWidget({ image: iphone }),
            ],
          }),
        ] }),
        new SectionWidget({ content: [
          new HeadlineWidget({
            headline: 'Our top features',
            level: 'h1',
            showDividingLine: 'yes',
            style: 'h2',
          }),
          new TopFeaturesWidget({
            leftColumn: [
              new HeadlineWidget({
                headline: 'Amazing features',
                alignment: 'right',
                level: 'h3',
                style: 'h3',
              }),
              new TextWidget({
                alignment: 'right',
                text: loremIpsum({
                  units: 'paragraphs',
                  format: 'html',
                  count: 1,
                  paragraphLowerBound: 2,
                  paragraphUpperBound: 2,
                }),
              }),
              new HeadlineWidget({
                headline: 'Easy to use',
                alignment: 'right',
                level: 'h3',
                style: 'h3',
              }),
              new TextWidget({
                alignment: 'right',
                text: loremIpsum({
                  units: 'paragraphs',
                  format: 'html',
                  count: 1,
                  paragraphLowerBound: 2,
                  paragraphUpperBound: 2,
                }),
              }),
            ],
            image: iphoneFront,
            rightColumn: [
              new HeadlineWidget({
                headline: 'Cool and fresh design',
                level: 'h3',
                style: 'h3',
              }),
              new TextWidget({
                text: loremIpsum({
                  units: 'paragraphs',
                  format: 'html',
                  count: 1,
                  paragraphLowerBound: 2,
                  paragraphUpperBound: 2,
                }),
              }),
              new HeadlineWidget({
                headline: 'Full responsive',
                level: 'h3',
                style: 'h3',
              }),
              new TextWidget({
                text: loremIpsum({
                  units: 'paragraphs',
                  format: 'html',
                  count: 1,
                  paragraphLowerBound: 2,
                  paragraphUpperBound: 2,
                }),
              }),
            ],
          }),
        ] }),
        new SectionWidget({
          backgroundColor: 'greywhite',
          content: [
            new ColumnWidget({
              nrOfColumns: '4',
              column1: [
                new FactWidget({
                  value: '134',
                  key: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 3 })),
                }),
              ],
              column2: [
                new FactWidget({
                  value: '43',
                  key: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 3 })),
                }),
              ],
              column3: [
                new FactWidget({
                  value: '13',
                  key: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 3 })),
                }),
              ],
              column4: [
                new FactWidget({
                  value: '65',
                  key: capitalizeFirstLetter(loremIpsum({ units: 'words', count: 3 })),
                }),
              ],
            }),
          ],
        }),
        new SectionWidget({ content: [
          new HeadlineWidget({
            headline: 'Short collection of our awarded work',
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
          }),
          new HeadlineWidget({
            alignment: 'center',
            level: 'h2',
            style: 'h4',
            headline: loremIpsum({ count: 3 }),
          }),
        ] }),
        new SectionWidget({
          useFullWidth: 'yes',
          paddingDisabled: 'yes',
          content: [
            new ThumbnailGalleryWidget({
              images: [
                new ThumbnailGalleryImageWidget({
                  title: 'Project 01',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashFinanceIpadCoffee,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 02',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashHoleyKneesCollage,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 03',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashLadyWalkingNight,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 04',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashLookupHighrise,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 05',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashMainstreetBlackcoat,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 06',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashManCheckingWatch,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 07',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashManTieStraighten,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 08',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashMeetingRoomMetal,
                }),
              ],
            }),
          ],
        }),
        new SectionWidget({ content: [
          new HeadlineWidget({
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
            headline: 'Great feature overview',
          }),
          new HeadlineWidget({
            level: 'h2',
            style: 'h4',
            alignment: 'center',
            headline: loremIpsum({ count: 2 }),
          }),
          new ColumnWidget({
            nrOfColumns: '3',
            column1: [
              createBoxWidgetWithIconHeadlineAndText('fa-picture-o', 'Drag & drop widgets'),
            ],
            column2: [
              createBoxWidgetWithIconHeadlineAndText('fa-mouse-pointer', 'WYSIWYG editing'),
            ],
            column3: [
              createBoxWidgetWithIconHeadlineAndText('fa-cogs', 'Easy customization'),
            ],
          }),
          new ColumnWidget({
            nrOfColumns: '3',
            column1: [
              createBoxWidgetWithIconHeadlineAndText('fa-comments-o', 'Full support'),
            ],
            column2: [
              createBoxWidgetWithIconHeadlineAndText('fa-clone', 'Tons of widgets'),
            ],
            column3: [
              createBoxWidgetWithIconHeadlineAndText('fa-mobile', 'Fully responsive'),
            ],
          }),
        ] }),
        new SectionWidget({
          backgroundColor: 'dark-image',
          backgroundImage: unsplashSilhouetteDancing,
          content: [
            new HeadlineWidget({
              headline: 'We are hiring',
              alignment: 'center',
            }),
            new TextWidget({
              alignment: 'center',
              text: loremIpsum({
                units: 'paragraphs',
                format: 'html',
                count: 1,
                paragraphLowerBound: 4,
                paragraphUpperBound: 5,
              }),
            }),
            new ButtonWidget({
              alignment: 'center',
              target: new Scrivito.Link({
                title: 'See full job list',
                obj: jobs,
              }),
            }),
          ],
        }),
      ],
    });
    const widgetsAndPages = Page.create({
      _path: '/widgets_and_pages',
      title: 'Widgets & Pages',
      childOrder: [homeV1, homeV2, landingPage],
      body: [
        new SectionWidget({ content: [
          new HeadlineWidget({ headline: 'Widgets & Pages' }),
        ] }),
      ],
    });

    // Search results page
    SearchResults.create({
      navigationBackgroundImage: unsplashGlassesSunset,
      _permalink: 'search_results',
    });

    // Obj.root()
    root.update({
      childOrder: [product, about, pricing, blog, widgetsAndPages],
      logoDark: scrivitoLogoDark,
      logoWhite: scrivitoLogoWhite,
      navigationBackgroundImage: unsplashHandcraft,
      navigationStyle: 'transparentDark full-height',
      navigationSection: [
        new HeadlineWidget({
          alignment: 'center',
          headline: 'Amazing hero widget',
        }),
        new TextWidget({
          alignment: 'center',
          text: loremIpsum({
            units: 'paragraphs',
            format: 'html',
            count: 1,
            paragraphLowerBound: 3,
            paragraphUpperBound: 5,
          }),
        }),
        new ButtonWidget({
          alignment: 'center',
          target: new Scrivito.Link({
            title: 'Call to action',
            obj: root,
          }),
        }),
      ],
      title: 'Welcome to the Scrivito Example App JS!',
      body: [
        new SectionWidget({ content: [
          new HeadlineWidget({
            headline: 'Our top features',
            level: 'h1',
            style: 'h2',
            showDividingLine: 'yes',
          }),
          new ColumnWidget({
            nrOfColumns: '2',
            verticallyAligned: 'yes',
            column1: [new ImageWidget({ image: unsplashLaptopKeyboard })],
            column2: [
              new HeadlineWidget({
                level: 'h3',
                style: 'h2',
                headline: 'Content Management for Professionals',
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
                target: new Scrivito.Link({
                  title: 'Call to action',
                  obj: root,
                }),
              }),
            ],
          }),
          new ColumnWidget({
            nrOfColumns: '2',
            verticallyAligned: 'yes',
            column1: [
              new HeadlineWidget({
                level: 'h3',
                style: 'h2',
                headline: 'Content Management for Professionals',
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
                target: new Scrivito.Link({
                  title: 'Call to action',
                  obj: root,
                }),
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
            nrOfColumns: '2',
            column1: [
              new ImageWidget({ image: homepage1Screenshot }),
              new HeadlineWidget({
                headline: 'Choose a different homepage variant',
                alignment: 'center',
                level: 'h3',
              }),
              new TextWidget({
                alignment: 'center',
                text: loremIpsum({
                  units: 'paragraphs',
                  format: 'html',
                  count: 1,
                  paragraphLowerBound: 3,
                  paragraphUpperBound: 5,
                }),
              }),
              new ButtonWidget({
                alignment: 'center',
                target: new Scrivito.Link({
                  title: 'Open Homepage variant 1',
                  obj: homeV1,
                }),
              }),
            ],
            column2: [
              new ImageWidget({ image: homepage2Screenshot }),
              new HeadlineWidget({
                headline: 'Choose a different homepage variant',
                alignment: 'center',
                level: 'h3',
              }),
              new TextWidget({
                alignment: 'center',
                text: loremIpsum({
                  units: 'paragraphs',
                  format: 'html',
                  count: 1,
                  paragraphLowerBound: 3,
                  paragraphUpperBound: 5,
                }),
              }),
              new ButtonWidget({
                alignment: 'center',
                target: new Scrivito.Link({
                  title: 'Open Homepage variant 2',
                  obj: homeV2,
                }),
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
            alignment: 'center',
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
            new ThumbnailGalleryWidget({
              images: [
                new ThumbnailGalleryImageWidget({
                  title: 'Project 01',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashWhiteMeetingRoom,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 02',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashHandcraft,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 03',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashLaptopKeyboard,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 04',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashDeskRuler,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 05',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashOfficeWithGlass,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 06',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashOfficeWindow,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 07',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashOutdoorMeeting,
                }),
                new ThumbnailGalleryImageWidget({
                  title: 'Project 08',
                  subtitle: loremIpsum({ units: 'words', count: 5 }),
                  image: unsplashScreenWithClock,
                }),
              ],
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new HeadlineWidget({
              level: 'h1',
              style: 'h2',
              showDividingLine: 'yes',
              headline: 'Our latest blog news',
            }),
            new BlogOverviewWidget({
              maxItems: 2,
            }),
            new ButtonWidget({
              alignment: 'center',
              target: new Scrivito.Link({
                title: 'Load all blog entries',
                obj: blog,
              }),
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new HeadlineWidget({
              level: 'h1',
              style: 'h2',
              showDividingLine: 'yes',
              headline: 'What people are saying',
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
    const footerLinks1 = new PageListWidget({
      headline: 'Homepages',
      pages: [root, homeV1, homeV2, landingPage],
    });
    const footerLinks2 = new PageListWidget({
      headline: 'About',
      pages: [jobs, contact, imprint, events, login],
    });

    root.update({
      footer: [
        new SectionWidget({
          backgroundColor: 'greywhite',
          content: [
            new ColumnWidget({
              nrOfColumns: '3',
              column1: [createAddressWidget({ showBorderBottom: false })],
              column2: [footerLinks1],
              column3: [footerLinks2],
            }),
          ],
        }),
        new SectionWidget({
          backgroundColor: 'greydark',
          paddingDisabled: 'yes',
          content: [
            createRandomIconListWidget(),
          ],
        }),
      ],
    });

    console.log('Created all objs/widget. Now uploading binaries...');
  });
}

export default importContent;
