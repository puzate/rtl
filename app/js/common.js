$(document).ready(function()  {
	$(".page-list-content_content_content_sort_sub-button").click(function() {
	  $(".page-list-content_content_content_sort_sub-menu").toggleClass("open");  
	});
});
$(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".page-list-content_content_content_sort_sub-menu").length == 0 && $target.closest(".page-list-content_content_content_sort_sub-button").length == 0) {
        $(".page-list-content_content_content_sort_sub-menu").removeClass("open");
    }
});