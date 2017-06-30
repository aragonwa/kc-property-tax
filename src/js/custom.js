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

// $('#review-cart-total-update-btn').click(function() {
//   $inputs = $('.editable-input');
//   $inputs.replaceWith(function(){
//     if(!($inputs.hasClass('form-inline'))) {
//       return '<form class="form-inline editable-input" style="float:right"><div class="input-group"><span class="input-group-addon">$</span><input class="form-control" value="' + ($(this)[0].innerHTML).replace('$', '') + '"></input></div></form>';
//     } else {
//       return '<span class="editable-input">$'+$(this)[0][0].value+'</span>';
//     }
//   });
// });

