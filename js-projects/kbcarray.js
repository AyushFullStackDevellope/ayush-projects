// function for beginning button 
// hide and unhide function
function letsBegin() {
    document.getElementById("play-button").hidden = true;
    document.getElementById("main-body").hidden = false;
    displayQuestion();
}

// using array question 
let questions = [
    {
        question: "01. What is the capital city of Mongolia?",
        answers: ["A. Ulaanbaatar", "B. Astana", "C. Kathmandu", "D. Hanoi"],
        correct: 0
    },
    {
        question: "02. Who wrote the epic fantasy novel 'The Lord of the Rings'?",
        answers: ["A. J.K. Rowling", "B. George R.R. Martin", "C. J.R.R. Tolkien", "D. C.S. Lewis"],
        correct: 2
    },
    {
        question: "03. Which planet is known as the Red Planet?",
        answers: ["A. Jupiter", "B. Mars", "C. Saturn", "D. Venus"],
        correct: 1
    },
    {
        question: "04. What is the hardest natural substance on Earth?",
        answers: ["A. Diamond", "B. Graphite", "C. Quartz", "D. Tungsten"],
        correct: 0
    },
    {
        question: "05. Which of these famous scientists developed the theory of general relativity?",
        answers: ["A. Isaac Newton", "B. Albert Einstein", "C. Nikola Tesla", "D. Stephen Hawking"],
        correct: 1
    },
    {
        question: "06. In which year did the French Revolution begin?",
        answers: ["A. 1789", "B. 1776", "C. 1804", "D. 1812"],
        correct: 0
    },
    {
        question: "07. Who painted the ceiling of the Sistine Chapel?",
        answers: ["A. Leonardo da Vinci", "B. Michelangelo", "C. Raphael", "D. Donatello"],
        correct: 1
    },
    {
        question: "08. What is the world's longest river?",
        answers: ["A. Amazon River", "B. Nile River", "C. Yangtze River", "D. Mississippi River"],
        correct: 0
    },
    {
        question: "09. Who invented the World Wide Web (WWW)?",
        answers: ["A. Tim Berners-Lee", "B. Steve Jobs", "C. Bill Gates", "D. Mark Zuckerberg"],
        correct: 0
    },
    {
        question: "10. What is the chemical symbol for the element lead?",
        answers: ["A. Ld", "B. L", "C. Pb", "D. Pd"],
        correct: 2
    }
];
// question starting from one
let currentQuestionIndex = 0;
// questio and options 
function displayQuestion() {
    const g = questions[currentQuestionIndex];
    document.getElementById("text-display").innerHTML = g.question;
    document.getElementById("option-one").innerHTML = g.answers[0];
    document.getElementById("option-two").innerHTML = g.answers[1];
    document.getElementById("option-three").innerHTML = g.answers[2];
    document.getElementById("option-four").innerHTML = g.answers[3];
    document.getElementById("text-display").style.color = "white"; // Reset text color
}
// question and correct or incorrect options function
function answer(givenAnswer) {
    document.getElementById("loader").style.display = "block";
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        if (questions[currentQuestionIndex].correct === givenAnswer) {
            document.getElementById("text-display").innerHTML = "Spot on! That's the perfect response!!";
            document.getElementById("text-display").style.color = "green";
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(displayQuestion, 2100); // Delay before showing the next question
            } else {
                document.getElementById("text-display").innerHTML = "Your bank account has been credited with Rs. 7,00,00,000!";
            }
        } else {
            document.getElementById("text-display").innerHTML = "Better luck next time.";
            document.getElementById("text-display").style.color = "red";
            currentQuestionIndex = 0;
            setTimeout(displayQuestion, 2100); // Delay before resetting to the first question
        }
    }, 2100);
}


