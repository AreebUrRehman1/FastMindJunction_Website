// Retrieve "Paper" parameter from URL
let urlParams = new URLSearchParams(window.location.search);
let paperName = "WPH11J22";


// Retrieve saved option for Qno=1 from localStorage, using paper-specific storage
let storedData = JSON.parse(localStorage.getItem(`paperData-${paperName}`)) || {};
let savedOption = storedData["1"] || "default";


// Generate dynamic HTML
let firstSectionHTML = `
    <div>
        <a href="../../Webpage/Webpage.html?Paper=${paperName}&Qno=1&OptionSelected=${savedOption}">
            <button class="first_section_june">✅ Multiple Choice Questions</button>
        </a>
    </div>
    <div>
        <a href="#">
            <button class="first_section_october">📖 Theoretical Questions</button>
        </a>
    </div>
`;


// Inject the HTML into the page
document.querySelector(".first_section_button").innerHTML = firstSectionHTML;
