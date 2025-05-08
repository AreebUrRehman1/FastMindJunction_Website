import { mcqaData } from "../data/main-content-answer-and-video-list.js";
import { mcqqData } from "../data/main-content-question-list.js";
import { sidebarData as SidebarDataClass } from "../data/sidebar-list.js";




const sidebarData = new SidebarDataClass();
let url = new URL (window.location.href)
let paperId = url.searchParams.get('Qno');
let resetPaperName = url.searchParams.get('Paper');


let question = mcqqData[resetPaperName];
let answer = mcqaData[resetPaperName];
let papersb = sidebarData[resetPaperName];

const correctSound = new Audio('Correct.mp3');
const wrongSound = new Audio('Wrong.mp3');



function renderAnswerWithMath(questionID) {
  document.querySelector(".main_content_answer_and_video").innerHTML = mainContentAnswerAndVideoDisplay(questionID);
  setTimeout(() => {
    if (window.MathJax && typeof MathJax.typeset === "function") {
      MathJax.typeset();
    }
  }, 100);
}





/* Reset Button Functionality */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("resetButton").addEventListener("click", () => {
    // Ask for confirmation before resetting
    const userConfirmed = confirm("Are you sure you want to reset? All your progress will be lost.");
    
    if (userConfirmed) {
      // Clear localStorage
      localStorage.removeItem(`paperData-${resetPaperName}`);

      // Reset URL parameters
      const newUrl = new URL(window.location);
      newUrl.searchParams.set("Qno", "1");
      newUrl.searchParams.set("OptionSelected", "default");
      window.history.pushState({}, "", newUrl);

      // Reload page to reset everything
      window.location.reload();
    }
  });
});







/*SideBar Coding */



// Attach event listeners separately
document.addEventListener("DOMContentLoaded", () => {
  let url = new URL(window.location.href);
  let paperId = url.searchParams.get("Qno") || "1"; // Default to question 1
  let optionSelected = url.searchParams.get("OptionSelected") || "default"; // Get selected option from URL
  let paperName = url.searchParams.get("Paper"); // Extract "Paper" from URL

  updateURL(paperId, optionSelected, paperName);
  highlightSidebarItem(paperId);
  updateContent(paperId, optionSelected, paperName);
  restoreTickColors(paperName); // Restore tick colors on page load
});


function updateContent(questionID, optionSelected, paperName) {
  document.querySelector(".main_content_question").innerHTML = mainContentQuestionDiplay(questionID);
  document.querySelector(".main_content_answer_and_video").innerHTML = "";

  // ✅ Rerun MathJax for the newly inserted question and options
  setTimeout(() => {
    if (window.MathJax && typeof MathJax.typeset === "function") {
      MathJax.typeset();
    }
  }, 100);

  const optionButtons = document.querySelectorAll(".main_question_buttons button");
  optionButtons.forEach((btn) => btn.classList.remove("green", "red"));

  optionButtons.forEach((btn) => {
    const optionDiv = btn.querySelector("div[class^='main_question_option']");
    const optionLetter = optionDiv ? optionDiv.textContent.trim() : "";
  
    if (optionLetter === optionSelected && optionSelected !== "default") {
      btn.classList.add(btn.getAttribute("data-option-js") === "correct" ? "green" : "red");
      btn.disabled = true;
    }
  });
  
  attachOptionListeners(questionID, paperName); // Always attach listeners

  if (optionSelected !== "default") {
    document.querySelector(".main_content_answer_and_video").innerHTML = mainContentAnswerAndVideoDisplay(questionID);
    renderAnswerWithMath(questionID); // this already re-typesets answer
  }
}


function attachOptionListeners(questionID, paperName) {
  const optionButtons = document.querySelectorAll(".main_question_buttons button");

  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      optionButtons.forEach((btn) => {
        btn.classList.remove("green", "red");
        btn.disabled = true;
      });

      // ✅ Get the selected option from the nested div
      let optionDiv = button.querySelector("div[class^='main_question_option']");
      let selectedOption = optionDiv ? optionDiv.textContent.trim() : "default";
      let correctOptionBtn = Array.from(optionButtons).find(btn => btn.getAttribute("data-option-js") === "correct");
      let correctAnswerDiv = correctOptionBtn?.querySelector("div[class^='main_question_option']");
      let correctAnswer = correctAnswerDiv ? correctAnswerDiv.textContent.trim() : "";

      let selectedSidebarItem = document.querySelector(".highlight .tick_svg");

      let tickColor = "";
      if (button.getAttribute("data-option-js") === "correct") {
        button.classList.add("green");
        tickColor = "fill_green";
      } else {
        button.classList.add("red");
        tickColor = "fill_red";
      }

      if (selectedSidebarItem) {
        selectedSidebarItem.classList.add(tickColor);
      }

      let storedData = JSON.parse(localStorage.getItem(`paperData-${paperName}`)) || {};
      storedData[questionID] = selectedOption;
      storedData[`tickColor-${questionID}`] = tickColor;
      localStorage.setItem(`paperData-${paperName}`, JSON.stringify(storedData));

      updateURL(questionID, selectedOption, paperName);
      document.querySelector(".main_content_answer_and_video").innerHTML = mainContentAnswerAndVideoDisplay(questionID);
      renderAnswerWithMath(questionID);

      // Show the Next button at bottom
      const bottomNext = document.getElementById("bottomNextContainer");
      if (bottomNext) {
        bottomNext.classList.remove("hidden");
      }

      // Set up what happens when "Next" is clicked
      const nextBtn = document.getElementById("nextButton");
      if (nextBtn) {
        nextBtn.onclick = () => {
          const nextQID = (parseInt(questionID) + 1).toString();
          const storedData = JSON.parse(localStorage.getItem(`paperData-${paperName}`)) || {};
          const storedOption = storedData[nextQID] || "default";
          updateURL(nextQID, storedOption, paperName);
          updateContent(nextQID, storedOption, paperName);
          highlightSidebarItem(nextQID);
        
          // Hide Next button and clear feedback message
          bottomNext.classList.add("hidden");
          const feedbackEl = document.getElementById("feedbackMessage");
          if (feedbackEl) {
            feedbackEl.textContent = "";
          }
        };
      }

      const feedbackEl = document.getElementById("feedbackMessage");
      if (selectedOption === correctAnswer) {
        feedbackEl.textContent = "🎉 Fantastic! You nailed it! Keep that sharp mind working!";
        correctSound.play();
      } else {
        feedbackEl.textContent = "😅 Not quite, but don't worry! Every attempt gets you closer to the answer.";
        wrongSound.play();
      }

    });
  });
}


function updateURL(questionID, selectedOption = "default", paperName) {
  const newUrl = new URL(window.location);
  newUrl.searchParams.set("Qno", questionID);
  newUrl.searchParams.set("OptionSelected", selectedOption);
  if (paperName) newUrl.searchParams.set("Paper", paperName);
  window.history.pushState({}, "", newUrl);
};


function highlightSidebarItem(questionID) {
  const sidebarItems = document.querySelectorAll(".sidebar_question_bg");
  if (sidebarItems.length > 0) {
    sidebarItems.forEach((el) => el.classList.remove("highlight"));
    sidebarItems[parseInt(questionID) - 1]?.classList.add("highlight"); // Ensure the correct question is highlighted
  }
};


function restoreTickColors(paperName) {
  if (!paperName) return;

  let storedData = JSON.parse(localStorage.getItem(`paperData-${paperName}`)) || {};
  document.querySelectorAll(".sidebar_question_bg").forEach((item, index) => {
    let questionID = papersb[index].questionID;
    let tickColor = storedData[`tickColor-${questionID}`];

    if (tickColor) {
      let tickSvg = item.querySelector(".tick_svg");
      if (tickSvg) {
        tickSvg.classList.add(tickColor);
      }
    }
  });
};







/*Sidebar Display */

export function sidebar() {
let sidebarHTML = ``;

papersb.forEach((question) => {
  sidebarHTML += `
    <div class="sidebar_question_bg">
    <div class="sidebar_question_con">
      <div class="tick_svg_con"><svg class="tick_svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/></svg></div>
      <div class="sidebar_question">${question.questionNo}</div>
      </div>
    </div>
    `;
});
return sidebarHTML;
};







/*Question Display */

let questionRequired = []; 



function questionSelector(name) {
questionRequired = [];

question.forEach((List) => {
    if (name === List.QuestionID) {
        questionRequired.push(List);
    }
  });
};



function mainContentQuestionDiplay(name) {
  questionSelector(name);
  
  let mainContentQuestionHTML = ``;
  
  questionRequired.forEach((content) => {
  mainContentQuestionHTML += `
        <div class="mcq-question">${content.Question}</div>
        <div class="mcq-question">${content.Question2}</div>
        <div class="mcq-question-image">${content.QuestionImage}</div>
  
  
      <div class="main_question_buttons">
        <button class = "option1"  data-option-js = "${content.optionNo.A}">
        <div class="main_question_option_a">A</div>
        <span>${content.Options.optionData1}</span>
        </button>
        <button class = "option2"  data-option-js = "${content.optionNo.B}">
        <div class="main_question_option_b">B</div>
        <span>${content.Options.optionData2}</span>
        </button>
        <button class = "option3"  data-option-js = "${content.optionNo.C}">
        <div class="main_question_option_c">C</div>
        <span>${content.Options.optionData3}</span>
        </button>
        <button class = "option4"  data-option-js = "${content.optionNo.D}">
        <div class="main_question_option_d">D</div>
        <span>${content.Options.optionData4}</span>
        </button>
      </div>
    `;
  });
  
  return mainContentQuestionHTML;
};






/*Answer Display */
let answerRequired = []; 


function answerSelector(name) {
answerRequired = [];
answer.forEach((List) => {
    if (name === List.answerID) {
        answerRequired.push(List);
    }
});
};



export function mainContentAnswerAndVideoDisplay(name) {

answerRequired = [];

answerSelector(name);

let mainContentAnswerAndVideoHTML = ``;

answerRequired.forEach((list) => {

  mainContentAnswerAndVideoHTML += `
  <div class="main_content_answer">
  
  ${list.mainAnswer}

  </div>

  </div>

  <div class="main_content_more">

    <div class="main_content_box">
      <div class="box_text">🎥 Prefer learning through video?</div>
      <div class="box_subtext">Click the button below to watch it on YouTube.</div>
      <a href="${list.videoLink}" target="_blank" class="box_button">Watch Video</a>
    </div>
  
    <div class="main_content_box">
      <div class="box_text">📝 Want more practice with similar questions?</div>
      <div class="box_subtext">Click below to explore practice materials.</div>
      <a href="${list.practiceLink}" target="_blank" class="box_button">Practice More</a>
    </div>
  

  </div>
    `;

});
return mainContentAnswerAndVideoHTML;

};


/*Browser Feature */


window.addEventListener("popstate", function (event) {
  window.location.href = document.referrer || "http://127.0.0.1:5500/PAGES/Edexcel_IAL/Physics/WPH11/2023/October/Mode/Modes.html"; // Redirect to the previous webpage
});


/*The Display Stuff */
document.querySelector('.sidebar_question_list').innerHTML = sidebar();
document.querySelector('.main_content_question').innerHTML = mainContentQuestionDiplay(paperId);