function username() {
    let name = prompt("Qual o seu nome?");
     if (name && typeof name === "string" && name.length <= 10) {
        alert(`Seja bem-vindo, ${name}!`);
     } else {
        alert(`Seja bem-vindo!`)
     }
    const user = document.getElementById("popup-text");
    if (alert && name) {
        user.textContent = `Parabéns! ${name}, você completou o quiz.`;
    } else {  user.textContent = "Parabéns! você completou o quiz.";
}
}
username();


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
    },
    {
        question: "Quantos estados tem o Nordeste?",
        answers: ["14", "8", "21", "9"],
        correctAnswerIndex:3
    },
    {
        question:"Qual o estado do pão de queijo?",
        answers: ["São Paulo", "Minas Gerais", "Sergipe", "Paraná"],
        correctAnswerIndex:1
    },
    {
        question:"Onde está localizado o Cristo Redentor?",
        answers: ["SP", "MG", "RJ", "BH"],
        correctAnswerIndex:2
    },
    {
        question: "Quem nasce no estado de Goiás é:",
        answers: ["Goienio", "Goleiro", "Goiano", "Goiaiano"],
        correctAnswerIndex:2
    },
    {
        question: "Em que ano foi fundado o estado de Sergipe?",
        answers: ["1835", "1830", "1825", "1820"],
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
           const questionCounter = document.getElementById('question-counter');
    questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;

}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswerIndex) {
        score++; 
    } else {
            alert("Você errou! Fim do jogo.");
            document.querySelector('.end-screen').style.display = 'block';
            document.querySelector('.container-questions').style.display = 'none';
            return;
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
    document.querySelector('.container-quiz').style.display = 'block'; 
    document.querySelector('.container-questions').style.display = 'none';
    document.getElementById('popup-background').style.display = 'none'; 
};


document.querySelector('.button').onclick = function() {
    const quizStartScreen = document.querySelector('.container-quiz');
    quizStartScreen.style.display = 'none';
    renderQuestion(); 
    document.querySelector('.container-questions').style.display = 'block'; 
};

const optionButtons = document.querySelectorAll('.bnt');
optionButtons.forEach((button, index) => {
    button.onclick = function() {
        checkAnswer(index);
    };
});


