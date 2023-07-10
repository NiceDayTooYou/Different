$(document).ready(function () {
  $("#color_mode").on("change", function () {
    colorModePreview(this);
  })
});

function colorModePreview(ele) {
  if ($(ele).prop("checked") == true) {
    $('body').addClass('dark-mode');
  }
  else if ($(ele).prop("checked") == false) {
    $('body').removeClass('dark-mode');
  }
}