$(document).ready(function(){

		var t = function(){
			$("#countdown").each(function(){

				var counter = parseInt($(this).html());

				if (counter !== 0) {
					$(this).html(counter - 1);
				}
			});
		};

		setInterval(t, 1000);
});

