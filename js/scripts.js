$(document).ready(function(){
  $("form#userInputs").submit(function(event){
    event.preventDefault();

  var choice1 = parseInt($("#expirience").val());
  var choice2 = parseInt($("#why").val());
  var choice3 = parseInt($("#environment").val());
  var choice4 = parseInt($("#design").val());
  var choice5 = parseInt($("#challenges").val());
  var course;
  if(choice1 === 1 && choice2 === 1 && choice3 === 1 && choice4 === 1 && choice5 ===1){
    course = "Your best fit is ruby";

  };

    $("#output").text(course).show();
  });
});
