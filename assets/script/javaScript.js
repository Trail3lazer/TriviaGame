let questionsIndex = 0
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
let answerVeracity = Boolean;
let timer;
let correct = 0;
let incorrect = 0;

// function to change to the next question and answer set
let printNextQuestion = function() {
    $("#questionId").html(questions[questionsIndex].question)
    for (var i = 0; i < questions[questionsIndex].answers.length; i++) {
        $("#answersID-"+i).html(questions[questionsIndex].answers[i])
    };
    questionsIndex = questionsIndex++
    //timer = setTimeout(truthChecker, 5000)
}

// randomize answers

// timeout function

// time remaining notifier
// correct/incorrect record keeper
// t/f checker
$(".btn-primary").click(function() {
    clearTimeout(timer)
    if ($(this).text() === questions[questionsIndex].Correct) {
        alert("Hooray!!!");
        correct++
        printNextQuestion();
     } else {
       alert("Nope");
       incorrect++
       printNextQuestion();
     }
});


// correct notification
// incorrect notification
// restart fx

printNextQuestion()