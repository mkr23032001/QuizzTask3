const quizData = [{
    question: "Which of the following is the National Animal of India?",
    a: "Peacock",
    b: "Elephant",
    c: "Lion",
    d: "Tiger",
    correct: "d",
},
{
    question: "Select the Odd one Out?",
    a: "Akasa",
    b: "Mail",
    c: "Shatabdi",
    d: "Rajdhani",
    correct: "a",
},
{
    question: "Who is not a Punjabi Singer from the Following?",
    a: "Shubh",
    b: "Papon",
    c: "Diljit Dosanjh",
    d: "Karan Aujla",
    correct: "b",
},
{
    question: "Which One is not a Laptop Brand?",
    a: "Hewlett Packard",
    b: "Lucky Goldstar",
    c: "Dell",
    d: "Lenovo",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);