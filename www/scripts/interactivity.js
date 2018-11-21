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


  $("#mobilemenu").click(function () {
    $("nav").toggle();
  });

  $("#gallerybox img").click(function () {

  })

  //This is the interactivity for player titles
 //Captians
  $("#player1").mouseover(function(){
    $(".ttitle1").removeClass("hidden");
  });
  $("#player1 img").mouseout(function(){
    $(".ttitle1").addClass("hidden");
  });

  $("#player2").mouseover(function(){
    $(".ttitle2").removeClass("hidden");
  });
  $("#player1 img").mouseout(function(){
    $(".ttitle2").addClass("hidden");
  });

//President
  $("#player3").mouseover(function(){
    $(".ttitle3").removeClass("hidden");
  });
  $("#player3 img").mouseout(function(){
    $(".ttitle3").addClass("hidden");
  });



});
