// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });

$(document).ready(function(){ 

	$(".searchbar").hide();

	initialize();	

	$("input#autocomplete").geocomplete();

	$("#newc").css({ 'width' : $("#autocomplete").width() });

	$("#newc2").css({ 'width' : $("#autocomplete").width() });

	$("input#slider1").change(function(){
		$("#numval1").text(rate($("input#slider1").val()));
	});

	$("input#slider2").change(function(){
		$("#numval2").text(rate($("input#slider2").val()));
	});
	
	$("input#slider3").change(function(){
		$("#numval3").text(rate($("input#slider3").val()));
	});
	
	$("input#slider4").change(function(){
		$("#numval4").text(rate($("input#slider4").val()));
	});

	$(".upspace").css({ 'left' : (($(window).width() - $(".upspace").width())/2)+"px" });


	$(".square.find").click( function(){
		$(".searchbar").slideDown(350);
	});

	$(".search").keypress( function(e){
		if(e.which == 13)
			$("input.button.postfix").click();
	});



});

function rate(n){

	var str = "";

	switch(n){
		case "1":
			str = n.concat(" - Very bad");
			break;
		case "2":
			str = n.concat(" - Bad");
			break;
		case "3":
			str = n.concat(" - Decent");
			break;
		case "4":
			str = n.concat(" - Good");
			break;
		case "5":
			str = n.concat(" - Very Good");
			break;
		default:
			str = "Something is wrong!";
	}

	return str;

}

window.onresize = function() {
	rescale();
};

function rescale(){
	$(".upspace").css({ 'left' : (($(window).width() - $(".upspace").width())/2)+"px" })
};

function initialize() {
    var mapOptions = {
      center: { lat: 45, lng: -75},
      zoom: 7
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
}
