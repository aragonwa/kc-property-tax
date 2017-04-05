// Remove search item
$('.search-item').click(function(){
  $(this).remove();
});

$('.row.row-offcanvas').addClass('onoffcanvas-container');

const $onoffcanvas = $("#onoffcanvas");
//Close panel on body click
$('body').click(function(e) {
  if (!$onoffcanvas.is(e.target) && $onoffcanvas.has(e.target).length === 0 && $onoffcanvas.hasClass('is-open')) {
    $onoffcanvas.onoffcanvas('hide');  // esc
  }
});
//Close panel on esc key
$(document).keyup(function(e) {
  if (e.keyCode === 27 && $onoffcanvas.hasClass('is-open')) $onoffcanvas.onoffcanvas('hide');  // esc
});
