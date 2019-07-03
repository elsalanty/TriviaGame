
$("#questions").hide();

var timerInterval;
var total = 2; //total number of questions on the quiz. You'll need it to make loops
var score = 0;


$("#startQuiz").on("click", function() {
    $("#questions").show();
    timerInterval = setInterval(startTimer, 1000);
})
function startTimer() {
    var control = $("#timer");
    var seconds = parseInt (control.text());
    
    if (seconds === 0) {
        alert("Time's Up");
        submitAnsers();
        $("#after_submit").html("<h1>" + "Your Score: " + correct + "/10" + "</h1>");
    }
    else {
        seconds = seconds - 1;
        control.text(seconds);
    }

}

function submitAnswers() {
    clearInterval(timerInterval);

   //get user input:
   var question1 = document.forms["quizForm"]["question1"].value;
   var question2 = document.forms["quizForm"]["question2"].value;
   console.log(question1, question2);
   //validation (prevent submission without finishing the test)
   //if(question1 == null || question1 == "") {
      // alert("You missed Q1");
       //do not submit:
       // false;
       //or better do a loop for all questions:
       for(i = 1; i <= total; i++) {
           if (eval("question"+i) == null || eval("question"+i) == ""){ //you can't say question[i] as in arrays. the eval function will allow selecting one question at a time
           alert("You missed question " + i);

       }
    }

       //set the array for correct answers:
       var answers = ["a","b"];

       //check answers
       if(question1 === answers[0]) {
           score++;
       }
       if(question2 === answers[1]) {
        score++;
    }
    /*another easier way to check answers is by having a check loop:
        for (i = 1; i <= total; i++) {
            if(eval("question"+i) == answers[i - 1]) {
                score++;
            }
        }
    */

       
   }


$("#finished").on("click", function(event) {
    event.preventDefault();
    submitAnswers();
    $("#after_submit").html("<h1>" + "Your Score:  " + score + "/" + total + "</h1>");


})

//best youtube video to explain it: https://www.youtube.com/watch?v=1ARSZup4eog 




