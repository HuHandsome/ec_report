var $body = $("body");
$body.css("font-size", $body.width() / 60);
$(window).on("resize", function() {
	$body.css("font-size", $body.width() / 60);
});
