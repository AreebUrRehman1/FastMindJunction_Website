// Retrieve "Paper" parameter from URL
let urlParams = new URLSearchParams(window.location.search);
let paperName = "WPH11MVAAE";
let paperName2 = "WPH11MVAAM";
let paperName3 = "WPH11MVAAH";


// Retrieve saved option for Qno=1 from localStorage, using paper-specific storage
let storedData = JSON.parse(localStorage.getItem(`paperData-${paperName}`)) || {};
let savedOption = storedData["1"] || "default";

let storedData2 = JSON.parse(localStorage.getItem(`paperData-${paperName2}`)) || {};
let savedOption2 = storedData2["1"] || "default";

let storedData3 = JSON.parse(localStorage.getItem(`paperData-${paperName3}`)) || {};
let savedOption3 = storedData3["1"] || "default";

// Generate dynamic HTML
let firstSectionHTML = `     
    <div><a href="../Webpage/Webpage.html?Paper=${paperName}&Qno=1&OptionSelected=${savedOption}"><button class="easy">🟢 Foundational Level</button></a></div>
    <div><a href="../Webpage/Webpage.html?Paper=${paperName2}&Qno=1&OptionSelected=${savedOption2}"><button class="medium">🟡 Intermediate Level</button></a></div>
    <div><a href="../Webpage/Webpage.html?Paper=${paperName3}&Qno=1&OptionSelected=${savedOption3}"><button class="hard">🔴 Advanced Level</button></a></div>
`;


// Inject the HTML into the page
document.querySelector(".first_section_button").innerHTML = firstSectionHTML;
