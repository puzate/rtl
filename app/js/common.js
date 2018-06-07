$(document).ready(function()  {
	$(".page-list-content_content_content_sort_sub-button").click(function() {
	  $(".page-list-content_content_content_sort_sub-menu").toggleClass("open");  
	});
  var $img = $('.second-step_container_position_content_main_imgs .__full-img img'),
    dsrc = $img.attr('src');
  $('.second-step_container_position_content_main_imgs .__thumb-imgs img').click(function() {
  var $this = $(this);
    $img.attr('src', $this.data('image'));
  });
  $(".second-step_container_position:first-child .second-step_container_position_content.collapse").addClass("in");
  $('.second-step_container_position_content_sidebar button[type="button"]').click(function() {
	  $(this).closest('.second-step_container_position').next().find('.second-step_container_position_content').addClass('in');
	  $(this).closest('.second-step_container_position').addClass('accepted')
	});
	$('.second-step_container_position_btn-container button.__delete_position').click(function() {
		$(this).closest('.second-step_container_position').remove();
	});
});
$(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".page-list-content_content_content_sort_sub-menu").length == 0 && $target.closest(".page-list-content_content_content_sort_sub-button").length == 0) {
        $(".page-list-content_content_content_sort_sub-menu").removeClass("open");
    }
});