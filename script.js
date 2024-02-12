const name = prompt("Qual o seu nome?");
const gettings = alert(`Seja Bem-vinde, ${name}`);

const questions = [
    {
        question: "O festival Oktoberfest acontece em que mês?",
        answers: ["Agosto", "Outubro", "Janeiro", "Dezembro"],
        correctAnswerIndex: 1
    },
    {
        question: "O Chimarrão é bebida popular de que região?",
        answers: ["Norte", "Sul", "Sudeste", "Nordeste"],
        correctAnswerIndex: 1
    },
    {
        question: "Qual desses é um prato típico do Norte?",
        answers: ["Maniçoba", "Acarajé", "Caruru", "Feijoada"],
        correctAnswerIndex: 0
    },
    {
        question: "Qual dessas é uma dança popular no Pará?",
        answers: ["Xaxado", "Frevo", "Forró", "Carimbó"],
        correctAnswerIndex: 3
    },
    {
        question:"Quantos anos tem Mato Grosso do Sul?",
        answers:["65 anos", "400 anos", "100 anos", "46 anos"],
        correctAnswerIndex:3
    }
];

let currentQuestionIndex = 0;
let score = 0;

function renderQuestion() {
    const questionContainer = document.querySelector('.container-questions');
    const questionText = questionContainer.querySelector('.Ask');
    const options = questionContainer.querySelectorAll('.bnt');

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        options[index].textContent = answer;
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswerIndex) {
        score++; 
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    const endScreen = document.getElementById('popup-background');
    const finalScore = document.getElementById('final-score');
    finalScore.textContent = `Pontuação: ${score} de ${questions.length}`;
    endScreen.style.display = 'flex';
}

document.getElementById('try-again-btn').onclick = function() {
    
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion();
    document.querySelector('.container-quiz').style.display = 'block'; // Exibir a tela inicial novamente
    document.querySelector('.container-questions').style.display = 'none'; // Ocultar a tela de perguntas
    document.getElementById('popup-background').style.display = 'none'; // Ocultar o pop-up
};


document.querySelector('.button').onclick = function() {
    const quizStartScreen = document.querySelector('.container-quiz');
    quizStartScreen.style.display = 'none';
    renderQuestion(); 
    document.querySelector('.container-questions').style.display = 'block'; // Exibe a tela de perguntas
};

const optionButtons = document.querySelectorAll('.bnt');
optionButtons.forEach((button, index) => {
    button.onclick = function() {
        checkAnswer(index);
    };
});


