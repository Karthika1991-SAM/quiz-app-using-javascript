// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];
const questionContainerElement = document.getElementById('quiz-container');
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("answer-list");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById('next');
let currentQuestion = 0;
let score = 0;
nextButton.hidden = true;


function loadQuestion(ques) {
  
     
    // Remove the last 'itemsToRemove' elements
    for (let i = 0; i < 4; i++) {
        // Check if there are enough items to remove
        if (optionsElement.children.length > 0) {
            optionsElement.removeChild(optionsElement.lastElementChild);
        }
    }
     
        questionElement.innerText = ques.text;
        var i=0;
       // ques.options
        ques.options.forEach(function (answer) {
        const  liElement=document.createElement("LI");
            const textNode= document.createTextNode(answer);
            const optlement=document.createElement("input");
            optlement.type='radio';
            optlement.name='answer';
            optlement.value=i;
            liElement.appendChild(optlement);
            liElement.appendChild(textNode);
            optionsElement.appendChild(liElement);
           i++;
        });
      
    // Load the first question and load subsequent question from this function

  
}

submitButton.addEventListener("click", () => {
    // Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option
    nextButton.hidden = false;
    submitButton.hidden = true;
    const checkedRadioBtn=document.querySelector('input[name="answer"]:checked');
    const correctAns=checkedRadioBtn.value;
    const listItems = document.querySelectorAll('#answer-list li');
    const quesAnswer=questions[currentQuestion].correct;
    if(correctAns==quesAnswer)
    {
       score++;
       listItems[correctAns].style.backgroundColor = 'lightgreen';
    }
    else 
    {
        listItems[quesAnswer].style.backgroundColor = 'lightgreen';
    }
   
});
 
nextButton.addEventListener("click", () => {
   
    currentQuestion++;

   if(currentQuestion<questions.length)
    {
        nextButton.hidden = true;
        submitButton.hidden = false;
        loadQuestion(questions[currentQuestion]);
    }
    else{
        alert("Quiz finished! Your score is:" +score+"/10");
        location.reload();
    }
    // Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
    // Also check for quiz completion here as well
});

// Load the first question on startup
//loadQuestion();
loadQuestion(questions[currentQuestion]); 