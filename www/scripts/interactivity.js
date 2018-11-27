$(document).ready(function() {
  $("#interest_form").on("submit", function(){
    var formValid = true; //from lab10

    var NameValid = $("#nameValue").prop("validity").valid; //adapted from project 3

    //is name valid
    if(NameValid){
      $("#nameFeedback").addClass("hidden");
    } else{
      formValid = false;
      $("#nameFeedback").removeClass("hidden");
    }

    //is email valid
    var emailValid = $("#email").prop("validity").valid;

    if(emailValid){
      $("#emailFeedback").addClass("hidden");
    }else{
      formValid = false;
      $("#emailFeedback").removeClass("hidden");
    }

    //is year filled out
    var yearValid = $("#class_year").prop("validity").valid;

    if(yearValid){
      $("#yearFeedback").addClass("hidden");
    }else{
      formValid = false;
      $("#yearFeedback").removeClass("hidden");
    }

    //is text area filled out
    var validMessage = $("#about_u").prop("validity").valid;

    if(validMessage){
      $("#messageFeedback").addClass("hidden");
    }else{
      formValid= false;
      $("#messageFeedback").removeClass("hidden");
    }
    return formValid;
  });





  var windowratio = $(window).width()/$(window).height();

  if ($("#mobilemenu").css("display") != "none"){
    $("nav").hide();
  }

$( window ).resize(function() {
  if ($("#mobilemenu").css("display") != "none"){
    $("nav").hide();
  } else $("nav").show();
  windowratio = ($(window).width()-268)/$(window).height();
});


  $("#mobilemenu").click(function () {
    $("nav").toggle();
  });


  $("#gallerybox img").click(function () {
    // For tablet and pc only
    if ($(window).width() > 600) {
      $("#largeImgContainer").css("display","flex");
      $("#largeImgContainer *").css("display","initial");
      var imgurl = $(this).attr("src");
      $("#largeImg").attr("src",imgurl);
      var imgratio = ($(this).width())/$(this).height();
      // Check if image is horizontally longer than the available space or not
      if (windowratio > imgratio) {
        // space on left, right
        $("#largeImg").css("height","85%");
        $("#largeImg").css("width","auto");
      } else {
        // space on top bottom
        $("#largeImg").css("width", "80%");
        $("#largeImg").css("height","auto");
      }
      // alert (imgratio);
      $(document).scrollTop($("#largeImgContainer").offset().top);
   }
  });

  $("#largeImg").click(function () {
    $("#largeImgContainer").css("display","none");
    $("#largeImgContainer *").css("display","none");
  });

  //This is the interactivity for player titles
 //Captains
  $("#player1").mouseover(function(){
    $(".title1").removeClass("hidden");
  });
  $("#player1 img").mouseout(function(){
    $(".title1").addClass("hidden");
  });

  $("#player2").mouseover(function(){
    $(".title2").removeClass("hidden");
  });
  $("#player2 img").mouseout(function(){
    $(".title2").addClass("hidden");
  });

//President
  $("#player3").mouseover(function(){
    $(".title3").removeClass("hidden");
  });
  $("#player3 img").mouseout(function(){
    $(".title3").addClass("hidden");
  });

  // Vice President
    $("#player4").mouseover(function(){
      $(".title4").removeClass("hidden");
    });
    $("#player4 img").mouseout(function(){
      $(".title4").addClass("hidden");
    });



});
