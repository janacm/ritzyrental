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

	initialize();	
	
	$("#autocomplete").geocomplete();

	$("#newc").css({ 'width' : $("#autocomplete").width() });

	$("input#slider1").change(function(){
		$("#numval1").text($("input#slider1").val());
	});

	// $()
	


});

function initialize() {
    var mapOptions = {
      center: { lat: -34.397, lng: 150.644},
      zoom: 10
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
}
