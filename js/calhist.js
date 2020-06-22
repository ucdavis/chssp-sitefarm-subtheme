// Add custom jQuery or Javascript here
// https://www.drupal.org/docs/8/api/javascript-api/javascript-api-overview
(function ($, Drupal) {
  "use strict";
  
  Drupal.behaviors.customBehavior = {
    attach: function (context, settings) {
		
$( document ).ready( function(){

var content = $("#mainContent").html();
// show base map, title & text
removeAnchors();
showBaseMap();

/* set up fancybox */
// default background of fancybox is #F9F9F9 - used for extra canvas on images to format box
// mdhistory6 has an example of usage

/**
  example of how to turn the links into mouseovers on Base Map
  - may need to do this if they don't like the current rollover / highlight / click behavior
$("#rage_majorca").mouseover(function(){
  $("#rage_majorca").trigger('click');
});
*/
/*$('[data-fancybox="fig"]').fancybox({
    idleTime: false,
    infobar: false,
    caption : function(instance,item) {
      return $(this).closest('figure').find('figcaption').html();
    },
    beforeShow: function() {
        $(".fancybox-caption").addClass('none');
    },
    afterShow: function() {
        $(".fancybox-caption").wrapInner("<span/>");
        var imageWidth = $(".fancybox-slide--current .fancybox-content").width();
        $(".fancybox-caption").css("width", imageWidth);
		setTimeout(function (){
        $(".fancybox-caption").removeClass('none');}, 200);
    }
}); */
$('[data-fancybox="fig"]').fancybox({
    beforeShow: function() {
        $('.caption--image').remove();
    },
    caption : function(instance,item) {
      return $(this).closest('figure').find('figcaption').html();
    },
    afterShow: function() {
        var caption = $(".fancybox-caption"),
            innerCaption = caption.clone().addClass('caption--image');

        $(".fancybox-slide--current .fancybox-content").append(innerCaption);
        caption.not('.caption--image').addClass('caption--bottom');
    }
});

/* handle clicks on right nav links */

// handle click on Base Map link
$("#baselink").click( function(){
  // show base map, title & text
  showBaseMap();
});

// handle click on Sites of Encounter link
$("#soelink").click(function(e){
  $("#imgTitle").html("Sites of Encounter");
  hideAll();
  if($("#sitesofenctext").html() !== ""){
    $("#theText").html($("#sitesofenctext").html());
    showTextBox();
     $("#footerLink").show();
  }
  e.preventDefault();
  $("#sitesofencimg").fadeIn("fast");
  preventDefault();
  
});

// handle click on Afro-Eurasian Trade Circles link
$("#aetclink").click( function() {
  $("#imgTitle").html("Afro-Eurasian Trade Circles");
  hideAll();
  clearActives();
  if($("#combomaptext").html() !== ""){
    $("#theText").html($("#combomaptext").html());
    showTextBox();
  }
  // position the background image to overlay the other image onto
  $("#mainContent").hide();
  $("#mainContent").css({'background-image':'url(/sites/default/themes/site/images/base-map.png)',
                         'background-repeat':'no-repeat',
                         'background-position':'0px 20px'});
  $("#mainContent").fadeIn("fast");
  // do the animation - JSTween is awesome :-) http://www.jstween.org/
   $("#rage_css_map2").tween({
    left:{
      start:1000,
      stop: 0,
      time: 0,
      units: 'px',
      duration: 1,
      effect:'easeInOut',
      onStart: function(){
        $("#rage_css_map2").show();
        $("#rage_css_map2").css({'opacity':1.0});
        $("#combomap").show();
        $("#combomap").css({'opacity':1.0});
      }
    },
    top:{
      start:-1000,
      stop: 0,
      time: 0,
      units: 'px',
      duration: 1,
      effect:'easeInOut',
      onStop: function(){
        $("#mainContent").css({'background-image':'none'});
      }
    }
   });
   $("#rage_css_map2").play();
});

// handle click on Physical Features
$("#physfeatures").click( function(){
  $("#imgTitle").html("Physical Features");
  hideAll();
  if($("#physfeaturestext").html() !== ""){
    $("#theText").html($("#physfeaturestext").html());
    showTextBox();
     $("#footerLink").show();
  }
  $("#physmapimg").fadeIn("fast");
});

// handle click on Wind and Ocean Currents
/* no content for this yet */
$("#windocean").click( function(){
  $("#imgTitle").html("Wind and Ocean Currents");
  hideAll();
  if($("#windoceantext").html() !== ""){
     $("#theText").html($("#windoceantext").html());
     showTextBox();
      $("#footerLink").show();
  }
  $("#windoceanimg").fadeIn("fast");
});

// handle click on Religions
$("#religions").click( function(e){
  $("#imgTitle").html("Religions");
  hideAll();
  
  if($("#religionstext").html() !== ""){
    $("#theText").html($("#religionstext").html());
    showTextBox();
     $("#footerLink").show();
  }
  e.preventDefault();
  $("#religionsimg").fadeIn("fast");
});

// handle click on Trade Routes
$("#traderoutes").click( function(){
  $("#imgTitle").html("Trade Routes");
  hideAll();
  if($("#traderoutestext").html() !== ""){
    $("#theText").html($("#traderoutestext").html());
    showTextBox();
     $("#footerLink").show();
  }
  $("#traderoutesimg").fadeIn("fast");
});

// handle click on States in 1279
$("#states1279").click( function(){
  $("#imgTitle").html("States in 1279");
  hideAll();
  if($("#states1279text").html() !== ""){
    $("#theText").html($("#states1279text").html());
    showTextBox();
     $("#footerLink").show();
  }
  $("#states1279img").fadeIn("fast");
});

// handle click on States in 1491
$("#states1491").click( function(){
  $("#imgTitle").html("States in 1491");
  hideAll();
  if($("#states1491text").html() !== ""){
    $("#theText").html($("#states1491text").html());
    showTextBox();
     $("#footerLink").show();
  }
  $("#states1491img").fadeIn("fast");
});

// handle click on Spread of the Black Death
$("#blackdeath").click( function(){
  $("#imgTitle").html("Spread of the Black Death");
  hideAll();
  if($("#blackdeathtext").html() !== ""){
    $("#theText").html($("#blackdeathtext").html());
    showTextBox();
     $("#footerLink").show();
  }
  $("#blackdeathimg").fadeIn("fast");
});

// handle click on Voyages of Marco Polo and Ibn Battuta
$("#marcopolo").click( function(){
  $("#imgTitle").html("Voyages of Marco Polo and Ibn Battuta");
  hideAll();
  if($("#marcopolotext").html() !== ""){
    $("#theText").html($("#marcopolotext").html());
    showTextBox();
    $("#footerLink").show();
  }
  $("#marcopoloimg").fadeIn("fast");
});

// handle clicks on citations
$("#citations").click(function(e){
    hideAll();
    $("#imgTitle").html("Citations");
    $("#citationdisplay").html($("#citationtext").html());
    $("#citationdisplay").show();
	e.preventDefault();
});
/* End handle clicks on right nav links */

/* Afro-Eurasian Trade Circles map */
// handle click on European Circuit
$("#rage_europeancircuit").click(function(){
    clearActives();
    $("#theText").html($("#european-circuit").html());
    $("#rage_europeancircuit").addClass('active');
    showTextBox();
    $("#footerLink").show();
});
//handle click on Mediterranean Circuit
$("#rage_mediterraneancircuit").click(function(){
    clearActives();
    $("#theText").html($("#mediterranean-circuit").html());
    $("#rage_mediterraneancircuit").addClass('active');
    showTextBox();
    $("#footerLink").show();
});
// handle click on Overland Circuit
$("#rage_overlandcircuit").click(function(){
    clearActives();
    $("#theText").html($("#overland-circuit").html());
    $("#rage_overlandcircuit").addClass('active');
    showTextBox();
    $("#footerLink").show();
});
// handle click on Persian Gulf Circuit
$("#rage_persiangulfcircuit").click(function(){
    clearActives();
    $("#theText").html($("#persian-gulf-circuit").html());
    $("#rage_persiangulfcircuit").addClass('active');
    showTextBox();
    $("#footerLink").show();
});
// handle click on Red Sea Circuit
$("#rage_redseacircuit").click(function(){
    clearActives();
    $("#theText").html($("#red-sea-circuit").html());
    $("#rage_redseacircuit").addClass('active');
    showTextBox();
    $("#footerLink").show();
});
// handle click on Arabian Sea Circuit
$("#rage_arabianseacircuit").click(function(){
    clearActives();
    $("#theText").html($("#arabian-sea-circuit").html());
    $("#rage_arabianseacircuit").addClass('active');
    showTextBox();
    $("#footerLink").show();
});
// handle click on India-Southeast Asia Circuit
$("#rage_india-southeastasiacircuit").click(function(){
    clearActives();
    $("#theText").html($("#india-southeast-asia-circuit").html());
    $("#rage_india-southeastasiacircuit").addClass('active');
    showTextBox();
    $("#footerLink").show();
});
// handle click on China-Southeast Asia Circuit
$("#rage_china-southeastasiacircuit").click(function(){
    clearActives();
    $("#theText").html($("#china-southeast-asia-circuit").html());
    $("#rage_china-southeastasiacircuit").addClass('active');
    showTextBox();
    $("#footerLink").show();
});
// handle click on Trans-Saharan Circuit
$("#rage_trans-saharancircuit").click(function(){
    clearActives();
    $("#theText").html($("#trans-saharan-circuit").html());
    $("#rage_trans-saharancircuit").addClass('active');
    showTextBox();
    $("#footerLink").show();
});
// handle click on Japan Circuit?
$("#rage_japancircuit").click(function(){
    clearActives();
    $("#theText").html($("#japan-circ").html());
    $("#rage_japancircuit").addClass('active');
    showTextBox();
    $("#footerLink").show();
});
/* End Afro-Eurasian Trade Circles map */


/* handle keeping active state until another trade circle clicked */




/* reset all the trade circle link classes */
function clearActives(){
  $("#rage_europeancircuit").removeClass('active');
  $("#rage_mediterraneancircuit").removeClass('active');
  $("#rage_overlandcircuit").removeClass('active');
  $("#rage_persiangulfcircuit").removeClass('active');
  $("#rage_redseacircuit").removeClass('active');
  $("#rage_arabianseacircuit").removeClass('active');
  $("#rage_india-southeastasiacircuit").removeClass('active');
  $("#rage_china-southeastasiacircuit").removeClass('active');
  $("#rage_trans-saharancircuit").removeClass('active');
  $("#rage_japancircuit").removeClass('active');
}

/* handle clicks on Base Map */
function showBaseMap(){
  hideAll();
  $("#rage_css_map").show();
  $("#basemap").show();
  $("#imgTitle").html("Base Map");
  if($("#basemaptext").html() !== ""){
    $("#theText").html($("#basemaptext").html());
    //$("#footerLink").show();
    showTextBox();
  }
}

function hideAll(){
  clearTextBoxStyles();
  //$("#mainContent").css({'background-image':'none'});
  $("#rage_css_map").hide();
  $("#rage_css_map2").hide();
  $("#theText").html('');
  $("#theText").hide();
  $("#physmapimg").hide();
  $("#windoceanimg").hide();
  $("#footerLink").hide();
  $("#religionsimg").hide();
  $("#traderoutesimg").hide();
  $("#states1279img").hide();
  $("#states1491img").hide();
  $("#blackdeathimg").hide();
  $("#marcopoloimg").hide();
  $("#sitesofencimg").hide();
  $("#basemap").hide();
  $("#combomap").hide();
  $("#citationdisplay").hide();
  $("#mainContent").css({'background-image':'none'});
}

function showTextBox(){
  $("#theText").show();
}

function removeAnchors(){
  // the idea is that if CSS *AND* Javascript are both turned off, the anchors will work.
  $("#europeancircuit").remove();
  $("#mediterraneancircuit").remove();
  $("#overlandcircuit").remove();
  $("#persiangulfcircuit").remove();
  $("#redseacircuit").remove();
  $("#arabianseacircuit").remove();
  $("#india-southeastasiacircuit").remove();
  $("#china-southeastasiacircuit").remove();
  $("#trans-saharancircuit").remove();
  $("#japan").remove();
  $("#aetclinkanch").remove();
  $("#physfeaturesanch").remove();
  $("#windoceananch").remove();
  $("#traderoutesanch").remove();
  $("#states1279anch").remove();
  $("#states1491anch").remove();
  $("#blackdeathanch").remove();
  $("#marcopoloanch").remove();
}

function clearTextBoxStyles(){
  $("#theText").removeAttr('style');
}

// end $( document ).ready(function() {
});
    }
  };
  
})(jQuery, Drupal);

