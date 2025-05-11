// Import dependencies
import { mcqaData } from "../data/main-content-answer-and-video-list.js";
import { mcqqData } from "../data/main-content-question-list.js";
import { sidebarData as SidebarDataClass } from "../data/sidebar-list.js";

// Initialize
const sidebarData = new SidebarDataClass();
const url = new URL(window.location.href);
const paperId = url.searchParams.get("Qno") || "1";
const paperName = url.searchParams.get("Paper");
const optionSelected = url.searchParams.get("OptionSelected") || "default";

const questionList = mcqqData[paperName];
const answerList = mcqaData[paperName];
const papersb = sidebarData[paperName];

const correctSound = new Audio("Correct.mp3");
const wrongSound = new Audio("Wrong.mp3");

// Helpers
function getQuestionByID(id) {
  return questionList.find(q => q.QuestionID === id);
}

function getAnswerByID(id) {
  return answerList.find(a => a.answerID === id);
}

function updateURL(questionID, selectedOption = "default") {
  const newUrl = new URL(window.location);
  newUrl.searchParams.set("Qno", questionID);
  newUrl.searchParams.set("OptionSelected", selectedOption);
  if (paperName) newUrl.searchParams.set("Paper", paperName);
  window.history.pushState({}, "", newUrl);
}

function highlightSidebarItem(questionID) {
  const items = document.querySelectorAll(".sidebar_question_bg");
  items.forEach((el, idx) => {
    el.classList.toggle("highlight", idx === parseInt(questionID) - 1);
  });
}

function restoreTickColors() {
  const storedData = JSON.parse(localStorage.getItem(`paperData-${paperName}`)) || {};
  document.querySelectorAll(".sidebar_question_bg").forEach((item, index) => {
    const questionID = papersb[index].questionID;
    const tickColor = storedData[`tickColor-${questionID}`];
    if (tickColor) item.querySelector(".tick_svg")?.classList.add(tickColor);
  });
}

function renderMath() {
  if (window.MathJax && typeof MathJax.typeset === "function") {
    MathJax.typeset();
  }
}

// UI Rendering
function sidebar() {
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
}

function mainContentQuestionDiplay(name) {
  let content = getQuestionByID(name);
  if (!content) return "";
  return `
    <div class="mcq-question">${content.Question}</div>
    <div class="mcq-question">${content.Question2}</div>
    <div class="mcq-question-image">${content.QuestionImage}</div>
    <div class="main_question_buttons">
      <button class="option1" data-option-js="${content.optionNo.A}">
        <div class="main_question_option_a">A</div>
        <span>${content.Options.optionData1}</span>
      </button>
      <button class="option2" data-option-js="${content.optionNo.B}">
        <div class="main_question_option_b">B</div>
        <span>${content.Options.optionData2}</span>
      </button>
      <button class="option3" data-option-js="${content.optionNo.C}">
        <div class="main_question_option_c">C</div>
        <span>${content.Options.optionData3}</span>
      </button>
      <button class="option4" data-option-js="${content.optionNo.D}">
        <div class="main_question_option_d">D</div>
        <span>${content.Options.optionData4}</span>
      </button>
    </div>`;
}

function mainContentAnswerAndVideoDisplay(name) {
  const list = getAnswerByID(name);
  if (!list) return "";
  return `
    <div class="main_content_answer">
      ${list.mainAnswer}
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
    </div>`;
}

function updateContent(questionID, selectedOption) {
  document.querySelector(".main_content_question").innerHTML = mainContentQuestionDiplay(questionID);
  document.querySelector(".main_content_answer_and_video").innerHTML = selectedOption !== "default" ? mainContentAnswerAndVideoDisplay(questionID) : "";
  setTimeout(renderMath, 100);
  attachOptionListeners(questionID);
}

function attachOptionListeners(questionID) {
  const buttons = document.querySelectorAll(".main_question_buttons button");
  const storedData = JSON.parse(localStorage.getItem(`paperData-${paperName}`)) || {};
  const feedbackEl = document.getElementById("feedbackMessage");
  const nextBtn = document.getElementById("nextButton");
  const nextContainer = document.getElementById("bottomNextContainer");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const optionDiv = button.querySelector("div[class^='main_question_option']");
      const selected = optionDiv?.textContent.trim();
      const correctBtn = Array.from(buttons).find(btn => btn.getAttribute("data-option-js") === "correct");
      const correctDiv = correctBtn?.querySelector("div[class^='main_question_option']");
      const correctAnswer = correctDiv?.textContent.trim();

      buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("green", "red");
      });

      const isCorrect = selected === correctAnswer;
      button.classList.add(isCorrect ? "green" : "red");
      document.querySelector(".highlight .tick_svg")?.classList.add(isCorrect ? "fill_green" : "fill_red");

      storedData[questionID] = selected;
      storedData[`tickColor-${questionID}`] = isCorrect ? "fill_green" : "fill_red";
      localStorage.setItem(`paperData-${paperName}`, JSON.stringify(storedData));

      updateURL(questionID, selected);
      document.querySelector(".main_content_answer_and_video").innerHTML = mainContentAnswerAndVideoDisplay(questionID);
      renderMath();

      if (nextContainer) {
        nextContainer.classList.remove("hidden");
        const nextButton = document.getElementById("nextButton");
        if (nextButton) {
          if (questionID === "10") {
            nextButton.textContent = "Finish";
            let finishClickCount = 0;
nextButton.onclick = () => {
  finishClickCount++;
  correctSound.pause();
              wrongSound.pause();
              correctSound.currentTime = 0;
              wrongSound.currentTime = 0;

              const storedDataFinal = JSON.parse(localStorage.getItem(`paperData-${paperName}`)) || {};
              let correctCount = 0;
              for (let i = 1; i <= 10; i++) {
                const tick = document.querySelectorAll(".sidebar_question_bg")[i - 1]?.querySelector(".tick_svg");
                if (tick?.classList.contains("fill_green")) {
                  correctCount++;
                }
              }

              const feedbackEl = document.getElementById("feedbackMessage");
              if (feedbackEl) {
                let message = `🎉 You have completed all questions! You got ${correctCount} out of 10 correct.`;
if (correctCount < 5) {
  message += "<br><br>Don't get discouraged, learning takes time. 🌱 We'll get there! 😊";
} else if (correctCount <= 8) {
  message += "<br><br>That's a solid effort! 👍 You're so close to getting it! ✨ Keep pushing, you're almost there! 🚀";
} else {
  message += "<br><br>Fantastic work! 🎉 You've really nailed it! 💯 Keep up the amazing effort! 🌟 So proud of your progress! 😄";
}
feedbackEl.innerHTML = `<strong>${message}</strong>`;
              }

              if (correctCount < 5 && finishClickCount < 2) {
    const restartBtn = document.getElementById("restartButton");
    if (!restartBtn) {
      const newBtn = document.createElement("button");
      newBtn.id = "restartButton";
      newBtn.className = "next_button";
      newBtn.textContent = "Restart";
      newBtn.onclick = () => {
        localStorage.removeItem(`paperData-${paperName}`);
        const newUrl = new URL(window.location);
        newUrl.searchParams.set("Qno", "1");
        newUrl.searchParams.set("OptionSelected", "default");
        window.history.pushState({}, "", newUrl);
        window.location.reload();
      };
      newBtn.style.marginLeft = "10px";
      nextContainer.appendChild(newBtn);
    }
    return;
  }

  if (finishClickCount >= 2) {
  localStorage.removeItem(`paperData-${paperName}`);
  const newUrl = new URL(window.location);
  newUrl.searchParams.set("Qno", "1");
  newUrl.searchParams.set("OptionSelected", "default");
  window.history.pushState({}, "", newUrl);
  window.location.href = "../../Year/year.html";
}
            };
          } else {
            nextButton.textContent = "Next";
            nextButton.onclick = () => {
              correctSound.pause();
              wrongSound.pause();
              correctSound.currentTime = 0;
              wrongSound.currentTime = 0;
              const nextQ = (parseInt(questionID) + 1).toString();
              const storedOpt = storedData[nextQ] || "default";
              updateURL(nextQ, storedOpt);
              updateContent(nextQ, storedOpt);
              highlightSidebarItem(nextQ);
              if (nextContainer) nextContainer.classList.add("hidden");
              if (feedbackEl) feedbackEl.textContent = "";
            };
          }
        }
      }

      if (feedbackEl) {
        feedbackEl.textContent = isCorrect
          ? "🎉 Fantastic! You nailed it! Keep that sharp mind working!"
          : "😅 Not quite, but don't worry! Every attempt gets you closer to the answer.";
      }

      (isCorrect ? correctSound : wrongSound).play();
    });
  });
}

function setupResetButton() {
  const resetBtn = document.getElementById("resetButton");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to reset? All your progress will be lost.")) {
        localStorage.removeItem(`paperData-${paperName}`);
        const newUrl = new URL(window.location);
        newUrl.searchParams.set("Qno", "1");
        newUrl.searchParams.set("OptionSelected", "default");
        window.history.pushState({}, "", newUrl);
        window.location.reload();
      }
    });
  }
}

function init() {
  document.querySelector(".sidebar_question_list").innerHTML = sidebar();
  updateURL(paperId, optionSelected);
  highlightSidebarItem(paperId);
  restoreTickColors();
  updateContent(paperId, optionSelected);
  setupResetButton();
}

document.addEventListener("DOMContentLoaded", init);
