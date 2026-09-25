const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');

const quizQuestions = [ {
    question: " What is the capital of france ? ", 
    answers: [{text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Madrid", correct: false}]},
            {
    question: " Who is the current president of Cameroon ? ", 
    answers: [{text: "Atanga Nji Paul", correct: false},
            {text: "Ferdinand Ngo Nog", correct: false},
            {text: "Jacque Fame Ndongo", correct: false},
            {text: "Paul Biya", correct: true}]},
            {
    question: " Who discovered the sea route to india ? ", 
    answers: [{text: "Vasco Da Gama", correct: true},
            {text: "Francis Drake", correct: false},
            {text: "Peterson Taylors", correct: false},
            {text: "Galileo galilee", correct: false}]},
            {
    question: " What is the tallest Mountain in Cameroon ? ", 
    answers: [{text: "Mt Fako", correct: true},
            {text: "Mt Ngokintunjia", correct: false},
            {text: "Mt Everest", correct: false},
            {text: "Mt Moriah", correct: false}]},
            {
    question: " What is the most organised city in Africa ? ", 
    answers: [{text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Abuja", correct: true},
            {text: "Nairobi", correct: false}]},
            {
    question: " What is the most populated country in the world? ", 
    answers: [{text: "Nigeria", correct: false},
            {text: "China", correct: true},
            {text: "India", correct: false},
            {text: "USA", correct: false}]},
            {
    question: " Who is the current president of the United States of America ? ", 
    answers: [{text: "Thomas Edison", correct: false},
            {text: "Donald J Trump", correct: true},
            {text: "Macron ", correct: false},
            {text: "Mansa Mousa", correct: false}]},
            {
    question: " He was considered the richest person in history ? ", 
    answers: [{text: "Donald J Trump", correct: false},
            {text: "King Solomon", correct: false},
            {text: "Mansa Mousa", correct: true},
            {text: "King Nebuchanezer", correct: false}]},
            {
    question: " What is the top number 1 company today in networth ? ", 
    answers: [{text: "Apple inc", correct: false},
            {text: "Google", correct: false},
            {text: "Amazon", correct: false},
            {text: "Nvidia", correct: true}]},
            {
    question: " Where is the capital of UN forund ? ", 
    answers: [{text: "Geniva", correct: true},
            {text: "Berlin", correct: false},
            {text: "Ethiopia", correct: false},
            {text: "Madrid", correct: false}]},
            

];

// Quiz State variables 

    let currentQuestionIndex = 0;
    let score = 0;
    let answersDisabled = false;

    totalQuestionsSpan.textContent = quizQuestions.length;
    maxScoreSpan.textContent = quizQuestions.length;

// Event Listerners 

    startButton.addEventListener("click", startQuiz);
    restartButton.addEventListener("click", restartQuiz);

    function startQuiz(){
//       restart vars 
        currentQuestionIndex = 0;
        score = 0;
        scoreSpan.textContent = 0;

        startScreen.classList.remove("active");
        quizScreen.classList.add("active");
        showQuestion();

    };

    function showQuestion(){
        // reset variables 
        answersDisabled = false;

        const currentQuestion = quizQuestions[currentQuestionIndex];
        currentQuestionSpan.textContent = currentQuestionIndex + 1;
        const percentPrgress = (currentQuestionIndex/quizQuestions.length)*100 ;
        progressBar.style.width = percentPrgress + "%" ;
        questionText.textContent = currentQuestion.question ;

        answersContainer.innerHTML = "";
        // const list = document.createElement('ol');
        // list.classList.add('answerList')
        // answersContainer.innerHTML = list;

        currentQuestion.answers.forEach(answer => {
                // const listElement = document.createElement('li');
                // listElement.classList.add("listElement");
                const button = document.createElement('button');
                // listElement.innerHTML = button;
                button.textContent = answer.text;
                button.classList.add('answer-btn');

                // exploiting the correct answers
                button.dataset.correct = answer.correct;
                button.addEventListener('click', selectAnswer);
                answersContainer.appendChild(button);
        });
    };

    function selectAnswer(Event){
        if(answersDisabled) return 
        answersDisabled = true ;
        
        const selectedButton = event.target;
        const isCorrect = selectedButton.dataset.correct === 'true'; 

        // todo: 
        Array.from(answersContainer.children).forEach((button) => {
                if (button.dataset.correct === 'true'){
                        button.classList.add('correct')
                } else if(button === selectedButton){
                        button.classList.add('incorrect')
                }
        });

        if(isCorrect){
                score++;
                scoreSpan.textContent = score ;
        };

        setTimeout(() => {
                currentQuestionIndex++;
                if(currentQuestionIndex < quizQuestions.length){
                        showQuestion();
                } else {
                        showResults();
                }
        }, 1000);

    }; 
    function showResults(){
        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');
        finalScoreSpan.textContent = score;

        const percentage = (score/quizQuestions.length)*100; 

        if(percentage === 100){
                resultMessage.textContent = " Perfect! you're a genius!!! ";
        } else if(percentage >= 80){
                resultMessage.textContent = " Great Job! you know your stuff!!! ";
        } else if(percentage >= 60){
                resultMessage.textContent = " Good effort! keep learning!!! ";
        } else if(percentage >= 40){
                resultMessage.textContent = " Not Bad! Try again to improve!!! ";
        } else {
                resultMessage.textContent = "Keep studying! you'll get better";
        }
    }; 

    function restartQuiz(){
        resultScreen.classList.remove("active");
        startScreen.classList.add("active");

    };



