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
		$("#numval1").text($("input#slider1").val());
	});

	$("input#slider2").change(function(){
		$("#numval2").text($("input#slider2").val());
	});
	
	$("input#slider3").change(function(){
		$("#numval3").text($("input#slider3").val());
	});
	
	$("input#slider4").change(function(){
		$("#numval4").text($("input#slider4").val());
	});

	$(".upspace").css({ 'left' : (($(window).width() - $(".upspace").width())/2)+"px" });


	$("a.square.find").click( function(){
		$(".searchbar").slideDown(350);
	});

	$(".search").keypress( function(e){
		if(e.which == 13)
			$("input.button.postfix").click();
	});



});

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
