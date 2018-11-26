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






  if ($("#mobilemenu").css("display") != "none"){
    $("nav").hide();
  }

$( window ).resize(function() {
  if ($("#mobilemenu").css("display") != "none"){
    $("nav").hide();
  } else $("nav").show();
});


  $("#mobilemenu").click(function () {
    $("nav").toggle();
  });

  $("#gallerybox img").click(function () {

  })

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
