//= require_self

$(document).ready(function() {
  // ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.scrollappear').scrollAppear();
  }

  // TODO: reenable Zooming, once I figure out how dependencies work
  // Zooming
  /**
   * new Zooming(
   *   {customSize: '100%', scaleBase: 0.9, scaleExtra: 0}
   * ).listen('.zooming');
   */

  // Share buttons
  $('.article-share a').on('click', function() {
    window.open($(this).attr('href'), 'Share', 'width=200,height=200,noopener');
    return false;
  });
});
