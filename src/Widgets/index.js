/* eslint no-unused-vars: "off" */

import AddressListItemWidget from './address_list_item_widget';
import AddressWidget from './address_widget';
import BlogOverviewWidget from './blog_overview_widget';
import ButtonWidget from './button_widget';
import CarouselWidget from './carousel_widget';
import ColumnWidget from './column_widget';
import ColumnContainerWidget from './column_container_widget';
import ContactFormWidget from './contact_form_widget';
import DividerWidget from './divider_widget';
import EventOverviewWidget from './event_overview_widget';
import FeaturePanelWidget from './feature_panel_widget';
import GalleryWidget from './gallery_widget';
import GoogleMapsWidget from './google_maps_widget';
import HeadlineWidget from './headline_widget';
import IconListItemWidget from './icon_list_item_widget';
import IconListWidget from './icon_list_widget';
import IconWidget from './icon_widget';
import ImageWidget from './image_widget';
import JobOverviewWidget from './job_overview_widget';
import LoginFormWidget from './login_form_widget';
import PageListWidget from './page_list_widget';
import PricingSpecWidget from './pricing_spec_widget';
import PricingWidget from './pricing_widget';
import SectionWidget from './section_widget';
import SignUpFormWidget from './sign_up_form_widget';
import TableRowWidget from './table_row_widget';
import TableWidget from './table_widget';
import TestimonialSliderWidget from './testimonial_slider_widget';
import TestimonialWidget from './testimonial_widget';
import TextWidget from './text_widget';
import ThumbnailGalleryImageWidget from './thumbnail_gallery_image_widget';
import ThumbnailGalleryWidget from './thumbnail_gallery_widget';
import TickListItemWidget from './tick_list_item_widget';
import TickListWidget from './tick_list_widget';
import VideoWidget from './video_widget';

function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Widgets/
importAll(require.context('./', true, /\.js$/));
