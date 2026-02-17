// Simple Quiz Logic
document.addEventListener('DOMContentLoaded', () => {
  const quizForm = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');
  
  if (!quizForm) return;

  const correctAnswers = {
    q1: "troposphere",
    q2: "stratosphere",
    q3: "mesosphere",
    q4: "thermosphere",
    q5: "exosphere"
  };

  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let score = 0;
    const formData = new FormData(quizForm);
    
    for (let [question, answer] of formData.entries()) {
      if (answer === correctAnswers[question]) {
        score++;
      }
    }

    const percentage = Math.round((score / 5) * 100);
    let message = '';

    if (percentage === 100) message = "Perfect! You're an atmosphere master! 🌍✨";
    else if (percentage >= 80) message = "Excellent knowledge!";
    else if (percentage >= 60) message = "Good job! Keep learning.";
    else message = "Time to review the layers again! You'll get it next time.";

    resultDiv.innerHTML = `
      <div style="font-size:2.2rem; margin:1.5rem 0;">
        ${score}/5 (${percentage}%)
      </div>
      <div>${message}</div>
    `;
    resultDiv.style.color = percentage >= 60 ? '#00f7ff' : '#ff6b6b';
  });

  // Highlight selected option
  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
      const radio = option.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
      }
    });
  });
});