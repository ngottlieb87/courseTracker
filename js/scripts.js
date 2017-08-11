$(document).ready(function(){
  $("form#userInputs").submit(function(event){
    event.preventDefault();

    var choice1 = parseInt($("#expirience").val());
    var choice2 = parseInt($("#why").val());
    var choice3 = parseInt($("#environment").val());
    var choice4 = parseInt($("#design").val());
    var choice5 = parseInt($("#challenges").val());

    if((choice1 === 1 && choice2 === 1 && choice3 === 1 && choice4 === 2 && choice5 === 3)|| (choice2 === 1)){
       course = " your best fit is 'Ruby and Rails'! Go for it!";
     } else if((choice1 === 2 && choice2 === 5 && choice3 === 2 && choice4 === 1 && choice5 === 1) || (choice2 === 5)) {
       course = " your best fit looks like it would be 'CSS/Design'!";
     } else if((choice1 === 3 && choice2 === 2 && choice3 === 2 && choice4 === 3 && choice5 === 4) || (choice2 === 2)){
         course = " your best fit is 'C#/.Net'.If you are familiar with 'C#/.Net' maybe look into java as its also an object oriented programming language as well as Ruby.";
     } else if((choice1 === 1 && choice2 === 4 && choice3 === 1 && choice4 === 2 && choice5 === 2)|| (choice2 === 4)){
         course = " your best fit is 'Java/Android'!";
     } else if((choice1 === 1 && choice2 === 3 && choice3 === 1 && choice4 === 2 && choice5 === 3) || (choice2 === 3)){
         course = " your best fit is 'PHP/Drupal'!";
     }

       var firstName = $("input#firstName").val();
       var lastName = $("input#lastName").val();
       var result= "Well, " + firstName + " " + lastName + course;
       $("#output").text(result).fadeIn(850);

  });
});
