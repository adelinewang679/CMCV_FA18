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

  });

  //This is the interactivity for player titles
 //Captains
  $("#player1").mouseover(function(){
    $(".title1").removeClass("hidden");
  });
  $("#player1").mouseout(function(){
    $(".title1").addClass("hidden");
  });

  $("#player2").mouseover(function(){
    $(".title2").removeClass("hidden");
  });
  $("#player2").mouseout(function(){
    $(".title2").addClass("hidden");
  });

//President
  $("#player3").mouseover(function(){
    $(".title3").removeClass("hidden");
  });
  $("#player3").mouseout(function(){
    $(".title3").addClass("hidden");
  });

  // Vice President
    $("#player4").mouseover(function(){
      $(".title4").removeClass("hidden");
    });
    $("#player4").mouseout(function(){
      $(".title4").addClass("hidden");
    });

    $("#player5").mouseover(function(){
      $(".title5").removeClass("hidden");
    });
    $("#player5").mouseout(function(){
      $(".title5").addClass("hidden");
    });

    $("#player6").mouseover(function(){
      $(".title6").removeClass("hidden");
    });
    $("#player6").mouseout(function(){
      $(".title6").addClass("hidden");
    });

    $("#player7").mouseover(function(){
      $(".title7").removeClass("hidden");
    });
    $("#player7").mouseout(function(){
      $(".title7").addClass("hidden");
    });

    $("#player8").mouseover(function(){
      $(".title8").removeClass("hidden");
    });
    $("#player8").mouseout(function(){
      $(".title8").addClass("hidden");
    });

    $("#player9").mouseover(function(){
      $(".title9").removeClass("hidden");
    });
    $("#player9").mouseout(function(){
      $(".title9").addClass("hidden");
    });

    $("#player10").mouseover(function(){
      $(".title10").removeClass("hidden");
    });
    $("#player10").mouseout(function(){
      $(".title10").addClass("hidden");
    });

    $("#player11").mouseover(function(){
      $(".title11").removeClass("hidden");
    });
    $("#player11").mouseout(function(){
      $(".title11").addClass("hidden");
    });

    $("#player12").mouseover(function(){
      $(".title12").removeClass("hidden");
    });
    $("#player12").mouseout(function(){
      $(".title12").addClass("hidden");
    });



});
