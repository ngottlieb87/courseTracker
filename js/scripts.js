$(document).ready(function(){
  $("form#userInputs").submit(function(event){
    event.Default();
    
  var choice1 = $("#expirience").val();
  var choice2 = $("#why").val();
  var choice3 = $("#environment").val();
  var choice4 = $("#design").val();
  var choice5 = $("#challenges").val();

    console.log(choice1,choice2,choice3,choice4,choice5);

  });
});
