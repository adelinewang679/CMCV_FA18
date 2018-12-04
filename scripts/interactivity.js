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




  //MOBILE MENU INTERACTIVITY
  var windowratio = ($(window).width()-268)/$(window).height();

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

  var imgpointer = null;

  //GALLERY INTERACTIVITY
  $("#gallerybox img").click(function () {
    // For tablet and pc only
    if ($(window).width() > 600) {
      imgpointer = $(this);
      $("#largeImgContainer").css("display","flex");
      $("#largeImgContainer *").css("display","initial");
      $("#largeImg").attr("src",$(this).attr("src"));
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

  function moveleft() {
    if(imgpointer.prev().attr("src")==undefined) {
      if (imgpointer.parent().prev().children("img:last").attr("src") != undefined)
        imgpointer = imgpointer.parent().prev().children("img:last");
      // alert(imgpointer.attr("src"));
    }else {
      imgpointer = imgpointer.prev()
    }
    $("#largeImg").attr("src",imgpointer.attr("src"));
  };

  function moveright() {
    if(imgpointer.next().attr("src")==undefined) {
      if (imgpointer.parent().next().children("img:first").attr("src") != undefined)
        imgpointer = imgpointer.parent().next().children("img:first");
      // alert(imgpointer.attr("src"));
    }else {
      imgpointer = imgpointer.next()
    }
    $("#largeImg").attr("src",imgpointer.attr("src"));
  }

  $(document).keydown(function(e) {
    if ($("#largeImgContainer").css("display") != "none") {
      if (e.key == "ArrowLeft") moveleft();
      if (e.key == "ArrowRight") moveright();
    }
  });

  $("#leftarrow").click(function() {
    moveleft();
  });

  $("#rightarrow").click(function() {
    moveright();
  });

  //This is the interactivity for player titles
 //Captains
  $("#player1").mouseover(function(){
    // $(".title1").removeClass("hidden");
    $(".title1").slideDown("fast");
  });
  $("#player1").mouseout(function(){
    // $(".title1").addClass("hidden");
    $(".title1").slideUp("fast");
  });

  $("#player2").mouseover(function(){
    // $(".title2").removeClass("hidden");
    $(".title2").slideDown("fast");
  });
  $("#player2").mouseout(function(){
    // $(".title2").addClass("hidden");
    $(".title2").slideUp("fast");
  });

//President
  $("#player3").mouseover(function(){
    // $(".title3").removeClass("hidden");
    $(".title3").slideDown("fast");
  });
  $("#player3").mouseout(function(){
    // $(".title3").addClass("hidden");
    $(".title3").slideUp("fast");
  });

  // Vice President
    $("#player4").mouseover(function(){
      // $(".title4").removeClass("hidden");
      $(".title4").slideDown("fast");
    });
    $("#player4").mouseout(function(){
      // $(".title4").addClass("hidden");
      $(".title4").slideUp("fast");
    });



});
