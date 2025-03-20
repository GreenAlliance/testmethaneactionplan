const questions = [
  // Sector 1: Agriculture
  { question: "Will you encourage a 10% reduction in meat consumption by 2030?", sector: "Agriculture", reduction: 5 },
  { question: "Will you support alternative protein development as a cost-reducing ingredient in processed foods?", sector: "Agriculture", reduction: 5 },
  { question: "Will you help more cows eat methane-reducing feed additives?", sector: "Agriculture", reduction: 1 },
  { question: "Will you help more farmers acidify their slurry stores?", sector: "Agriculture", reduction: 1 },
  { question: "Will you help more farmers capture methane from their slurry and sell it to the grid?", sector: "Agriculture", reduction: 1 },
  { question: "Will you back new technology to encourage selective breeding in cows?", sector: "Agriculture", reduction: 0 },
  { question: "Will you back new technology to develop methane-reducing vaccines for cows?", sector: "Agriculture", reduction: 0 },

  // Sector 2: Energy
  { question: "Will you mandate regular leak detection and repair for oil and gas operators?", sector: "Energy", reduction: 1 },
  { question: "Will you bring forward the ban on routine venting and flaring?", sector: "Energy", reduction: 1 },
  { question: "Will you regulate to make oil & gas operators upgrade their facilities?", sector: "Energy", reduction: 1 },
  { question: "Would you regulate to make oil & gas operators replace their leaky gas mains supply?", sector: "Energy", reduction: 4 },

  // Sector 3: Landfills
  { question: "Will you continue best practice by maintaining the landfill tax?", sector: "Landfills", reduction: 8 },
  { question: "Will you ban organic waste in landfills from 2028?", sector: "Landfills", reduction: 0 },
  { question: "Will you ensure support for capturing landfill gas remains consistent?", sector: "Landfills", reduction: 3 },
  { question: "Will you increase the capture rate of landfill methane to 80% by 2030?", sector: "Landfills", reduction: 0 }
];

let currentQuestionIndex = 0;
let totalReduction = 0;

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  const questionContainer = document.getElementById("question-container");

  // Show the current question and Yes/No buttons
  questionContainer.innerHTML = `
    <div class="question">
      <p>${question.question}</p>
      <button onclick="answerQuestion(true)">Yes</button>
      <button onclick="answerQuestion(false)">No</button>
    </div>
  `;
}

function answerQuestion(isYes) {
  const question = questions[currentQuestionIndex];
  
  // If the answer is Yes, add the percentage to the total
  if (isYes) {
    totalReduction += question.reduction;
  }

  // Move to the next question
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const result = document.getElementById("result");

  // Formal message based on the total reduction percentage
  if (totalReduction >= 30) {
    result.innerHTML = `
      <p>Congratulations! You have successfully created a national methane reduction roadmap.</p>
      <p>Your actions demonstrate a commitment to reducing methane emissions and supporting a sustainable future.</p>
    `;
    result.classList.add("success");
  } else {
    result.innerHTML = `
      <p>Unfortunately, you did not achieve the 30% methane reduction target necessary to create a national methane roadmap.</p>
      <p>While your efforts are appreciated, further action will be required to significantly reduce methane emissions.</p>
    `;
    result.classList.add("failure");
  }

  result.classList.remove("hidden");
}

window.onload = function() {
  displayQuestion();
};