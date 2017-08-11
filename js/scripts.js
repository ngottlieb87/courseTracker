$(document).ready(function(){
  $("form#userInputs").submit(function(event){
    event.preventDefault();

    var choice1 = parseInt($("#expirience").val());
    var choice2 = parseInt($("#why").val());
    var choice3 = parseInt($("#environment").val());
    var choice4 = parseInt($("#design").val());
    var choice5 = parseInt($("#challenges").val());

    if((choice1 === 1 && choice2 === 1 && choice3 === 1 && choice4 === 2 && choice5 === 3)|| (choice2 === 1)){
       course = " your best fit is 'Ruby and Rails'! Go for it! Heres a little info if you are interested:  Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro Matsumoto in Japan.According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, including functional, object-oriented, and imperative. It also has a dynamic type system and automatic memory management.";
     } else if((choice1 === 2 && choice2 === 5 && choice3 === 2 && choice4 === 1 && choice5 === 1) || (choice2 === 5)) {
       course = " your best fit looks like it would be 'CSS/Design'! Here a little more info on CSS:  Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applicationsCSS is designed primarily to enable the separation of presentation and content, including aspects such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.";
     } else if((choice1 === 3 && choice2 === 2 && choice3 === 2 && choice4 === 3 && choice5 === 4) || (choice2 === 2)){
         course = " your best fit is 'C#/.Net'.If you are familiar with 'C#/.Net' maybe look into java as its also an object oriented programming language as well as Ruby. Here's some more info on .Net:  .NET Framework (pronounced dot net) is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library named Framework Class Library (FCL) and provides language interoperability (each language can use code written in other languages) across several programming languages. Programs written for .NET Framework execute in a software environment (in contrast to a hardware environment) named Common Language Runtime (CLR), an application virtual machine that provides services such as security, memory management, and exception handling. (As such, computer code written using .NET Framework, FCL and CLR together constitute .NET Framework.";
     } else if((choice1 === 1 && choice2 === 4 && choice3 === 1 && choice4 === 2 && choice5 === 2)|| (choice2 === 4)){
         course = " your best fit is 'Java/Android'! Heres a little info: Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets. Android's user interface is mainly based on direct manipulation, using touch gestures that loosely correspond to real-world actions, such as swiping, tapping and pinching, to manipulate on-screen objects, along with a virtual keyboard for text input. In addition to touchscreen devices, Google has further developed Android TV for televisions, Android Auto for cars, and Android Wear for wrist watches, each with a specialized user interface. Variants of Android are also used on notebooks, game consoles, digital cameras, and other electronics. ";
     } else if((choice1 === 1 && choice2 === 3 && choice3 === 1 && choice4 === 2 && choice5 === 3) || (choice2 === 3)){
         course = " your best fit is 'PHP/Drupal'! Here's some more info on PHP:   PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language. Originally created by Rasmus Lerdorf in 1994, the PHP reference implementation is now produced by The PHP Development Team. PHP originally stood for Personal Home Page, but it now stands for the recursive acronym PHP: Hypertext Preprocessor.";
     }

       var firstName = $("input#firstName").val();
       var lastName = $("input#lastName").val();
       var result= "Well, " + firstName + " " + lastName + course;
       $("#output").text(result).fadeIn(850);

  });
});
