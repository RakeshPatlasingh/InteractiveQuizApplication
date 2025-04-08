const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: "New Delhi"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What does ECE stand for?",
      options: ["Electrical and Computer Engineering", "Electronics and Communication Engineering", "Energy Control Engineering", "Electronic Chip Engineering"],
      answer: "Electronics and Communication Engineering"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById('question');
  const optionButtons = document.querySelectorAll('.option');
  const nextBtn = document.getElementById('next-btn');
  const scoreEl = document.getElementById('score');
  
  function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionButtons.forEach((btn, i) => {
      btn.textContent = q.options[i];
      btn.className = 'option';
      btn.disabled = false;
    });
    nextBtn.style.display = "none";
  }
  
  optionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.textContent;
      const correct = questions[currentQuestion].answer;
      if (selected === correct) {
        btn.classList.add('correct');
        score++;
      } else {
        btn.classList.add('wrong');
      }
      optionButtons.forEach(b => b.disabled = true);
      nextBtn.style.display = "block";
    });
  });
  
  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Completed!";
      document.querySelector('.options').style.display = 'none';
      nextBtn.style.display = 'none';
      scoreEl.textContent = `Your Score: ${score}/${questions.length}`;
    }
  });
  
  loadQuestion();
  