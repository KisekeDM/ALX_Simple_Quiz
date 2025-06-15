function checkAnswer() {
    
    const correctAnswer = "4";

    
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    
    const feedbackElement = document.getElementById("feedback");

    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "#28a745"; 
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "#dc3545"; 
    }
}


document.getElementById("submit-answer").addEventListener("click", checkAnswer);
