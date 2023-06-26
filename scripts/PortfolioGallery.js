function addEvent(obj, evType, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) {
    var r = obj.attachEvent("on" + evType, fn);
    return r;
  } else {

  }
}

addEvent($('*[data-ngy2action="close"]'), "click", function () {
  alert("Somehow attached handler!? (not expected)");
});



jQuery(document).ready(function () {

  jQuery("#CertificationsGallery").nanogallery2({

    // ### gallery settings ### 


    itemsBaseURL: '../Resources/',
    galleryFilterTags: true,
    galleryFilterTagsMode: 'multiple',
    thumbnailAlignment: 'fillWidth',
    imageTransition: 'slideAppear',
    viewerGallery: 'bottomOverMedia',
    viewerTheme: 'light',
    colorSchemeViewer: 'light',

    // GALLERY AND THUMBNAIL LAYOUT
    galleryDisplayMode: 'fullContent',
    gallerySorting: 'random',
    thumbnailHeight: 'auto', thumbnailWidth: '300',
    thumbnailBaseGridHeight: 50,
    thumbnailAlignment: 'fillWidth',
    thumbnailL1GutterWidth: 4,
    thumbnailL1GutterHeight: 4,
    thumbnailBorderHorizontal: 5,
    thumbnailBorderVertical: 5,

    viewerToolbar: {
      display: true,
      standard: 'previousButton, label, nextButton',
      minimized: 'previousButton, label, nextButton'
    },
    viewerTools: {
      topLeft: 'fullscreenButton, zoomButton, rotateLeft, rotateRight',
      topRight: 'closeButton'
    },



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
      thumbnail: { titleShadow: 'none', titleColor: '#fff', borderColor: '#fff', borderRadius: '15px' },
      navigationBreadcrumb: { background: '#ffffff' },
      navigationFilter: { background: '#ffffff', backgroundSelected: '#a97ef4', color: '#fff' }
    },

    // ### gallery content ### 
    items: [
      { src: 'ProfileImage.png', srct: 'ProfileImage.png', title: 'Favicon' },
      { src: 'ConnectBG.gif', srct: 'ConnectBG.gif', title: 'ConnectBG' },
      { src: 'github.webp', srct: 'github.webp', title: 'GitHub logo' },
      { src: 'TimelineTitle.png', srct: 'TimelineTitle.png', title: 'TitleTexture' }

    ]
  });
});
