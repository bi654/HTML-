const quizData = [
    {
      question: "日本の首都は？",
      options: ["東京", "京都", "大阪", "名古屋"],
      correctAnswer: "東京"
    },
    {
      question: "HTMLは何の略ですか？",
      options: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "High Text Markup Language", "Hyperlink and Text Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "あ？",
      options: ["あ", "い", "う", "え","お"],
      correctAnswer: "お"
      },
    // 追加の質問をここに追加できます

  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
  
    questionElement.textContent = quizData[currentQuestion].question;
    optionsContainer.innerHTML = "";
  
    quizData[currentQuestion].options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => selectAnswer(option));
      optionsContainer.appendChild(button);
    });
  }
  
  function selectAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const resultElement = document.getElementById("result");
  
    quizContainer.innerHTML = `<h1>クイズ終了！ スコア: ${score} / ${quizData.length}</h1>`;
    resultElement.innerHTML = `<p>最後の質問の正解は「${quizData[quizData.length - 1].correctAnswer}」でした。</p>`;
    
  }

  
  loadQuestion();
  