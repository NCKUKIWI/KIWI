

$(".menu").load('menu.html');
	
function menustart() {

	// Initialize

	var search_open = 0;
	// var filter_open = 0;
	var sidebar_open = 0;
	var winwidth = $(window).width(); 
	var menuheight = 65;
	var sidewidth = 250;
	$(".searchbar").css("width",(winwidth - menuheight*3 - sidewidth));
	$(".searchbar").hide();
	$(".start").hide();
	$(".cover").hide();


	// Listener

	$(".burger").click(function(){
		sideswitch();
	});

	$(".search")
		.mouseenter(function(){
			$(".searchicon").attr("src","img/search_g.png");
		})
		.mouseleave(function(){
			$(".searchicon").attr("src","img/search_b.png");
		})
		.click(function(){
			menuswitch();
		});

	$(".filter")
		.mouseenter(function(){
			$(".filtericon").attr("src","img/filter_g.png");
		})
		.mouseleave(function(){
			$(".filtericon").attr("src","img/filter_b.png");
		// })
		// .click(function(){
		// 	filterswitch();
		});

	$(".cover").click(function(){ menuswitch();});


	// Functions

	function sideswitch() {
		if (sidebar_open == 0){
			sidebar_open = 1 ;
			$(".sidebar").animate({"left": "+="+sidewidth }, 400);
			$(".sidestuff").animate({"width": "+="+sidewidth }, 400);
			$(".filteroption").animate({"width": "-="+sidewidth/6 }, 400);
			$(".courseinfo").animate({"width": "-="+sidewidth/6 }, 400);
			// $(".filteroption").animate({"left": "0" }, 400);
			// $(".courseinfo").animate({"left": "0" }, 400);
		}
		else if (sidebar_open == 1){
			sidebar_open = 0 ;
			$(".sidebar").animate({"left": "-="+sidewidth }, 400);
			$(".sidestuff").animate({"width": "-="+sidewidth }, 400);
			$(".filteroption").animate({"width": "+="+sidewidth/6 }, 400);
			$(".courseinfo").animate({"width": "+="+sidewidth/6 }, 400);
			// $(".filteroption").animate({"left": "10vw" }, 400);
			// $(".courseinfo").animate({"left": "10vw" }, 400);
		}
	}

	function menuswitch() {
		if (search_open == 0){
			search_open = 1 ;
			$(".filter").fadeOut(400);
			$(".title").fadeOut(400,function() {
				$(".cover").fadeIn(400);
				$(".start").fadeIn(400);
				$(".searchbar").fadeIn(400, function() {
					$(".start").fadeIn(800);
				});
			});
		}
		else if (search_open == 1){
			search_open = 0 ;
			$(".searchbar").fadeOut(400);
			$(".cover").fadeOut(400);
			$(".start").fadeOut(400,function() {
				$(".title").fadeIn(800);
				$(".filter").fadeIn(800);
			});
		}
	}

	// function filterswitch() {
	// 	if (filter_open == 0){
	// 		filter_open = 1 ;
	// 		$(".filtercont").animate({"top": "+="+menuheight }, 400);
	// 		$(".filterstuff").animate({"height": "+="+menuheight }, 400);
	// 	}
	// 	else if (filter_open == 1){
	// 		filter_open = 0 ;
	// 		$(".filtercont").animate({"top": "-="+menuheight }, 400);
	// 		$(".filterstuff").animate({"height": "-="+menuheight }, 400);
	// 	}
	// }

}


