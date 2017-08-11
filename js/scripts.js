$(document).ready(function(){
  $("form#userInputs").submit(function(event){
    event.preventDefault();

  var choice1 = $("#expirience").val();
  var choice2 = $("#why").val();
  var choice3 = $("#environment").val();
  var choice4 = $("#design").val();
  var choice5 = $("#challenges").val();
  var course;

    $("#output").text(course).show();
  });
});
