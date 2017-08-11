$(document).ready(function(){
  $("form#userInputs").submit(function(event){
    event.preventDefault();

  var choice1 = parseInt($("#expirience").val());
  var choice2 = parseInt($("#why").val());
  var choice3 = parseInt($("#environment").val());
  var choice4 = parseInt($("#design").val());
  var choice5 = parseInt($("#challenges").val());

    var course;

    if((choice1 === 1 && choice2 === 1 && choice3 === 1 && choice4 === 2 && choice5 === 3)|| (choice2 === 1)){
        course = "Your best fit is 'Ruby and Rails'! You are interested in building web applications and using a mac. Macs has ruby built in and ready to go! It also looks like you enjoy working with others which is a big plus when trying to learn a new language. Go for it!";
    } else if((choice1 === 2 && choice2 === 5 && choice3 === 2 && choice4 === 1 && choice5 === 1) || (choice2 === 5)) {
        course = "Your best fit looks like it would be 'CSS/Design'! You have a little expirience which is great when going into a new learning expirience. From your choices it seems like you enjoy aesthetics over the fucntionality of a website, however they often overlap! It also seems like you enjoy to take on challenges by yourself which is a great talent to have, but keep in mind that working with others opens you up to new learning oppurtunities that you might not have achieved by yourself.";
      } else if((choice1 === 3 && choice2 === 2 && choice3 === 2 && choice4 === 3 && choice5 === 4) || (choice2 === 2)){
          course = "Your best fit is 'C#/.Net'. You have years of expirience with programming which will be benificial in understanding new languages. If you are familiar with 'C#/.Net' maybe look into java as its also an object oriented programming language. You shouldn't have problems solved for you. You can do this!";
      } else if((choice1 === 1 && choice2 === 4 && choice3 === 1 && choice4 === 2 && choice5 === 2)|| (choice2 === 4)){
          course = "Your best fit is 'Java/Android'! You have no expirience that ain't a biggie! It says you enjoy working with a Mac which is a good choice if you decide to transfer your Android application to iPhone! It also looks like you aren't afraid to ask when you're stuck on a problem which is great!";
      } else if((choice1 === 1 && choice2 === 3 && choice3 === 1 && choice4 === 2 && choice5 === 3) || (choice2 === 3)){
          course = "Your best fit is 'PHP/Drupal'!. You have no expirience but everyones gotta start somewhere! You chose Mac which works well with 'PHP/Drupal' as their both utilize Linux! You like to work with others to take on a challenge which is great for learning. Maybe tryout a programming bootcamp that focuses on pair programming.";
      }

    $("#output").text(course).show();
  });
});
