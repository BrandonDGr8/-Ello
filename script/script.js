$(document).ready(function () {
	$(".bbg").mouseenter(function () {
		$(this).fadeTo("fast", 0.9);
	});
	$(".bbg").mouseleave(function () {
		$(this).fadeTo("fast", 0.7);
	});
});