
jQuery(document).ready(function () {

  jQuery("#CertificationsGallery").nanogallery2({

    // ### gallery settings ### 


    itemsBaseURL: '../Resources/',
    galleryFilterTags: true,
    galleryFilterTagsMode: 'multiple',
    thumbnailAlignment: 'fillWidth',
    galleryDisplayMode: 'fullContent',
    gallerySorting: 'random',
    thumbnailGutterWidth: 10,
    thumbnailGutterHeight: 10,
    thumbnailBorderHorizontal: 2,
    thumbnailBorderVertical: 2,



    // THUMBNAIL TOOLS & LABEL
    thumbnailLabel: { display: true, position: 'onBottomOverImage', hideIcons: true, titleFontSize: '1em', align: 'center', titleMultiLine: true, displayDescription: false },
    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,

    // THUMBNAIL HOVER ANIMATION
    thumbnailHoverEffect2: 'label_font-size_1em_1.5em|title_backgroundColor_rgba(255, 255, 255, 0)_rgba(255,255,255,0)|title_color_#aaa_#fff|image_scale_1.00_1.10_5000|image_rotateZ_0deg_4deg_5000',
    touchAnimation: true,
    touchAutoOpenDelay: 800,

    // GALLERY THEME
    galleryTheme: {
      thumbnail: { titleShadow: 'none', titleColor: '#fff', borderColor: '#fff' },
      navigationBreadcrumb: { background: '#ffffff' },
      navigationFilter: { background: '#ffffff', backgroundSelected: '#a97ef4', color: '#fff' }
    },

    // DEEP LINKING
    locationHash: false,

    // ### gallery content ### 
    items: [
      { src: 'ProfileImage.png', srct: 'ProfileImage.png', title: 'Favicon' },
      { src: 'ConnectBG.gif', srct: 'ConnectBG.gif', title: 'ConnectBG' },
      { src: 'github.webp', srct: 'github.webp', title: 'GitHub logo' },
      { src: 'TimelineTitle.png', srct: 'TimelineTitle.png', title: 'TitleTexture' }

    ]
  });
});
