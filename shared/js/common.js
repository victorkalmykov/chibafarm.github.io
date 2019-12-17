$(function() {
	var hH = $("#headerSet").height();
	H_CHK();
	//resize
	window.onresize = function(){
		H_CHK();
	};
	
	function H_CHK(){
		hH = $("#headerSet").height();
		console.log(hH);
		
		if(hH < 270){
		   $("#contents").css("padding-top",hH);
		}
	}
	
	$("#panel-btn").click(function() {
    	$("#panel").slideToggle(200);
    	$("#panel-btn-icon").toggleClass("close");
	});
	
	$("#menu").hide();
	
	headerH = $("#header").height();
	$("#contents").css("padding-top",headerH);
	
	$("#menuB").click(function() {
		$("#menu").slideToggle(200);
		return false;
	});
});

$(function () {
    var t = $(".l-footer_pagetop");
    t.hide(),
    $(window).scroll(function () {
        $(this)
                .scrollTop() > 100
                ? t
                .fadeIn()
                : t
                .fadeOut()
    }),
    t.click(function () {
        return $("body,  html").animate({
            scrollTop: 0
        }, 500),
        !1
    })
});

// Printing page
(function( w, d ) {
	'use strict'; 
	d.querySelector( '.btn-print' ).addEventListener( 'click', function() { w.print(); }, false );
	}( window, document ));

