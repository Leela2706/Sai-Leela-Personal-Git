const question = [
    {
        question: "which is largest animal in tha world ?",
        answers: [
            { Text: "shark", correct: false },
            { Text: "blue whale", correct: true },
            { Text: "elephant", correct: false },
            { Text: "giraffe", correct: false },

        ]
    },

    {
        question: "which is the smallest country in tha world ?",
        answers: [
            { Text: "vantican city", correct: true },
            { Text: "bhutan", correct: false },
            { Text: "nepal", correct: false },
            { Text: "srilanka", correct: false },

        ]
    },

    {
        question: "which is the largest desert in the world ?",
        answers: [
            { Text: "kalahari", correct: false },
            { Text: "gobi", correct: false },
            { Text: "sahara", correct: false },
            { Text: "antartica", correct: true },

        ]
    },

    {
        question: "which is the smallest continent in the world ?",
        answers: [
            { Text: "asia", correct: false },
            { Text: "australiya", correct: true },
            { Text: "arctic", correct: false },
            { Text: "africa", correct: false },

        ]
    }
];

const questionelment = document.getElementById("question")
const answerbuttons = document.getElementById("answer-buttons")
const nextbutton = document.getElementById("next-btn")


let currentquestionindex = 0;
let score = 0;

function startquiz() {
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "Next"
    showquestion();
}

function showquestion() {
    resetState();
    let currentquestion = question[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelment.innerHTML = questionno + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer)

    })
}


function resetState() {
    nextbutton.style.display = "none";
    while (answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild)
    }
}


function selectanswer(e) {
    var selectedbtn = e.target;
    var iscorrect = selectedbtn.dataset.correct === "true";
    if (iscorrect) {
        selectedbtn.classList.add("correct")
        score++;
    }
    else {
        selectedbtn.classList.add("incorrect")
    }
    Array.from(answerbuttons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");

        }
        button.disabled = true;

    })
    nextbutton.style.display = "block"
}


function showscore() {
       resetState();
       questionelment.innerHTML=ypu scored ${score} out of ${question.length}!;
       nextbutton.innerHTML="play again";
       nextbutton.style.display="block"
}


function handlenextbutton() {
    currentquestionindex++;
    if (currentquestionindex < question.length) {
        showquestion()
    }
    else {
        showscore();
    }
}



nextbutton.addEventListener("click", () => {
    if (currentquestionindex < question.length) {
        handlenextbutton();
    }
    else {
        startquiz();
    }

})

startquiz()