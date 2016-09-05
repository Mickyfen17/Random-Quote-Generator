$(document).ready(function() {
	$("#New-Quote").click(function() {
		 $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(data) {
		 	$("#quote").fadeOut(750, function() {
		 		$(this).html("\"" + data.quoteText + "\"").fadeIn(750);	
		 	});
		 	$("#author").fadeOut(750, function() {
		 		$(this).html(data.quoteAuthor).fadeIn(750);
		 		if (data.quoteAuthor === "") {
		 			$(this).html("Unknown");
		 		}
		 	});
		 });
	});
	$("#Twitter").click(function() {
		$(this).attr("href", "https://twitter.com/intent/tweet?hashtags=RandomQuote&text=" + $("#quote").html() + " " + $("#author").html());
	});
	$("#Facebook").click(function() {
		$(this).attr("href", "https://www.facebook.com/sharer/sharer.php?u=&t=" + $("#quote").html() + " " + $("#author").html());
	});
});

