const questions = [
  { question: "Will you encourage 10 percent reduction in meat eating by 2030?", percentage: 5 },
  { question: "Will you support alternative protein development to be a cost reducing ingredient in processed foods?", percentage: 5 },
  { question: "Will you help more cows eat methane reducing feed additives?", percentage: 1 },
  { question: "Will you help more farmers acidify their slurry stores?", percentage: 1 },
  { question: "Will you help more farmers capture methane from their slurry and sell it to the grid?", percentage: 1 },
  { question: "Will you back new technology to encourage selective breeding in cows?", percentage: 0 },
  { question: "Will you back new technology to develop methane reducing vaccines for cows?", percentage: 0 },
  { question: "Will you mandate regular leak detection and repair for oil and gas operators?", percentage: 1 },
  { question: "Will you bring forward the ban on routine venting and flaring?", percentage: 1 },
  { question: "Will you regulate to make oil & gas operators upgrade their facilities?", percentage: 1 },
  { question: "Would you regulate to make oil & gas operators replace their leaky gas mains supply?", percentage: 4 },
  { question: "Will you keep up best practice by continuing landfill tax?", percentage: 8 },
  { question: "Will you ban organic waste in landfills from 2028?", percentage: 0 },
  { question: "Will you make sure support for capturing landfill gas does not fall away?", percentage: 3 },
  { question: "Will you increase the capture rate of landfill methane to 80 percent by 2030?", percentage: 0 }
];

let totalReduction = 0;

function showQuestion(index) {
  if (index < questions.length) {
    const question = questions[index];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
      <p>${question.question}</p>
      <button class="answer-btn" onclick="answerQuestion(true, ${index})">Yes</button>
      <button class="answer-btn" onclick="answerQuestion(false, ${index})">No</button>
    `;
    document.getElementById('quiz-container').appendChild(questionElement);
  } else {
    showResult();
  }
}

function answerQuestion(answer, index) {
  if (answer) {
    totalReduction += questions[index].percentage;
  }
  document.getElementById('quiz-container').innerHTML = ''; // Clear questions
  showQuestion(index + 1); // Show next question
}

function showResult() {
  const resultMessage = totalReduction > 30
    ? "Congratulations! You have successfully created a methane reduction roadmap."
    : "Unfortunately, you did not create a methane reduction roadmap. Keep working on sustainable solutions!";
  document.getElementById('result-message').innerText = resultMessage;
  document.getElementById('total-reduction').innerText = totalReduction;

  document.getElementById('result').classList.remove('hidden');
}

showQuestion(0); // Start the quiz