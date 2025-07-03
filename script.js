// script.js

// DOM Elements
const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const allTypesContainer = document.getElementById('all-types-container');

const startSimpleBtn = document.getElementById('start-simple-btn');
const startCompleteBtn = document.getElementById('start-complete-btn');

const questionTextEl = document.getElementById('question-text');
const optionAButton = document.getElementById('option-a');
const optionBButton = document.getElementById('option-b');
const progressBar = document.getElementById('progress-bar');
const typesGrid = document.getElementById('types-grid');

// Quiz state
let currentQuestionIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let activeQuestions = [];

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
    populateAllTypesGrid(); // 页面加载时就渲染16人格网格
    
    // 确保按钮和问题变量都已加载
    if (startSimpleBtn && simpleQuestions) {
        startSimpleBtn.addEventListener('click', () => startQuiz(simpleQuestions));
    }
    if (startCompleteBtn && completeQuestions) {
        startCompleteBtn.addEventListener('click', () => startQuiz(completeQuestions));
    }
    
    optionAButton.addEventListener('click', () => handleAnswer('A'));
    optionBButton.addEventListener('click', () => handleAnswer('B'));
});

// --- 功能函数 ---

function startQuiz(questionSet) {
    activeQuestions = questionSet;
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    startContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    allTypesContainer.style.display = 'none';
    quizContainer.style.display = 'block';

    showQuestion();
}

function showQuestion() {
    const question = activeQuestions[currentQuestionIndex];
    questionTextEl.textContent = `第 ${currentQuestionIndex + 1} / ${activeQuestions.length} 题: ${question.text}`;
    optionAButton.textContent = question.optionA;
    optionBButton.textContent = question.optionB;
    updateProgressBar();
}

function handleAnswer(answer) {
    const question = activeQuestions[currentQuestionIndex];
    const dimension = question.dimension;
    
    if (answer === 'A') {
        scores[dimension[0]]++;
    } else {
        scores[dimension[1]]++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < activeQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    let resultType = "";
    resultType += scores.E > scores.I ? 'E' : 'I';
    resultType += scores.S > scores.N ? 'S' : 'N';
    resultType += scores.T > scores.F ? 'T' : 'F';
    resultType += scores.J > scores.P ? 'J' : 'P';
    
    const resultData = personalityTypes[resultType];

    document.getElementById('result-type').textContent = resultType;
    document.getElementById('result-type').style.color = resultData.color;
    
    document.getElementById('result-temperament').textContent = resultData.temperament;
    document.getElementById('result-temperament').style.color = resultData.color;

    document.getElementById('result-title').textContent = `${resultData.title_zh} (${resultData.title_en})`;
    document.getElementById('result-description').textContent = resultData.description;
    
    resultContainer.style.borderColor = resultData.color;
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / activeQuestions.length) * 100;
    progressBar.style.width = progress + '%';
}

function restartQuiz() {
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    startContainer.style.display = 'block';
    allTypesContainer.style.display = 'block';
    progressBar.style.width = '0%';
}

/**
 * 修改此函数以支持新的样式
 */
function populateAllTypesGrid() {
    typesGrid.innerHTML = ''; // 清空
    for (const type in personalityTypes) {
        const data = personalityTypes[type];
        const card = document.createElement('div');
        card.className = 'type-card';
        card.style.borderColor = data.color;
        
        // 新的HTML结构，将中英文标题分开
        card.innerHTML = `
            <div class="type-card-name" style="color: ${data.color};">${type}</div>
            <div class="type-card-title">
                ${data.title_zh}
                <span class="type-card-title-en">(${data.title_en})</span>
            </div>
        `;
        typesGrid.appendChild(card);
    }
}
