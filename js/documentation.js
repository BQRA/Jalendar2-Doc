$(function () {
	
	hljs.initHighlightingOnLoad();

	// tab action
	$('.tab a').click(function(event) {
		var tabSel = $('.tab-container[data-name=' + $(this).parents('.tab').attr('data-name') + ']');
		tabSel.find('.tab-content').removeClass('selected');
		tabSel.find('.tab-content').eq($(this).index()).addClass('selected');
		$(this).parents('.tab').find('a').removeClass('selected');
		$(this).addClass('selected');
	});

});