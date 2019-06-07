let questionsIndex = -1
let questions = [
    {
        question: "What state was Jared born in?",
        answers: ["Utah", "Washington", "Virginia", "Idaho"],
        Correct: "Utah",
    },
    
    {
        question: "How many siblings does Jared have",
        answers: ["Two", "Three", "Four", "Five"],
        Correct: "Three",
    },

    {
        question: "What mountain has Jared summited?",
        answers: ["Timpanogos", "Ranier", "Hood", "Baker"],
        Correct: "Baker",
    },

    {
        question: "What year did Jared graduate Highschool?",
        answers: ["2010", "2012", "2014", "2015"],
        Correct: "2014",
    },

    {
        question: "How old was Jared when he built his first computer?",
        answers: ["12", "13", "14", "15"],
        Correct: "12",
    },

    {
        question: "What has Jared built from yard junk?",
        answers: ["Go-Kart", "Mountain Board", "Trebuche", "Hover Craft"],
        Correct: "Hover Craft",
    },

    {
        question: "What's Jared's favorite kicks?",
        answers: ["Roundhouse", "Kyrie 3", '"Kick"-starter.com', "Recoil"],
        Correct: "Kyrie 3",
    },
];
let seconds = 5;
let count;
let correct = 0;
let incorrect = 0;

// time remaining notifier
// & timeout function

function atInterval() {
    seconds = seconds-1;
    $("#timerId").html(seconds);
    if (seconds === 0) {
        clearInterval(count);
        printNextQuestion();
    }
};

function countdown() {
    seconds = 5;
    clearInterval(count);
    count = setInterval(atInterval, 1000);
};

function ending() {
    if (questionsIndex === questions.length) {
        if (correct>incorrect+1) {
        $("#timerBanner").hide()
        $("#topRow").append("<h1 class='container bg-success rounded' id='announcement'> You know Jared pretty well!</h1>")
        $("#questionId").html("Correct: "+correct+"  <br><br>"+"Incorrect: "+incorrect+"   <br><br>")
        $("#answersID-0").hide()
        $("#answersID-1").hide()
        $("#answersID-2").hide()
        $("#answersID-3").hide()
        $("#answers").append('<div class="btn btn-danger btn-lg" id="reset"> RESET </div>')
        restart()
        } else {

            // $("#questionId").html("Maybe you should ask Jared some questions and try again...!")
            // $("#answersID-0").html("Correct: "+correct)
            // $("#answersID-1").html("Incorrect: "+incorrect)
            // $("#answersID-2").html('')
            // $("#answersID-3").html('<div class="btn btn-danger" id="reset"> RESET </div>')

        $("#timerBanner").hide()
        $("#topRow").append("<h1 class='container bg-danger rounded' id='announcement'> Maybe you should ask Jared some questions and try again...! </h1>")
        $("#questionId").html("Correct: "+correct+"  <br><br>"+"Incorrect: "+incorrect+"   <br><br>")
        $("#answersID-0").hide()
        $("#answersID-1").hide()
        $("#answersID-2").hide()
        $("#answersID-3").hide()
        $("#answers").append('<div class="btn btn-danger btn-lg" id="reset"> RESET </div>')
        restart()
        }
    };
}

// function to change to the next question and answer set
function printNextQuestion() {
    questionsIndex = questionsIndex + 1;
    if (questionsIndex < questions.length){
    $("#questionId").html(questions[questionsIndex].question)
    for (var i = 0; i < questions[questionsIndex].answers.length; i++) {
        $("#answersID-"+i).html(questions[questionsIndex].answers[i])
    };
    countdown();
    }
    ending();
};

// correct/incorrect record keeper
// t/f checker
function truthChecker(btn) {
    clearInterval(count)
    if (questionsIndex < questions.length){
    if ($(btn).text() === questions[questionsIndex].Correct) {
        alert("Hooray!!!");
        correct++

     } else {
       alert("Nope");
       incorrect++;
     };
     printNextQuestion();
    }

};

$(".btn-primary").click(function() {
    truthChecker(this)
});

// restart fx
function restart() {
    $(".btn-danger").click(function() {
        console.log('working!!!!')
        questionsIndex = -1;
        seconds = 5;
        correct = 0;
        incorrect = 0;

        $("#timerBanner").show()
        $("#announcement").remove()
        $("#answersID-0").show()
        $("#answersID-1").show()
        $("#answersID-2").show()
        $("#answersID-3").show()
        $("#reset").remove()
        printNextQuestion()
    })
}


printNextQuestion()