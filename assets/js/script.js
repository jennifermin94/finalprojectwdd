$(document).ready(function() {

$("#sidebar-button") .click(function() {
    if ($(".sidebar-container") .hasClass("sidebar-active")) {
       $('body') .removeClass('no-scroll');
       $("#sidebar-button") .removeClass("button-active");
       $(".sidebar-container") .removeClass("sidebar-active");
       $(".page-wrapper") .removeClass("wrapper-active");
     }    
    else {
      $("#sidebar-button") .addClass("button-active");
      $(".sidebar-container") .addClass("sidebar-active");
      $(".page-wrapper") .addClass("wrapper-active");
      setTimeout(function() {  
      }, 300);
    }
});

$("#team-next") .click(function() {
  var curr_margin = parseInt($('#value-all').css('margin-left').replace("px",""));
  if (curr_margin == -3840) {
    return false;
  } 
  else {
    curr_margin -= 960;
    curr_margin = curr_margin.toString()+"px"; 
    $("#value-all").css('margin-left', curr_margin);
  }
});
  //Implement the "slide to right" when the user clicks on #carousel-prev here
 $("#team-prev") .click(function() {
  var curr_margin = parseInt($('#value-all').css('margin-left').replace("px",""));
  if (curr_margin == 0) {
    return false;
  } 
  else {
    curr_margin += 960;
    curr_margin = curr_margin.toString()+"px"; 
    $("#value-all").css('margin-left', curr_margin);
  }
});

$("#organize").click(function() {
  $('#obox').show();
  $('#organize').css("background-color", "black");
});


$(".picture").css("opacity", 1.0);
$(".picture").hover(function() {
  	$(this).animate({opacity:0.6}, 500); },
  	function () {
  		$(this).animate({opacity:1.0}, 500)
});


$("#organize").click(function() {
  $('#obox').show();
  $('#organize').css("background-color", "black");
  $('#pbox').hide();
  $('#cbox').hide();
  $('#tbox').hide();
  $('#tape').css("background-color", "#878787");
  $('#plan').css("background-color", "#878787");
  $('#communicate').css("background-color", "#878787");
});

$("#plan").click(function() {
  $('#pbox').show();
  $('#plan').css("background-color", "black");
  $('#obox').hide();
  $('#cbox').hide();
  $('#tbox').hide();
  $('#tape').css("background-color", "#878787");
  $('#organize').css("background-color", "#878787");
  $('#communicate').css("background-color", "#878787");
});

$("#communicate").click(function() {
  $('#cbox').show();
  $('#communicate').css("background-color", "black");
  $('#obox').hide();
  $('#pbox').hide();
  $('#tbox').hide();
  $('#tape').css("background-color", "#878787");
  $('#organize').css("background-color", "#878787");
  $('#plan').css("background-color", "#878787");
});

$("#tape").click(function() {
  $('#tbox').show();
  $('#tape').css("background-color", "black");
  $('#obox').hide();
  $('#pbox').hide();
  $('#cbox').hide();
  $('#communicate').css("background-color", "#878787");
  $('#organize').css("background-color", "#878787");
  $('#plan').css("background-color", "#878787");
});

$('.dropbox').click(function() {
  $('#obox').hide();
  $('#pbox').hide();
  $('#cbox').hide();
  $('#tbox').hide();
  $('#communicate').css("background-color", "#878787");
  $('#organize').css("background-color", "#878787");
  $('#plan').css("background-color", "#878787");
  $('#tape').css("background-color", "#878787");
});


$("#organize").click(function() {
  $('#obox').show();
  $('#organize').css("background-color", "black");
});



$(".name1").hide();
$("#elsiepic").hover(function() {
  $("#elsie").toggle();

});

$(".name1").hide();
$("#haileypic").hover(function() {
  $("#hailey").toggle();

});

$(".name1").hide();
$("#jenpic").hover(function() {
  $("#jen").toggle();

});

$(".name1").hide();
$("#thomaspic").hover(function() {
  $("#thomas").toggle();

});

$(".name1").hide();
$("#suspic").hover(function() {
  $("#sus").toggle();

});

$(".name1").hide();
$("#davidpic").hover(function() {
  $("#david").toggle();

});

$(".name1").hide();
$("#jackeepic").hover(function() {
  $("#jackee").toggle();

});

$(".name1").hide();
$("#anonpic").hover(function() {
  $("#anon").toggle();

});



$('.timeline-item').click(function() {
  $('#modal-box').show();

});

$('#modal-box').click(function() {
    $('#modal-box').hide();
    $('.modal-text').hide();
});

$("#aug").click(function() {
  $('#aug-text').show();
});

$("#nov").click(function() {
  $('#nov-text').show();
});

$("#oct").click(function() {
  $('#oct-text').show();
});

$("#dec").click(function() {
  $('#dec-text').show();
});

$("#sept").click(function() {
  $('#sept-text').show();
});

$("#jan").click(function() {
  $('#jan-text').show();
});

$("#feb").click(function() {
  $('#feb-text').show();
});

$("#mar").click(function() {
  $('#mar-text').show();
});
$("#apr").click(function() {
  $('#apr-text').show();
});
$("#may").click(function() {
  $('#may-text').show();
});



});