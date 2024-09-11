let num1, num2, operator, correctAnswer;

function generateQuestion() {
    const operations = ['+', '-', '*', '/'];
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    operator = operations[Math.floor(Math.random() * operations.length)];
    
    if (operator === '/' && num1 % num2 !== 0) {
        num1 = num2 * Math.floor(Math.random() * 5) + 1; // Ensure it's divisible
    }
    
    document.getElementById("question").innerText = `What is ${num1} ${operator} ${num2}?`;
    document.getElementById("answer").value = '';
    document.getElementById("result").innerText = '';
    document.getElementById("next-btn").style.display = 'none';

    calculateAnswer();
}

function calculateAnswer() {
    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = num1 / num2;
            break;
    }
}

function submitAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = 'Correct! 🎉';
        document.getElementById("result").style.color = 'green';
    } else {
        document.getElementById("result").innerText = `Wrong! The correct answer was ${correctAnswer}.`;
        document.getElementById("result").style.color = 'red';
    }
    document.getElementById("next-btn").style.display = 'block';
}

window.onload = generateQuestion;
