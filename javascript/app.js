
$("#questions").hide();

var timerInterval;
var correct = 0;


$("#startQuiz").on("click", function() {
    $("#questions").show();
    timerInterval = setInterval(startTimer, 1000);
})
function startTimer() {
    var control = $("#timer");
    var seconds = parseInt (control.text());
    
    if (seconds === 0) {
        alert("Time's Up");
        check();
        $("#after_submit").html("<h1>" + "Your Score: " + correct + "/10" + "</h1>");
    }
    else {
        seconds = seconds - 1;
        control.text(seconds);
    }

}

function check() {
    clearInterval(timerInterval);
    
    var correctAnswer = parseInt("input: checked").value;
    if (correctAnswer === 1) {
        correct++;
    }

        }  
        

$("#finished").on("click", function(event) {
    event.preventDefault();
    check();
    $("#after_submit").html("<h1>" + "Your Score:  " + correct + "/10" + "</h1>");


})




        
    
    //var question2 = document.quiz.question1.value;
    //var correct = 0;

    //if (question1 == "5") {
     //   correct++
    //}   



