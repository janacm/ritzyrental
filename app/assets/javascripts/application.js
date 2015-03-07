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

var latitudeG = "";
var longitudeG = "";

$(function(){ $(document).foundation(); });

$(document).ready(function(){ 

if($("input#autocomplete").length != 0){

	getLocation();	
	$("input#autocomplete").geocomplete();
	$("#newc").css({ 'width' : $("#autocomplete").width() });
	$("#newc2").css({ 'width' : $("#autocomplete").width() });

}

	// alert(window.location.pathname);

	// var stri = $.urlParam('search');

	// if(stri.length > 0){
		
	// var loc = decodeURIComponent($.urlParam('search')).replaceAll('+', ' ');

	// 	codeAddress(loc);

	// }

	$(".searchbar").hide();


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



	$.ajax({
    
        url: "http://www.ritzyrenter.co/reviews.json",
        dataType: "json", 
        cache: false,
        success: function (data) {

		console.log(data);


		}
	});





});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initialize);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

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

function initialize(position) {

	var pos;

	// if( latitudeG != "" ){
 //    	pos = { lat: latitudeG, lng: longitudeG };
 //    }else{
    	pos = { lat: position.coords.latitude, lng: position.coords.longitude };
    // }

    var mapOptions = {
      center: pos,
      zoom: 16
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

	var marker = new google.maps.Marker({
		position: pos,
	});

	marker.setMap(map);
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

String.prototype.replaceAll = function(search, replace)
{
    //if replace is null, return original string otherwise it will
    //replace search string with 'undefined'.
    if(!replace) 
        return this;

    return this.replace(new RegExp('[' + search + ']', 'g'), replace);
};


function codeAddress(address) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

	      latitudeG =  results[0].geometry.location.lat();
	      longitudeG = results[0].geometry.location.lng();
      } 
    });
  }