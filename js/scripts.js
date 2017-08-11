$(document).ready(function(){
  $("form#userInputs").submit(function(event){
    event.preventDefault();

  var choice1 = parseInt($("#expirience").val());
  var choice2 = parseInt($("#why").val());
  var choice3 = parseInt($("#environment").val());
  var choice4 = parseInt($("#design").val());
  var choice5 = parseInt($("#challenges").val());
  var course;
  if(choice1 === 1 && choice2 === 1 && choice3 === 1 && choice4 === 2 && choice5 === 3) {
    course = "Your best fit is Ruby and Rails! You are interested in building web applications and using a mac. Macs has ruby built in and ready to go! It also looks like you enjoy working with others which is a big plus when trying to learn a new language. Go for it!";
  } else if(choice1 === 2 && choice2 === 5 && choice3 === 2 && choice4 === 1 && choice5 === 1){
      course = "Your best fit looks like it would be CSS/Design! You have a little expirience which is great when going into a new learning expirience. From your choices it seems like you enjoy aesthetics over the fucntionality of a website, however they often overlap! It also seems like you enjoy to take on challenges by yourself which is a great talent to have, but keep in mind that working with others opens you up to new learning oppurtunities that you might not have achieved by yourself.";
    }else if(choice1 === 2 && choice2 === 5 && choice3 === 2 && choice4 === 1 && choice5 === 1){
      
    };

    $("#output").text(course).show();
  });
});
